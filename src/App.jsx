import React, { useState } from 'react';
import NodeList from './components/NodeList';
import './App.css';

function App() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    return (
        <div>
            <h2>To-do List X (BETA) V1.1 by Arad Okanin | aradokanin.com</h2>
            <NodeList selectedDate={selectedDate} />
        </div>
    );
}

export default App;
