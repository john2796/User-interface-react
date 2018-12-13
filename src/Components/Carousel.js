import React from 'react';



const Carousel = ({ next, previous, computedClass, image }) => {
  return (
    <div className={computedClass}>
      <div className="carousel">
        <div className="left-button" onClick={previous}>></div>
        <img src={image.src} alt="..." className="carousel__image" />
        <div className="right-button" onClick={next} >></div>
      </div>
      <div className="headers jumbotron__title">
        <h2>Integrity ,</h2>
        <h2>Excellence,</h2>
        <h2>Progress</h2>
      </div>
    </div>
  );
}

export default Carousel;