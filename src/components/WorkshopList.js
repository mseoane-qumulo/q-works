import React, { useState } from 'react';
import WorkshopCard from './WorkshopCard';
import workshops from '../data/workshops.json';

const WorkshopList = () => {
  const [search, setSearch] = useState('');

  const filteredWorkshops = workshops.filter((workshop) =>
    workshop.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search workshops..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ margin: '1rem 0', padding: '0.5rem' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
        {filteredWorkshops.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </div>
  );
};

export default WorkshopList;
