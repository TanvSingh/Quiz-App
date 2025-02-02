import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Make sure node-fetch is installed in your project

const app = express();

// Enable CORS to allow requests from the React frontend
app.use(cors());

// Create an endpoint to fetch quiz data from the external API
app.get("/quiz", async (req, res) => {
  try {
    // Fetch quiz data from the external API
    const response = await fetch("https://api.jsonserve.com/Uw5CrX");
    const data = await response.json();
    
    // Send the data back to the React app
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching quiz data" });
  }
});

// Set up the backend to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
