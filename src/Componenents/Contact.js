import React from 'react';
import Social from './Social';
function Contact() {
    return (

            <div className="card">
            <div className="textbox" style={{"text-align":"center"}}>
            <p>Envie d’acheter ? Retrouvez ma boutique en ligne sur <a href="https://www.etsy.com/shop/ShartamAtelier" target="_blank" rel="noopener noreferrer" style={{"color":"purple","text-decoration":"none"}}> Etsy </a>et découvrez 
             <span style={{"font-weight":"bold"}}> ShartamAtelier</span> sur Instagram, Facebook</p>
            <Social/>
            </div>
        </div>
    );
  }
  
  export default Contact;