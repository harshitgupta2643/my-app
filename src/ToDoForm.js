import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="task">
                <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            </div>
            <div className="submit">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default ToDoForm;