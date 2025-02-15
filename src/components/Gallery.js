import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
      <img src="/images/your-image.jpg" alt="Your Image" />

      </div>
    </section>
  );
};

export default Gallery;
