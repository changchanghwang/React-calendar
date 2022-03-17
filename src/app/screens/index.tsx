import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function IndexScreen(props: {}) {
  // prop destruction
  // lib, style hooks
  // state, ref hooks
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  // formik
  // query hooks
  // calculated values
  // effects
  // handlers
  return <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />;
}

export { IndexScreen };
