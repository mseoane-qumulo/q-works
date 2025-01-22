// src/components/WorkshopContent.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const WorkshopContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/data/workshop.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div style={{ padding: '1rem', flex: 1 }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default WorkshopContent;
