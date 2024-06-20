const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET all todos
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a todo
router.post("/", async (req, res) => {
    const todo = new Todo({
        id: req.body.id,
        title: req.body.title,
        desc: req.body.desc,
        status: req.body.status
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT a todo
router.put("/", async (req, res) => {
    try {
        const todo = await Todo.findById(req.body.id);
        todo.status = req.body.status;
        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// DELETE a todo
router.delete("/", async (req, res) => {
    try {
        const todo = await Todo.findById(req.body.id);
        const deletedTodo = await todo.remove();
        res.json(deletedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;