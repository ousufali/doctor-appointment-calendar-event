import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
const generateTimeRange = (startHour, endHour, x=0, y=0) => {
  const times = [];

  var i = startHour
  while( i< endHour){
    let currentTime = new Date();
    currentTime.setMinutes(0);
    currentTime.setSeconds(0);
    currentTime.setMilliseconds(0);
    currentTime.setHours(i);
    times.push(currentTime);
    i++
  }

  var j = x
  while( j< y){
    let currentTime2 = new Date();
    currentTime2.setMinutes(0);
    currentTime2.setSeconds(0);
    currentTime2.setMilliseconds(0);
    currentTime2.setHours(j);
    times.push(currentTime2);
    j++
  }


  // while (currentTime.getHours() < endHour) {
  //   if (currentTime.getHours() >= startHour) {
  //     times.push(currentTime);
  //   }
  //   currentTime = new Date(currentTime.getTime() + intervalMinutes * 60000);
  // }

  return times;
};
// console.log("==>", setHours(setMinutes(new Date(), 0), 17))

const LenoxHillHospital_excluded_time  = generateTimeRange(0, 6,13, 24);    
const ColumbiaPresbyterianHospital_excluded_time = generateTimeRange(0, 13,19, 24);
const BellevueHospitalCenter_excluded_time = generateTimeRange(6, 24); // Adjust the range and interval as needed


console.log("BellevueHospitalCenter_excluded_time",typeof(BellevueHospitalCenter_excluded_time))
console.log("BellevueHospitalCenter_excluded_time",typeof(ColumbiaPresbyterianHospital_excluded_time))
console.log("BellevueHospitalCenter_excluded_time",typeof(LenoxHillHospital_excluded_time))



const DateTimePicker = ({ onChange, placeholder, selectedHospital ,startDate, setStartDate}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {

    if (selectedHospital) {
      setIsDisabled(false)
      onChange("Select Date and Time")
      console.log("selectedHospital", selectedHospital)

    }

  }, [selectedHospital])

  const handleChange = (date) => {
    setStartDate(date)
    console.log("handleChange:  ",date)
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
  const handleDateClick = () => {
    console.log("-=-=>", selectedHospital)
    if (!selectedHospital) {
      setIsDisabled(true)
      onChange("Please select hospital first.")
    }
  }


  return (
    <div>
      <SeleclComponent
        placeholder={placeholder}
        options={[]}
        changeHandler={onChange}
        is_required={false}
      />
      <DatePicker
        className='datePickerLibraryDiv'
        onChange={handleChange}
        showTimeSelect
        
        dateFormat="MMMM d, yyyy h:mm aa"
        excludeDates={[sunday]}
        minDate={minDate}
        maxDate={maxDate}
        excludeTimes={ selectedHospital === 'BellevueHospitalCenter' ? BellevueHospitalCenter_excluded_time:  selectedHospital === 'ColumbiaPresbyterianHospital' ? ColumbiaPresbyterianHospital_excluded_time : LenoxHillHospital_excluded_time }
        timeFormat="HH:mm"
        timeIntervals={60}
        disabled={isDisabled}

        onInputClick={handleDateClick}
        selected={startDate}

      />
    </div>
  );
};

export default DateTimePicker;

// "2023-10-06T19:15:00.414Z"