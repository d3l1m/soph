import React, { Component } from 'react';

const RoundedImage = () => {

    const circleStyle = {
      top: '35%',
      width: '20%',
      height: 'auto',
      borderRadius: '50%', 
      position: 'relative', 
    };
    const imageStyles = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
    };
  
    const borderStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '0.5rem solid rgb(248, 248, 248)', 
      borderRadius: '50%', 
      boxSizing: 'border-box',
    };
  
    return (
      <div className="rounded-image-container"style={circleStyle} > 
        <img
          src={require('./pngs/laimagen.jpeg')}
          alt="User image"
          style={imageStyles}
        />
        <div style={borderStyles}></div>
      </div>
       
    );
  };
  
  export default RoundedImage;