// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use std::process::Command;
use std::fs;

#[derive(serde::Serialize)]
pub struct ExecutionResult {
    pub success: bool,
    pub output: String,
}

#[tauri::command]
fn execute_python(code: String) -> Result<ExecutionResult, String> {
    let temp_dir = std::env::temp_dir();
    let file_path = temp_dir.join("logos_temp.py");
    fs::write(&file_path, code).map_err(|e| e.to_string())?;

    let output = Command::new("python")
        .arg(&file_path)
        .env("PYTHONIOENCODING", "utf-8")
        .output()
        .map_err(|e| e.to_string())?;

    let success = output.status.success();
    let mut out_str = String::from_utf8_lossy(&output.stdout).into_owned();
    let err_str = String::from_utf8_lossy(&output.stderr).into_owned();
    
    if !err_str.is_empty() {
        out_str.push_str("\n");
        out_str.push_str(&err_str);
    }

    Ok(ExecutionResult { success, output: out_str })
}

#[tauri::command]
fn execute_lean(code: String) -> Result<ExecutionResult, String> {
    let temp_dir = std::env::temp_dir();
    let file_path = temp_dir.join("Submission.lean");
    fs::write(&file_path, code).map_err(|e| e.to_string())?;

    let output = Command::new("lean")
        .arg(&file_path)
        .output()
        .map_err(|e| e.to_string())?;

    let mut out_str = String::from_utf8_lossy(&output.stdout).into_owned();
    let err_str = String::from_utf8_lossy(&output.stderr).into_owned();
    
    if !err_str.is_empty() {
        if !out_str.is_empty() {
            out_str.push_str("\n");
        }
        out_str.push_str(&err_str);
    }

    let has_sorry = out_str.contains("declaration uses 'sorry'");
    let success = output.status.success() && !has_sorry && err_str.is_empty();

    Ok(ExecutionResult { success, output: out_str })
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![execute_python, execute_lean])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
