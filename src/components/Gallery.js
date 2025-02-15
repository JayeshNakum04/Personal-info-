import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        <img src="https://via.placeholder.com/300" alt="Placeholder 1" />
        <img src="https://via.placeholder.com/300" alt="Placeholder 2" />
        <img src="https://via.placeholder.com/300" alt="Placeholder 3" />
      </div>
    </section>
  );
};

export default Gallery;