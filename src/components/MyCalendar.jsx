import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar({ onSelectDate }) {
    const [value, onChange] = useState(new Date()); // Initialize value as an empty string

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                onClickDay={onSelectDate}
            />
        </div>
    );
}

export default MyCalendar;
