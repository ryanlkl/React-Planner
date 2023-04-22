import React, { useState } from 'react';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','twentyone','twentytwo','twentythree','twentyfour','twentyfive','twentysix','twentyseven','twentyeight','twentynine','thirty','thirtyone'];

export default function generateCalendar(month, year, events, setEvents) {
	const [currentMonth, setCurrentMonth] = useState(month);
	const [currentYear, setCurrentYear] = useState(year);

	const handlePrevMonth = () => {
		if (currentMonth === 0) {
			setCurrentMonth(11);
			setCurrentYear(currentYear - 1);
		} else {
			setCurrentMonth(currentMonth - 1);
		}
	};

	const handleNextMonth = () => {
		if (currentMonth === 11) {
			setCurrentMonth(0);
			setCurrentYear(currentYear + 1);
		} else {
			setCurrentMonth(currentMonth + 1);
		}
	};

	const handleToday = () => {
		setCurrentMonth((new Date()).getMonth());
		setCurrentYear((new Date()).getFullYear());
	};

	const handleDateClick = (day) => {
		const dateString = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
		if (events[dateString]) {
			// Handle existing event
		} else {
			// Handle new event
		}
	};

	const getDaysInMonth = (month, year) => {
		return new Date(year, month + 1, 0).getDate();
	};

	const getFirstDayOfMonth = (month, year) => {
		return new Date(year, month, 1).getDay();
	};

	const renderCalendar = () => {
		const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
		const lastDay = getDaysInMonth(currentMonth, currentYear);
		let day = 1;
		const rows = [];
		for (let i = 0; i < 6; i++) {
			const cells = [];
			for (let j = 0; j < 7; j++) {
				if (i === 0 && j < firstDay) {
					cells.push(<td key={`${i}-${j}`}></td>);
				} else if (day > lastDay) {
					cells.push(<td key={`${i}-${j}`}></td>);
				} else {
					const dateString = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
					let className = '';
					if ((new Date()).getFullYear() === currentYear && (new Date()).getMonth() === currentMonth && (new Date()).getDate() === day) {
						className += ' today';
					}
					if (events[dateString]) {
						className += ' event';
					}
					cells.push(<td key={`${i}-${j}`} className={className}><button className="dates" id={days[day - 1]} onClick={() => handleDateClick(day)}>{day}</button></td>);
                }
            }
        }
    }
}
