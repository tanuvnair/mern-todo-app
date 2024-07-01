import React, { useEffect, useState } from "react";
import "./todos.css";
import { Todo } from "./Todo.jsx";
import { TodoForm } from "./TodoForm.jsx";

export const Todos = () => {
    useEffect(() => {
        fetchTodos();
    }, []);

    const [todos, setTodos] = useState([]);

    const fetchTodos = () => {
        fetch("http://localhost:3001/getTodos")
            .then((response) => response.json())
            .then((json) => setTodos(json));
    };

    const addTodo = async (todo) => {
        try {
            const response = await fetch("http://localhost:3001/addTodo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: todo.title,
                }),
            });

            if (response.ok) {
                fetchTodos();
            } else {
                console.error("Failed to add todo:");
            }
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    return (
        <div className="todos-container">
            <h1>
                <span className="text-do">ToDo</span> List{" "}
                <small>({todos.length})</small>
            </h1>

            <TodoForm onSubmit={addTodo} />

            <ul className="todos">
                {todos.map((todo) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default Todos;
