import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import {
  listAtoms,
  getAtom,
  listProblems,
  getProblem,
  draftProblem
} from "./dataAccess.js";

import {
  evaluateLeanProof,
  evaluatePythonCode
} from "./evaluators.js";

const server = new Server(
  {
    name: "logos-table-mcp",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_atoms",
        description: "List all philosophical atoms in the Logos Table.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_atom",
        description: "Get details for a specific philosophical atom.",
        inputSchema: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
          required: ["id"],
        },
      },
      {
        name: "list_problems",
        description: "List all LeetCode problems in the Logos Table.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_problem",
        description: "Get details for a specific problem.",
        inputSchema: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
          required: ["id"],
        },
      },
      {
        name: "evaluate_lean_proof",
        description: "Compiles and evaluates a Lean 4 proof. Returns success status and output.",
        inputSchema: {
          type: "object",
          properties: {
            code: { type: "string" },
          },
          required: ["code"],
        },
      },
      {
        name: "evaluate_python_code",
        description: "Executes Python code (like test cases). Returns success status and output.",
        inputSchema: {
          type: "object",
          properties: {
            code: { type: "string" },
          },
          required: ["code"],
        },
      },
      {
        name: "draft_problem",
        description: "Drafts a new problem JSON file to data/drafts/problems. Must perfectly match the ProblemSchema.",
        inputSchema: {
          type: "object",
          properties: {
            problemData: { type: "object" },
          },
          required: ["problemData"],
        },
      }
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    switch (request.params.name) {
      case "list_atoms": {
        const atoms = await listAtoms();
        return {
          content: [{ type: "text", text: JSON.stringify(atoms, null, 2) }],
        };
      }
      case "get_atom": {
        const id = request.params.arguments?.id as string;
        const atom = await getAtom(id);
        return {
          content: [{ type: "text", text: JSON.stringify(atom, null, 2) }],
        };
      }
      case "list_problems": {
        const problems = await listProblems();
        return {
          content: [{ type: "text", text: JSON.stringify(problems, null, 2) }],
        };
      }
      case "get_problem": {
        const id = request.params.arguments?.id as string;
        const problem = await getProblem(id);
        return {
          content: [{ type: "text", text: JSON.stringify(problem, null, 2) }],
        };
      }
      case "evaluate_lean_proof": {
        const code = request.params.arguments?.code as string;
        const result = await evaluateLeanProof(code);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      }
      case "evaluate_python_code": {
        const code = request.params.arguments?.code as string;
        const result = await evaluatePythonCode(code);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      }
      case "draft_problem": {
        const data = request.params.arguments?.problemData;
        const result = await draftProblem(data);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      }
      default:
        throw new Error(`Unknown tool: ${request.params.name}`);
    }
  } catch (error: any) {
    return {
      content: [{ type: "text", text: `Error: ${error.message}` }],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Logos Table MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
