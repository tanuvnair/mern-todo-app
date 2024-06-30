import React from "react";
import { useEffect, useState } from "react";
import "./todos.css";
import { Todo } from "./Todo.jsx";

function Todos() {
    useEffect(() => {
        fetch("http://localhost:3001/getTodos")
            .then((response) => response.json())
            .then((json) => setTodos(json));
    }, []);

    const [todos, setTodos] = useState([]);

    return (
        <div className="todos-container">
            <h1><span className="text-do">ToDo</span> List <small>({todos?.length})</small></h1>
            <ul className="todos">
                {todos.map((todo) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default Todos;
