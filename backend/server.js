const express = require('express');
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log("Could not connect to MongoDB...", err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));