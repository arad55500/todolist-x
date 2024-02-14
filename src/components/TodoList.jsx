import React, { useState, useEffect } from 'react';

function TodoList({ selectedDate }) {
    const [todos, setTodos] = useState([]); // Initialize todos as an empty array
    const [inputValue, setInputValue] = useState(''); // Initialize input value as an empty string

    useEffect(() => {
        // Load todos from local storage
        const savedTodos = JSON.parse(localStorage.getItem(selectedDate)) || []; // Initialize savedTodos as an empty array
        setTodos(savedTodos); // Set todos to savedTodos
    }, [selectedDate]); // Pass selectedDate as a dependency

    const addTodo = () => {
        if (todos.length < 15 && inputValue.trim() !== '') {
            const newTodos = [...todos, inputValue]; // Add input value to todos
            setTodos(newTodos); // Set todos to newTodos
            localStorage.setItem(selectedDate, JSON.stringify(newTodos));
            setInputValue(''); // Clear input value
        }
    };

    const removeTodo = index => { // Remove todo at index
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos); // Set todos to newTodos
        localStorage.setItem(selectedDate, JSON.stringify(newTodos));
    };

    return (
        <div>
            <h2>To-do List for {selectedDate}</h2> 
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTodo}>+</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
