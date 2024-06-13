const { writeToFile } = require("./fileServices");
const {
  runCppCodeCmd,
  runNodeJsCodeCmd,
  runPythonCodeCmd,
} = require("../commands/shellScripts");

const codeRunner = (language, code, shellProcess, res) => {
  switch (language.toLowerCase()) {
    case "javascript":
      writeToFile("dev/main.js", code);
      shellProcess.stdin.write(runNodeJsCodeCmd + "\n");
      break;
    case "python":
      writeToFile("dev/main.py", code);
      shellProcess.stdin.write(runPythonCodeCmd + "\n");
      break;
    case "c++":
      writeToFile("dev/main.cpp", code);
      shellProcess.stdin.write(runCppCodeCmd + "\n");
      break;
    default:
      console.log("Invalid language");
      return true; 
  }
};

module.exports = { codeRunner };
