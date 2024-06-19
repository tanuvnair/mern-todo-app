// Loads requires packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Loads environment variables
require("dotenv").config();

// Creates an instance of express app
const app = express();
const PORT = process.env.port || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send("Hello from the backend side!");
});

const todosRouter = require("./routes/todos");
app.use('/todos', todosRouter);


// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log("Could not connect to MongoDB...", err));

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});