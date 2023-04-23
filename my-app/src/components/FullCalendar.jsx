import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { React, useState } from 'react';
import EventForm from '../pages/EventForm';

export default function FullCalendar() {

    const [events, setEvents] = useState([]);

    function handleEventAdd(event) {
        setEvents([...events, event]);
    };

    function handleSubmit(eventData) {
        const newEvent = {
            title: eventData.title,
            start: eventData.startDate,
            end: eventData.endDate,
        };
        handleEventAdd(newEvent);
    };

    return (
        <div>
            <Calendar
                plugins={[dayGridPlugin]}
                events={events}
            />
            <EventForm onSubmit={handleSubmit} />
        </div>
    )
}
