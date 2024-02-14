import React, { useState } from 'react';
import MyCalendar from './MyCalendar';
import TodoList from './TodoList';
import './App.css';

function NodeList() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    return (
        <div className="App">
            <div className="App-split">
                <MyCalendar onSelectDate={date => setSelectedDate(date.toISOString().split('T')[0])} />
                <TodoList selectedDate={selectedDate} />
            </div>
        </div>
    );
}

export default NodeList;
