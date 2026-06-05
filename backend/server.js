const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static("images"));

const projects = [
  {
    title: "QR Code Billing System",
    description: "Smart MERN stack QR billing application with instant receipt scanning.",
    image: "http://localhost:5000/images/gpay.png",
    link: "/QR_CODE.pdf",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "NAVIA Campus Guide Robot",
    description: "Autonomous voice & sensor navigation campus robot built with Raspberry Pi.",
    image: "http://localhost:5000/images/Navia.png",
    link: "/Navia.pdf",
    technologies: ["Raspberry Pi", "Sensor Navigation"],
  },
];

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});