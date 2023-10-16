const { min } = require('lodash');
const { TIMEOFFSET } = require('./config')


const dateTimeForCalander = (time_string) => {

    // let date = new Date();

    // let year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // if (month < 10) {
    //     month = `0${month}`;
    // }
    // let day = date.getDate();
    // if (day < 10) {
    //     day = `0${day}`;
    // }
    // let hour = date.getHours();
    // if (hour < 10) {
    //     hour = `0${hour}`;
    // }
    // let minute = date.getMinutes();
    // if (minute < 10) {
    //     minute = `0${minute}`;
    // }

    const [datePart, timePart] = time_string.split(" at ");
    var [month, day, year] = datePart.split(" ");
    const [time, period] = timePart.split(" ")
    var [hour, minute ] = time.split(":");
    
    if (period.toLowerCase() == 'pm'){
        hour = parseInt(hour) + 12
    } 
    month = monthNameToNumber(month)
    day = day.split(',')[0]
    console.log(year, '|', month, '|', day, '|', hour, '|', minute, '|')


    let newDateTime = `${year}-${month}-${day}T${hour}:00:00.000${TIMEOFFSET}`;
    // let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`;

    let event = new Date(Date.parse(newDateTime));

    let startDate = event;
    // Delay in end time is 1
    let endDate = new Date(new Date(startDate).setHours(startDate.getHours() + 1));

    console.log(startDate)

    console.log(endDate)


    return {
        'start': startDate,
        'end': endDate
    }
};

function monthNameToNumber(monthName) {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const monthNumber = monthNames.findIndex(month => month.toLowerCase() === monthName.toLowerCase()) + 1;

    return monthNumber;
}



module.exports = {
    dateTimeForCalander
}