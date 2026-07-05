import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export async function evaluatePythonCode(code: string) {
    const tempDir = os.tmpdir();
    const filePath = path.join(tempDir, `logos_temp_${Date.now()}.py`);
    
    await fs.writeFile(filePath, code, "utf-8");
    
    try {
        const { stdout, stderr } = await execFileAsync("python", [filePath], {
            env: { ...process.env, PYTHONIOENCODING: "utf-8" },
            timeout: 10000 // 10 seconds max
        });
        
        let output = stdout;
        if (stderr) {
            output += `\n${stderr}`;
        }
        
        // Clean up
        await fs.unlink(filePath).catch(() => {});
        
        return { success: true, output: output.trim() };
    } catch (error: any) {
        // Clean up
        await fs.unlink(filePath).catch(() => {});
        
        let output = error.stdout || "";
        if (error.stderr) {
            output += `\n${error.stderr}`;
        }
        
        return { success: false, output: output.trim() };
    }
}

export async function evaluateLeanProof(code: string) {
    const tempDir = os.tmpdir();
    const filePath = path.join(tempDir, `Submission_${Date.now()}.lean`);
    
    await fs.writeFile(filePath, code, "utf-8");
    
    try {
        const { stdout, stderr } = await execFileAsync("lean", [filePath], {
            timeout: 20000 // 20 seconds max
        });
        
        let output = stdout;
        if (stderr) {
            output += `\n${stderr}`;
        }
        
        const hasSorry = output.includes("declaration uses 'sorry'");
        const success = !hasSorry && !stderr;
        
        // Clean up
        await fs.unlink(filePath).catch(() => {});
        
        return { success: success, output: output.trim() };
    } catch (error: any) {
        // Clean up
        await fs.unlink(filePath).catch(() => {});
        
        let output = error.stdout || "";
        if (error.stderr) {
            output += `\n${error.stderr}`;
        }
        
        return { success: false, output: output.trim() };
    }
}
