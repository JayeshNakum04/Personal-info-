import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
      <img src={`${process.env.PUBLIC_URL}/images/my3.jpg`} alt="Image 1" />
      <img src={`${process.env.PUBLIC_URL}/images/my4.jpg`} alt="Image 2" />
      <img src={`${process.env.PUBLIC_URL}/images/my7.jpg`} alt="Image 3" />
      

      </div>
    </section>
  );
};

export default Gallery;
