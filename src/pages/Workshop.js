// src/pages/Workshop.js
import React from 'react';
import { useParams } from 'react-router-dom';
import workshops from '../data/workshops.json';

const Workshop = () => {
  const { id } = useParams();
  const workshop = workshops.find((w) => w.id === parseInt(id));

  if (!workshop) {
    return <h2>Workshop not found</h2>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{workshop.title}</h1>
      <p>{workshop.description}</p>
      <img src={workshop.thumbnail} alt={workshop.title} style={{ width: '100%' }} />
    </div>
  );
};

export default Workshop;
