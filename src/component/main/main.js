import React, { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Plus from '../../img/Plus.svg'
import Kalendari from '../../img/Calendari.svg'
import StyleKalendar from '../../img/Calenari2.svg'
import '../../css/main/index.css'

const Mai = () => {
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        // Get the current date
        const date = new Date();
        // Set the current day
        setCurrentDay(date.getDate());
    }, []);
    return (
        <div className="god_of_main">
            <div>
                <div className="current_day">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                        <defs>
                        <clipPath id="clip54_61">
                            <rect id="Календарь" width="24.000000" height="24.000000" fill="white" fill-opacity="0" />
                        </clipPath>
                    </defs>
                        <g clip-path="url(#clip54_61)">
                            <rect id="rect" x="2.000000" y="2.000000" rx="2.000000" width="20.000000" height="20.000000" fill="#000000" fill-opacity="0" />
                            <rect id="rect" x="2.000000" y="2.000000" rx="2.000000" width="20.000000" height="20.000000" stroke="#808080" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" />
                            <path id="path" d="M2.02 7.72L2 7.75C1.57 7.75 1.25 7.41 1.25 7C1.25 6.58 1.57 6.25 2 6.25L2.02 6.27L2.02 7.72ZM21.98 6.27L22 6.25C22.42 6.25 22.75 6.58 22.75 7C22.75 7.41 22.42 7.75 22 7.75L21.98 7.72L21.98 6.27Z" fill="#000000" fill-opacity="0" fill-rule="nonzero" />
                            <path id="path" d="M2 7L22 7" stroke="#808080" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                            <line id="line" x1="2.000000" y1="5.500000" x2="2.000000" y2="11.500000" stroke="#808080" stroke-opacity="1.000000" stroke-width="1.500000" />
                            <line id="line" x1="22.000000" y1="5.500000" x2="22.000000" y2="11.500000" stroke="#808080" stroke-opacity="1.000000" stroke-width="1.500000" />
                            <text className="Date" id="Date" x="12" y="15" textAnchor="middle" fill="#808080" fontSize="10">
                                {currentDay}
                            </text>
                        </g>
                    </svg>
                    <p>
                        Сегодня
                    </p>
                </div>
                <div>
                    <img
                        className='plus'
                        src={Plus}
                        alt="Плюс"
                    />
                    <p>
                        Добавить задачу
                    </p>
                </div>
                <div>

                    <p>
                        Календарь
                    </p>
                </div>
            </div>
            <div>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    weekends={false}
                    events={[
                        { title: 'event 1', date: '2019-04-01' },
                        { title: 'event 2', date: '2019-04-02' }
                    ]}
                />
            </div>
        </div>
    )
}

export default Mai;