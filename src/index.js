import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import hospital from "./images/hospital.jpeg"
import bhc from './images/BELLEVUE-HOSPITAL-CENTER.jpg'
import cph from "./images/COLUMBIA-PRESBYTERIAN-HOSPITAL.jpg"
import lhh from './images/LENOX-HILL-HOSPITAL.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App hospital={hospital} bhc={bhc} cph={cph} lhh={lhh} />
  </React.StrictMode>
);
