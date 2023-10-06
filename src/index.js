import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const doctor_availability = 
{
  LenoxHillHospital:[9,1],
  ColumbiaPresbyterianHospital:[2,5],
  BellevueHospitalCenter: [8,0],
}

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App doctor_availability={doctor_availability} />
  // </React.StrictMode>
);
