import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export const Todo = ({ todo }) => {
    return (
        <li>
            <div className="left">
                <input type="checkbox" className="checkbox" />
                <h4>{todo.title}</h4>
            </div>

            <div className="right">
                <button className="btn"><FaPencilAlt /></button>
                <button className="btn"><FaTrashAlt /></button>
            </div>
        </li>
    );
};

export default Todo;
