import { z } from "zod";
import { AtomSchema, ProblemSchema, UserNoteSchema, TestCaseSchema } from "./schemas.js";

export type Atom = z.infer<typeof AtomSchema>;
export type Problem = z.infer<typeof ProblemSchema>;
export type UserNote = z.infer<typeof UserNoteSchema>;
export type TestCase = z.infer<typeof TestCaseSchema>;
