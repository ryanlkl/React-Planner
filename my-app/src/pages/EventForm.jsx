import { useState } from 'react';

export default function EventForm(props) {

    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit({ title, startDate, endDate });
        setTitle('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Add Event'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input
            type='datetime-local'
            placeholder='Start date and time'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            />
            <input
            type='datetime-local'
            placeholder='End date and time'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            />
            <button type='submit'>Add Event</button>
        </form>
    );
}
