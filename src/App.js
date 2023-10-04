import React, { useEffect, useState } from 'react';
import HospitalSelection from './components/HospitalSelection';
import DateTimePicker from './components/DateTimePicker';
import './App.css';

const App = ({ hospital, bhc, cph, lhh }) => {
  const [formData, setFormData] = useState({
    name: '',
    datetime: '',
    hospital: '',
  });
  const [backgroundImage, setBackgroundImage] = useState(null); // Default background image
  const [selectedHospital, setSelectedHospital] = useState(null); // Default background image


  const bimage = {
    content: '""',
    backgroundImage: `url(${hospital})`, // Replace with your image path
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3, // Adjust the opacity here (0.0 to 1.0)
    zIndex: -1, // This places the pseudo-element below the content
  };

  useEffect(() => {
    setBackgroundImage(bimage)
  }, [])

  const handleHospitalChange = (event) => {
    event.preventDefault()

    const selectedOption = event.target.value;
    console.log("selectedOption:  ", selectedOption)
    setSelectedHospital(selectedOption)
    const bgImage = event.target.options[event.target.selectedIndex].getAttribute(
      'data-bg-image'
    );

    setFormData({
      ...formData,
      hospital: selectedOption,
    });

    switch (selectedOption) {
      case "BellevueHospitalCenter":
        setBackgroundImage({
          content: '""',
          backgroundImage: `url(${bhc})`,
          backgroundSize: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3,
          zIndex: -1,
        });
        break;
      case "ColumbiaPresbyterianHospital":
        setBackgroundImage({
          content: '""',
          backgroundImage: `url(${cph})`,
          backgroundSize: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3,
          zIndex: -1,
        });
        break;
      case "LenoxHillHospital":
        console.log("asdasdasd")
        setBackgroundImage({
          content: '""',
          backgroundImage: `url(${lhh})`,
          backgroundSize: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3,
          zIndex: -1,
        });
        break;

      default:
        setBackgroundImage(bimage)
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can access the form data in the formData state and perform further actions.
    console.log('Form submitted:', formData);
  };



  return (
    <div className="form-background" >
      {/* <div  style={{ backgroundImage: `url(${backgroundImage})` }}> </div> */}
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
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
              required
            />
          </div>

          <HospitalSelection formData={formData} handleHospitalChange={handleHospitalChange} />
          <DateTimePicker formData={formData} setFormData={setFormData} selectedHospital={selectedHospital} />
          <button className="form-button" type="submit">
            Book an Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
