import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useParams, Link } from 'react-router-dom'

const EditModal = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    selectedDate: new Date(),
    location: '',
    checkInText: '',
    weatherText: '',
    avyText: '',
    advisoryText: '',
    conditions: '',
    planReview: '',
    observations: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      selectedDate: date
    }));
  }
  return (
    <Modal show={true} size="xl">
      <Modal.Header>
        <Modal.Title>Edit Trip</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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

          <Form.Group controlId="textInput" className="mb-3">
            <Form.Label>Debrief</Form.Label>
            <Form.Control
              type="text"
              name="checkInText"
              value={formData.conditions}
              onChange={handleFormChange}
              placeholder="Summarize Conditions."
            />

            <Form.Control
              type="text"
              name="checkInText"
              value={formData.planReview}
              onChange={handleFormChange}
              placeholder="Review Today's Decisions & Improve Today's Plan."
            />  
          </Form.Group>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Link to={`/trip/${id}`} className="btn btn-secondary">
            Save
        </Link>
      </Modal.Footer>
    </Modal>
  )
}

export default EditModal
