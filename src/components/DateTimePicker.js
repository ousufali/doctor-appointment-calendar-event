import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import SeleclComponent from "./SelectComponent"


function getNextValidDate(date) {
  if (date.getDay() === 0) {
    // If it's Sunday (0), add 1 day to get Monday (1)
    date.setDate(date.getDate() + 1);
  }
  return date;
}

const today = new Date();
const minDate = getNextValidDate(today); // Get the next valid date from today

let maxDate = new Date(minDate);
maxDate.setDate(maxDate.getDate() + 6);

let sunday = new Date();
while (true) {
  sunday.setDate(sunday.getDate() + 1)
  if (sunday.getDay() === 0) {
    break
  }
}

// Function to generate an array of times within a specified range
const generateTimeRange = (startHour, endHour, intervalMinutes) => {
  const times = [];
  let currentTime = new Date();
  currentTime.setMinutes(0);
  currentTime.setSeconds(0);
  currentTime.setMilliseconds(0);

  while (currentTime.getHours() < endHour) {
    if (currentTime.getHours() >= startHour) {
      times.push(currentTime);
    }
    currentTime = new Date(currentTime.getTime() + intervalMinutes * 60000);
  }

  return times;
};

console.log("==>", setHours(setMinutes(new Date(), 0), 17))

const DateTimePicker = ({ onChange, placeholder }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      // second: '2-digit',
    };

    const formattedDate = date.toLocaleString(date, options);
    // const date_string = date.toString()
    // console.log(date_string)
    onChange(formattedDate)
  }

  // Generate an array of times to exclude (e.g., from 9:00 AM to 5:00 PM)
  const excludedTimes = generateTimeRange(9, 17, 60); // Adjust the range and interval as needed
  console.log(excludedTimes)
  return (
    <div>
      <SeleclComponent
        placeholder={placeholder}
        options={[]}
        changeHandler={onChange}
        is_hospital_selection={false}
      />
      <DatePicker
        className='datePickerLibraryDiv'
        onChange={handleChange}
        showTimeSelect

        dateFormat="MMMM d, yyyy h:mm aa"
        excludeDates={[sunday]}
        minDate={minDate}
        maxDate={maxDate}

        excludeTimes={excludedTimes}
        timeFormat="HH:mm"
        timeIntervals={60}


      />
    </div>
  );
};

export default DateTimePicker;

// "2023-10-06T19:15:00.414Z"