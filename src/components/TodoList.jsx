import React, { useState, useEffect } from 'react';

function TodoList({ selectedDate }) {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Load todos from local storage
        const savedTodos = JSON.parse(localStorage.getItem(selectedDate)) || [];
        setTodos(savedTodos);
    }, [selectedDate]);

    const addTodo = () => {
        if (todos.length < 15 && inputValue.trim() !== '') {
            const newTodos = [...todos, inputValue];
            setTodos(newTodos);
            localStorage.setItem(selectedDate, JSON.stringify(newTodos));
            setInputValue('');
        }
    };

    const removeTodo = index => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
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
