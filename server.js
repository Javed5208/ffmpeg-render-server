const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FFmpeg Render Server Running");
});

app.get("/ffmpeg", (req, res) => {
  exec("ffmpeg -version", (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
    res.type("text/plain").send(stdout);
  });
});

app.listen(process.env.PORT || 3000);
