import React, { useState } from 'react'
import { Button, Card, } from 'react-bootstrap'
import trips from '../assets/trips.json'
import { Link } from 'react-router-dom'
/* Displays a list of trips users have inputted through the plan page. */
const Trips = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {trips.map((trip) => (
        <Card key={trip.id} style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" src={trip.image} />
          <Card.Body>
            <Card.Title>{trip.location}</Card.Title>
            <Card.Text>
              {trip.date}
            </Card.Text>
            <Link to={`/trip/${trip.id}`}>
              <Button variant="primary">View Trip</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Trips
