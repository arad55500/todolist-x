import React, { useState } from 'react';
import NodeList from './components/NodeList';
import './App.css';

function App() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    return (
        <div>
            <h1>To-do List X V1.1 | aradokanin.com</h1>
            <NodeList selectedDate={selectedDate} />
        </div>
    );
}

export default App;
