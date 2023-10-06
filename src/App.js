import React, { useEffect, useState } from 'react';
import './App.css';
import SelectComponent from './components/SelectComponent';
import DateTimePicker from "./components/DateTimePicker"

import hospital from "./images/hospital.jpeg"
import bhc from './images/BELLEVUE-HOSPITAL-CENTER.jpg'
import cph from "./images/COLUMBIA-PRESBYTERIAN-HOSPITAL.jpg"
import lhh from './images/LENOX-HILL-HOSPITAL.jpg'

import Modal from 'react-modal';
Modal.setAppElement('#root'); // Set the root element for modal accessibility


const bimage = {
  content: '""',
  backgroundImage: `url(${hospital})`, // Replace with your image path
  backgroundSize: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  // opacity: 0.3, // Adjust the opacity here (0.0 to 1.0)
  zIndex: -1, // This places the pseudo-element below the content
  filter: 'brightness(40%)',
};

const hospitals_array = [
  { value: 'BellevueHospitalCenter', label: 'Bellevue Hospital Center' },
  { value: 'LenoxHillHospital', label: 'Lenox Hill Hospital' },
  { value: 'ColumbiaPresbyterianHospital', label: 'Columbia Presbyterian Hospital' },

]


const changeBackground = (setBackgroundImage, selectedOption) => {
  console.log("selectedHospital:", selectedOption)

  switch (selectedOption) {
    case "BellevueHospitalCenter":
      setBackgroundImage({
        // content: '""',
        backgroundImage: `url(${bhc})`,
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // opacity: 0.3,
        filter: 'brightness(40%)',
        zIndex: -1,
      });
      break;
    case "ColumbiaPresbyterianHospital":
      setBackgroundImage({
        // content: '""',
        backgroundImage: `url(${cph})`,
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // opacity: 0.3,
        filter: 'brightness(40%)',
        zIndex: -1,
      });
      break;
    case "LenoxHillHospital":
      console.log("asdasdasd")
      setBackgroundImage({
        // content: '""',
        backgroundImage: `url(${lhh})`,
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        filter: 'brightness(40%)',
        // opacity: 0.3,
        zIndex: -1,
      });
      break;

    default:
      setBackgroundImage(bimage)
      break;
  }
};


const App = ({ doctor_availability }) => {
  const [backgroundImage, setBackgroundImage] = useState(bimage);

  const [selectedHospital, setSelectedHospital] = useState(null); // Default background image
  const [name, setName] = useState(''); // Default background image
  const [dateTime, setDateTime] = useState("Select Date and Time"); // Default background image

  const [isModalOpen, setIsModalOpen] = useState(false);


  // useEffect(() => {

  // }, [])

  const handleHospitalChange = (selected_event, is_hospital_selection) => {
    if (is_hospital_selection) {
      // console.log("selected_value:  ",selected_event)
      setSelectedHospital(selected_event.value)
      changeBackground(setBackgroundImage, selected_event.value)
    }
    else {
      // time selected here
    }


  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("name:", name, "hospital:", selectedHospital, "dateTime:", dateTime, )
    setIsModalOpen(true)
  };

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
          <SelectComponent options={hospitals_array} changeHandler={handleHospitalChange} is_hospital_selection={true} placeholder={"Select a hospital"} />


          <label className="form-label" htmlFor="name" style={{ marginTop: "15px" }}>
            Consultation time
          </label>
          <DateTimePicker onChange={setDateTime} placeholder={dateTime} />

          {/* <SelectComponent options={timeSlotsArray} changeHandler={handleHospitalChange} is_hospital_selection={false} placeholder={"Date and Time"} /> */}


          <button className="form-button" type="submit" style={{ marginTop: "50px" }}>
            Book an Appointment
          </button>
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Congratulations Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h2 className="modal-title">Reservation confirmed for <div style={{ color: "#FFA000", display: 'inline' }}> {name} </div></h2>
        <p style={{ color: "#0F9D58" }}>
          Calendar event is created.
        </p>
        <button
          className="close-button"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default App;
