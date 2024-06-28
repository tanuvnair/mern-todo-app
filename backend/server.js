// Loads requires packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/todoList");

// Loads environment variables
require("dotenv").config();

// Creates an instance of express app
const app = express();
const PORT = process.env.port || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log("Could not connect to MongoDB...", err));

// Get saved tasks from the database
app.get("/getTodoList", (req, res) => {
    TodoModel.find({})
        .then((todoList) => {
            res.json(todoList);
        })
        .catch((err) => res.json(err));
});

// Add new task to the database
app.post("/addTodoList", (req, res) => {
    TodoModel.create({
        title: req.body.title,
        desc: req.body.desc,
        status: req.body.status,
    })
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});

// Update task fields
app.post("/updateTodoList/:id", (req, res) => {
    const id = req.params.id;
    const updateData = {
        title: req.body.title,
        desc: req.body.desc,
        status: req.body.status,
    };

    TodoModel.findByIdAndUpdate(id, updateData)
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});

// Delete task from database
app.delete("/deleteTodoList/:id", (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndDelete({ _id: id })
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
