import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';

const CalendarWrap = styled.div`
  width: 60%;
  height: 40%;
  margin: 200px auto;
`;

function Calendar(props: { setIsOpen: any }) {
  // prop destruction
  const { setIsOpen } = props;
  // lib, style hooks
  // state, ref hooks
  const [value, setValue] = useState<[{ title: string; date: string }]>();
  const calendarRef = useRef(null);
  // formik
  // query hooks
  // calculated values
  // effects
  // handlers
  const handleDate = (info: { date: Date; dateStr: string; allDay: boolean; dayEl: any; jsEvent: any; view: any }) => {
    setIsOpen(true);
    setValue([{ title: 'hi', date: '2022-03-18' }]);
  };
  return (
    <CalendarWrap>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        ref={calendarRef}
        dateClick={handleDate}
        weekends={false}
        events={value}
      />
    </CalendarWrap>
  );
}

export { Calendar };
