import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [currentForm, setCurrentForm] = useState('login');
  const backgroundClass = currentForm === 'todolist' ? 'todolist-bg' : '';

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  const logout = () => {
    setCurrentForm('login'); // Return to the login page
    // Additional logout logic if needed
};

return (
  <div className={`App ${backgroundClass}`}>
    {currentForm === 'login' && (
      <Login onFormSwitch={toggleForm} />
    )}
    {currentForm === 'register' && (
      <Register onFormSwitch={toggleForm} />
    )}
    {currentForm === 'todolist' && (
      <div>
        <Header />
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} logout={logout} />
        <ToDoForm addTask={addTask} />
      </div>
    )}
  </div>
);
}

export default App;
