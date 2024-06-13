const devFolder = "./dev";

// For windows
const runCppCodeCmd = `g++ ${devFolder}/main.cpp -o ${devFolder}/main ; ${devFolder}/main.exe; rm ${devFolder}/main.exe;`;
const runPythonCodeCmd = `python ${devFolder}/main.py`;
const runNodeJsCodeCmd = `node ${devFolder}/main.js`;

module.exports = { runCppCodeCmd, runPythonCodeCmd, runNodeJsCodeCmd };
