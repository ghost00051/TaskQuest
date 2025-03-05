import React, { useState } from "react";
import './app.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const renderCalendar = () => {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        const daysInMonth = [];
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            daysInMonth.push(new Date(year, month, i));
        }

        // getDay() возвращает 0 (вс) - 6 (сб), поэтому мы используем (startDay + 6) % 7
        const startDay = (firstDayOfMonth.getDay() + 6) % 7; // Преобразуем к понедельнику
        const emptyDays = [];

        const prevMonthLastDay = new Date(year, month, 0);
        for (let i = startDay; i > 0; i--) {
            emptyDays.push(
                <div key={`empty-${i}`} className="day empty">
                    {prevMonthLastDay.getDate() - (i - 1)}
                </div>
            );
        }

        const endDay = lastDayOfMonth.getDay();
        const emptyDaysEnd = Array.from({ length: endDay === 0 ? 0 : 7 - endDay }, (_, i) => (
            <div key={`empty-end-${i}`} className="day empty"></div>
        ));

        const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

        return (
            <div className="calendar">
                <div className="header">
                    <button onClick={handlePrevMonth}>Prev</button>
                    <h2>{currentDate.toLocaleString('default', { month: 'long' })} {year}</h2>
                    <button onClick={handleNextMonth}>Next</button>
                </div>
                <div className="weekdays">
                    {weekDays.map((day, index) => (
                        <div key={index} className="day weekday">{day}</div>
                    ))}
                </div>
                <div className="days">
                    {emptyDays}
                    {daysInMonth.map((date) => (
                        <div key={date} className="day" data-date={date.toISOString().split('T')[0]}>
                            {date.getDate()}
                        </div>
                    ))}
                    {emptyDaysEnd}
                </div>
            </div>
        );
    };

    return (
        <div className="App">
            {renderCalendar()}
        </div>
    );
};

export default Calendar;