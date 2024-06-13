const { writeToFile } = require("./fileServices");
const {
  runCppCodeCmd,
  runNodeJsCodeCmd,
  runPythonCodeCmd,
} = require("../commands/shellScripts");

const codeRunner = (language, code, shellProcess) => {
  switch (language.toLowerCase()) {
    case "javascript":
      writeToFile("dev/main.js", code);
      shellProcess.stdin.write(runNodeJsCodeCmd + "\n");
      return true;
    case "python":
      writeToFile("dev/main.py", code);
      shellProcess.stdin.write(runPythonCodeCmd + "\n");
      return true;
    case "c++":
      writeToFile("dev/main.cpp", code);
      shellProcess.stdin.write(runCppCodeCmd + "\n");
      return true;
    default:
      console.log("Invalid language");
      return false; 
  }
};

module.exports = { codeRunner };
