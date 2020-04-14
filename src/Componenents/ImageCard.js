
import React from 'react';

function ImageCard(props) {
    
    return (

            <div className="card image-card" style={{backgroundImage:`url(${props.image})`}}>
                {/* {props.title ? (
                        <div className="image-card-background"> 
                                <h3>{props.title}</h3>
                                <p>{props.description}</p>

                         </div>

                       ) : (
                               <p> props.title </p>
                )} */}
            </div>
   


    );
  }
  
  export default ImageCard;