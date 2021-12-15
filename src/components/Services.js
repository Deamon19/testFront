import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
function Services() {
    return (
      <div>
      <h1>Schedule</h1>
      <Link to="/services">
        <button type="button" class="btn btn-success">
          Enroll
        </button>
      </Link>
    </div>
    );
  }
  
  export default Services;
  