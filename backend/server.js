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
    image: "http://localhost:5000/images/gpay.jpeg",
    link: "/QR_CODE.pdf",
  },
  {
    title: "NAVIA Campus Robot",
    description: "Voice + sensor navigation robot",
    image: "http://localhost:5000/images/Navia.jpeg",
    link: "/Navia.pdf",
  },
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({
    success: true,
    message: "Message received successfully!"
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});