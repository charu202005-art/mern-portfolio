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
    ]);

    console.log("Data inserted");
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    await mongoose.disconnect();
  }
}

seedData();