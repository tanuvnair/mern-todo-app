const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "in-progress", "completed"],
            default: "pending"
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Todo', TodoSchema);