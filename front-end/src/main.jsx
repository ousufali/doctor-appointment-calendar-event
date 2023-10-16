import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import hospital from "./images/hospital.jpeg"
import bhc from './images/BELLEVUE-HOSPITAL-CENTER.jpg'
import cph from "./images/COLUMBIA-PRESBYTERIAN-HOSPITAL.jpg"
import lhh from './images/LENOX-HILL-HOSPITAL.jpg'


const changeBackground = (setBackgroundImage, selectedOption) => {
  switch (selectedOption) {
    case "BellevueHospitalCenter":
      setBackgroundImage({
        backgroundImage: `url(${bhc})`,
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        filter: 'brightness(40%)',
        zIndex: -1,
      });
      break;
    case "ColumbiaPresbyterianHospital":
      setBackgroundImage({
        backgroundImage: `url(${cph})`,
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        filter: 'brightness(40%)',
        zIndex: -1,
      });
      break;
    case "LenoxHillHospital":

      setBackgroundImage({
        backgroundImage: `url(${lhh})`,
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        filter: 'brightness(40%)',
        zIndex: -1,
      });
      break;

    default:
      const default_background ={
        content: '""',
        backgroundImage: `url(${hospital})`, 
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        
        zIndex: -1, // This places the pseudo-element below the content
        filter: 'brightness(40%)',
      }
      setBackgroundImage(default_background);
      return default_background
  }
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App changeBackground={changeBackground} />
  // </React.StrictMode>
);
