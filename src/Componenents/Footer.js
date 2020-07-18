

import React from 'react';
function Footer() {
    
    return (
        <footer>
            <p style={{"font-weight": "bold"}}>© {(new Date().getFullYear())} ShartamAtelier.fr </p>
            <p style={{"padding":"8px"}}>
              Made with  
              <span role="img" aria-label="love" > ❤ </span>
              by       
              <a href="https://github.com/leolelego" target="_blank" rel="noopener noreferrer" style={{"color":"purple","text-decoration":"none"}}> leolelego</a>
            </p>
        </footer>
    );
  }
  
  export default Footer;
  