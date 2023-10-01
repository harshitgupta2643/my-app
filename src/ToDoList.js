import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, handleToggle, handleFilter, logout }) => {
    const handleLogout = () => {
        logout(); // Call the logout function passed from the parent component (App.js)
    };

    return (
        <div className="todo-list-container">
            {/* Your to-do list rendering code here */}
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} key={todo.id} />
                );
            })}
            <div className="clear">
                <button style={{ margin: '20px' }} onClick={handleFilter}>Clear Completed</button>
            </div>
            {/* Add a container for the Logout button */}
            <div className="logout-button-container">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default ToDoList;
