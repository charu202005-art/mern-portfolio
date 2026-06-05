const mongoose = require("mongoose");
const Project = require("./models/Project");

const MONGO_URL = "mongodb+srv://charu202005:<db_password>@cluster0.wg5nwdb.mongodb.net/?appName=Cluster0";

async function seedData() {
  try {
    // connect FIRST
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB Connected");

    // THEN run queries
    await Project.deleteMany();

    await Project.insertMany([
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
    ]);

    console.log("Data inserted");
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    await mongoose.disconnect();
  }
}

seedData();