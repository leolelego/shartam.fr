
import React from 'react';

function ImageCard(props) {
    
    return (
            <div className="card image-card" style={{backgroundImage:`url(${props.image})`}}>
            </div>
    );
  }
  
  export default ImageCard;