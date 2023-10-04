import { useState } from "react";

const data = [
    {
        dayName: 'Wed \xa0\xa0 Oct 04 2023',
        LenoxHillHospital: ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM'],
        ColumbiaPresbyterianHospital: ['13:00 PM - 14:00 PM', '14:00 PM - 15:00 PM', '15:00 PM - 16:00 PM'],
        BellevueHospitalCenter: ['17:00 PM - 18:00 PM', '18:00 PM - 19:00 PM', '19:00 PM - 20:00 PM']
    },
    {
        dayName: 'Thu \xa0\xa0\xa0 Oct 05 2023',
        LenoxHillHospital: ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM'],
        ColumbiaPresbyterianHospital: ['13:00 PM - 14:00 PM', '14:00 PM - 15:00 PM', '15:00 PM - 16:00 PM'],
        BellevueHospitalCenter: ['17:00 PM - 18:00 PM', '18:00 PM - 19:00 PM', '19:00 PM - 20:00 PM']
    },
    {
        dayName: 'Fri \xa0\xa0\xa0\xa0\xa0  Oct 06 2023',
        LenoxHillHospital: ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM'],
        ColumbiaPresbyterianHospital: ['13:00 PM - 14:00 PM', '14:00 PM - 15:00 PM', '15:00 PM - 16:00 PM'],
        BellevueHospitalCenter: ['17:00 PM - 18:00 PM', '18:00 PM - 19:00 PM', '19:00 PM - 20:00 PM']
    }
]


const DateTimePicker = ({ formData, selectedHospital }) => {
    const [dateTimeData, setDateTimeData] = useState(data)
    console.log("selectedHospital:  ", selectedHospital)

    const handleDateTimeSelection = (event) => {
        event.preventDefault()
        console.log("selected date time")
    }

    return (
        <div className="form-group">
            <label className="form-label" htmlFor="hospital">
                Date and Time
            </label>
            <div className="hospital-select-container">
                <select
                    className="hospital-select"
                    id="hospital"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleDateTimeSelection}
                    required
                >

                    {(selectedHospital !== undefined && selectedHospital !== null) ? dateTimeData.map((days) => {
                        return <optgroup label={days.dayName} key={days.dayName}>
                            {days[selectedHospital].map((time) => {
                                return <option value={time} key={time}> {time}</option>
                            })}
                        </optgroup>
                    })
                        : <option > </option>
                    }

                    {/* value="LENOX-HILL-HOSPITAL"
                        value="COLUMBIA-PRESBYTERIAN-HOSPITAL"
                        value="BELLEVUE-HOSPITAL-CENTER"
                    */}
                </select>
                <div className="hospital-select-icon">▼</div>
            </div>
        </div>
    )
}



export default DateTimePicker;