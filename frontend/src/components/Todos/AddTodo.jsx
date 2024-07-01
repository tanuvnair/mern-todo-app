import React from "react";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";


const addTodo = (inputValue) => {
};

export const AddTodo = () => {
    return (
        <div className="add-todos">
            <input className="textbox" type="text"></input>
            <button className="btn">
                <FaPlus></FaPlus>
            </button>
        </div>
    );
};

export default AddTodo;