import React, { use } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'

const TripModal = ({ }) => {
  const { id } = useParams()
  return (
    <Modal show={true}>
      <Modal.Header>
        <Modal.Title>Trip Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h2>Plan</h2>
        <p>Date: </p>
        <p>Location: </p>
        <p>Group Check In: </p>
        <p>Forecast: </p>
        <p>Avalanche Problems: </p>
        <p>Advisory: </p>
      <h2>Debrief</h2>
        <p>Conditions: </p>
        <p>Plan/Decisions Review:</p>
        <p>Observations: </p>
      </Modal.Body>
      <Modal.Footer>
      <Link to="/trips" className="btn btn-primary">
          Close
        </Link>
        <Link to={`/trip/edit/${id}`} className="btn btn-secondary">
            Edit
        </Link>
      </Modal.Footer>
    </Modal>
  )
}

export default TripModal
