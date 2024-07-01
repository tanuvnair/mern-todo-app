import React from "react";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";

export const TodoForm = (props) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            title: input,
        });

        setInput('');
    }

    return (
        <form className="add-todos" onSubmit={handleSubmit}>
            <input className="text" type="text" placeholder="Add a new todo" value={input} onChange={handleChange}></input>
            <button className="btn" type="submit">
                <FaPlus></FaPlus>
            </button>
        </form>
    );
};

export default TodoForm;