import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';

const Plan = () => {
  /* Data to be stored in the form */
  const [formData, setFormData] = useState({
    selectedDate: new Date(),
    location: '',
    checkInText: '',
    weatherText: '',
    avyText: '',
    advisoryText: ''
  });

  /* Handles if a field in the form changes */
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  /* Handles if the date in the form changes */
  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      selectedDate: date
    }));
  }

  return (
    <Form>
      {/* Date */}
      <Form.Group controlId="datePicker">
        <Form.Label>Date</Form.Label>
        <div className="d-flex flex-column">
          <DatePicker
            selected={formData.selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            className="form-control"
          />
        </div>
      </Form.Group>

      {/* Location */}
      <Form.Group controlId="textInput" className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="checkInText"
          value={formData.location}
          onChange={handleFormChange}
          placeholder="Location of the trip."
        />
      </Form.Group>

      {/* Check In */}
      <Form.Group controlId="textInput" className="mb-3">
        <Form.Label>Assemble Your Group</Form.Label>
        <Form.Control
          type="text"
          name="checkInText"
          value={formData.checkInText}
          onChange={handleFormChange}
          placeholder="Group Check In."
        />
      </Form.Group>

      {/* Text Input */}
      <Form.Group controlId="textInput" className="mb-3">
        <Form.Label>Anticipate The Hazard</Form.Label>
        <Form.Control
          type="text"
          name="weatherText"
          value={formData.weatherText}
          onChange={handleFormChange}
          placeholder="Discuss current & forecast weather factors that can affect travel or hazard."
        />
        <Form.Control
          type="text"
          name="avyText"
          value={formData.avyText}
          onChange={handleFormChange}
          placeholder="Identify the avalanche problem and location. Discuss the danger trend and timing."
        />
        <Form.Control
          type="text"
          name="advisoryText"
          value={formData.advisoryText}
          onChange={handleFormChange}
          placeholder="Discuss the advisory's key message."
        />
  
      </Form.Group>
      <Button variant="primary">
        Save
      </Button>
    </Form>
  );
};

export default Plan;



