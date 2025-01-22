// src/components/WorkshopDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WorkshopDetail = () => {
  const { id } = useParams(); // Get the workshop ID from the URL
  const [workshop, setWorkshop] = useState(null);

  useEffect(() => {
    // Dynamically import the workshop JSON based on the ID
    import(`../data/workshop${id}.json`)
      .then((data) => setWorkshop(data))
      .catch((err) => console.error("Failed to load workshop content:", err));
  }, [id]);

  if (!workshop) {
    return <p>Loading...</p>; // Show a loading state while the content is fetched
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{workshop.title}</h1>
      <p>{workshop.description}</p>
      <h2>Steps</h2>
      <ol>
        {workshop.steps.map((step, index) => (
          <li key={index}>
            <h3>{step.title}</h3>
            <p>{step.content}</p>
          </li>
        ))}
      </ol>
      <h2>Resources</h2>
      <ul>
        {workshop.resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkshopDetail;
