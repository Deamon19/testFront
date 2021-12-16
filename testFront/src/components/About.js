import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>Find out more</h1>
      <Link to="/services">
        <button type="button" class="btn btn-success">
          Learn more
        </button>
      </Link>
    </div>
  );
}

export default About;
