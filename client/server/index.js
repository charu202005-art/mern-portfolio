const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/projects", (req, res) => {
    res.json([
        {
            title: "Portfolio Website",
            description: "Built with React and Node.js",
            image: "https://via.placeholder.com/300",
            link: "https://github.com"
        }
    ]);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});