import React from "react";

export const Todo = ({ todo }) => {
    return (
        <li>
            <div className="left">
                <input type="checkbox" className="todo-checkbox" />
                <h3>{todo.title}</h3>
            </div>

            <div className="right">
                <button>Update</button>
                <button>Delete</button>
            </div>
        </li>
    );
};
