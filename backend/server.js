const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static("images"));

const projects = [
  {
    title: "QR Code Billing System",
    description: "Smart QR billing system",
    image: "https://mern-portfolio-veds.onrender.com/images/gpay.jpeg",
    link: "/QR_CODE.pdf",
  },
  {
    title: "NAVIA Campus Robot",
    description: "Voice + sensor navigation robot",
    image: "https://mern-portfolio-veds.onrender.com/images/Navia.jpeg",
    link: "/Navia.pdf",
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