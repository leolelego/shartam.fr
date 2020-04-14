
import React from 'react';
import ImageCard from './ImageCard';
import galleryJson from '../assets/gallery'
function Gallery() {

    return (
        <>

          {galleryJson.map(({ title, description, image }) => (
              <ImageCard image={image} title={title} description={description}/>
          ))}
        </>
        );
}
    
export default Gallery;
    