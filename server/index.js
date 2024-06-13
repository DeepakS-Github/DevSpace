const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { spawn } = require("child_process");
const os = require("os");
const { codeRunner } = require("./services/codeRunnerServices");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());

let shellProcess;

io.on("connection", (socket) => {
  console.log("Client connected");

  let shell;
  if (os.platform() === "win32") {
    shell = "powershell.exe"; // or 'cmd.exe'
  } else {
    shell = "bash";
  }

  shellProcess = spawn(shell, shell === "bash" ? ["-i"] : [], {
    stdio: ["pipe", "pipe", "pipe"],
  });

  shellProcess.stdout.on("data", (data) => {
    console.log(data.toString());
    socket.emit("output-success", data.toString());
  });

  shellProcess.stderr.on("data", (data) => {
    console.log(data.toString());
    socket.emit("output-error", data.toString());
  });

  socket.on("input", (data) => {
    shellProcess.stdin.write(data + "\n");
  });

  socket.on("disconnect", () => {
    shellProcess.kill();
    console.log("Client disconnected");
  });
});

app.post("/run/:language", (req, res) => {
  try {
    let code = req.body.code;
    const language = req.params.language;
    let isInvalidLanguage = codeRunner(language, code, shellProcess);
    if (isInvalidLanguage) {
      res.status(400).send({ message: "Invalid language" });
    } else {
      res.status(200).send({ message: "Code running..." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong!" });
  }
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
