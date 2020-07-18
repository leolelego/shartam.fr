import React from 'react';
import Social from './Social';
function Contact() {
    return (

            <div className="card">
            <div className="textbox" style={{"text-align":"center"}}>
            <p>Envie d’acheter ? Retrouvez ma boutique en ligne sur <a href="https://www.etsy.com/shop/ShartamAtelier" target="_blank" rel="noopener noreferrer" style={{"color":"#eb6d20","font-weight":"bold"}}> Etsy </a>et découvrez 
             <span style={{"font-weight":"bold"}}> ShartamAtelier</span> sur <a href="https://www.instagram.com/ShartamAtelier/" target="_blank" rel="noopener noreferrer" style={{"color":"#d62976","font-weight":"bold"}}> Instagram </a> et <a href="https://www.facebook.com/ShartamAtelier/" target="_blank" rel="noopener noreferrer" style={{"color":"#3b5998","font-weight":"bold"}}> Facebook </a></p>
            <Social/>
            </div>
        </div>
    );
  }
  
  export default Contact;