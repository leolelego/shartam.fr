import React from 'react';
import etsy from './../assets/etsy.svg'
function Social(props) {
    return (
        <div className="social">
            <a href="https://www.instagram.com/ShartamAtelier/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png" style={{height: 48}} alt="Instagram"/></a>
            <a href="https://www.facebook.com/ShartamAtelier/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" style={{height: 48}} alt="Facebook"/></a>
            <a href="https://www.etsy.com/shop/ShartamAtelier" target="_blank" rel="noopener noreferrer"><img src={etsy} style={{height: 48}} alt="Etsy"/></a>

        </div>
    );
  }
  
  export default Social;