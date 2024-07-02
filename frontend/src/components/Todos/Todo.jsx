import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export const Todo = ({ todo, deleteTodo }) => {


    return (
        <li>
            <div className="left">
                <input type="checkbox" className="checkbox" />
                <h4>{todo.title}</h4>
            </div>

            <div className="right">
                <button className="btn" onClick={() => setEdit({id: todo._id, value: todo.title})}><FaPencilAlt /></button>
                <button className="btn" onClick={() => deleteTodo(todo._id)}><FaTrashAlt /></button>
            </div>
        </li>
    );
};

export default Todo;
