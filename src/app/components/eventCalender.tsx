import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid';

export const EventCalender = () => {

    // const changeDayTextColor = (arg:any) => {
    //     // Change text color of days in the week view
    //     if (arg.view.type === 'timeGridWeek') {
    //       return {
    //         classNames: ['custom-day-text'] // Add custom class for text color
    //       };
    //     }
    //   };

    return (
        <div className='text-purple-900'>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                    { title: 'Pro Event April', start: '2024-04-09', end: '2024-04-11', display: 'background', backgroundColor: "yellow", color: 'white', },
                    { title: 'Pro Event1 May', start: '2024-05-05', end: '2024-05-11', display: 'background', backgroundColor: "yellow", color: 'white'},
                ]}
                height="500px"
                // dayCellContent={changeDayTextColor}
            />
        </div>
    )
}
