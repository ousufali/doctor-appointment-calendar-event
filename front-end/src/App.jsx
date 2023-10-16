import React, { useEffect, useState } from 'react';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";


import './App.css';
import SelectComponent from './components/SelectComponent';
import DateTimePicker from "./components/DateTimePicker";
import CalendarService from "./services/calendar"
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Set the root element for modal accessibility

const hospitals_array = [
  { value: 'BellevueHospitalCenter', label: 'Bellevue Hospital Center' },
  { value: 'LenoxHillHospital', label: 'Lenox Hill Hospital' },
  { value: 'ColumbiaPresbyterianHospital', label: 'Columbia Presbyterian Hospital' },

]
const description = "The patient is an individual who needs medical evaluation and care, and you are the attending doctor who is responsible for their examination and treatment."



const App = ({ changeBackground }) => {
  const [backgroundImage, setBackgroundImage] = useState(changeBackground(() => { }, "x"));
  const [selectedHospital, setSelectedHospital] = useState(undefined);
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState("Select Date and Time");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false)
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 0),);


  const handleHospitalChange = (selected_event, is_hospital_selection) => {
    if (is_hospital_selection) {
      // setSelectedHospital(selected_event.value)
      setSelectedHospital(selected_event)
      console.log(selected_event, "selected_event")
      changeBackground(setBackgroundImage, selected_event.value)
    }
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log("name:", name, "hospital:", selectedHospital, "dateTime:", dateTime,)
    if (dateTime !== "Select Date and Time") {
      setShowLoader(true)
      const is_created = await CalendarService.create_event({ name, selectedHospital, dateTime, description })
      console.log("is_event_created:  ", is_created)
      if (is_created) {
        setShowLoader(false)
        setIsModalOpen(true)
      }
    } else {
      console.log("Seclect date please.")
    }

  };
  const closePopUp = () => {
    setIsModalOpen(false)
    setName('')
    setSelectedHospital([])
    changeBackground(setBackgroundImage, "default")
    setDateTime("Select Date and Time")
    setStartDate(setHours(setMinutes(new Date(), 0), 0),)
  }

  return (
    <div className="form-background" >
      <div className='image-background' style={backgroundImage}> </div>

      <div className="form-container">
        <h1 className='heading'>Appointment Booking Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Patient Name:
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <label className="form-label" htmlFor="name">
            Visit Location
          </label>
          <SelectComponent selected_value={selectedHospital} options={hospitals_array} changeHandler={handleHospitalChange} is_hospital_selection={true} placeholder={'Select hospital'} is_required={true} />


          <label className="form-label" htmlFor="name" style={{ marginTop: "15px" }}>
            Consultation time
          </label>
          <DateTimePicker selectedHospital={selectedHospital} onChange={setDateTime} placeholder={dateTime} startDate={startDate} setStartDate={setStartDate} />
          <div style={{display: "flex"}}>
            <button className="form-button" type="submit" style={{ marginTop: "50px" }}>
              Book an Appointment
            </button>
            {showLoader ? <div class="loader"></div> : <></>}  
          </div>
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Congratulations Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h2 className="modal-title">
          Reservation confirmed <div style={{ color: "#FFA000", display: 'inline' }}> {name} </div>
          for <div style={{ color: "#0F9D58", display: 'inline' }}>{dateTime} </div>
        </h2>
        <p style={{ color: "#DB4437" }}>
          Created calendar event for doctor.
        </p>
        <button
          className="close-button"
          onClick={closePopUp}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default App;
