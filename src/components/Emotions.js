import React, { useState, useEffect } from 'react';
import '../App.css';
import UserForm from './Form';
import UserMap from './UserMap';
import Chart from './UserChart';
function About() {
  return (
    <div>
      <h1>Emotions</h1>
      <div className="conteiner-fluid d-flex align-items-center flex-column">
        <UserMap />
      </div>
      <div className='container-fluid d-flex flex-md-column flex-xl-row flex-sm-column justify-space-between'>
        <div>
          <UserForm />
        </div>
        <Chart />
      </div>
    </div>
  );
}

export default About;
