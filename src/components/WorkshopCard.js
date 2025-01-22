// src/components/WorkshopCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const WorkshopCard = ({ workshop }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', width: '300px' }}>
    <h3>{workshop.title}</h3>
    <p>{workshop.description}</p>
    <Link to={`/workshop/${workshop.id}`}>View Details</Link>
  </div>
);

export default WorkshopCard;
