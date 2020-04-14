import React from 'react';
function Header(props) {
    
    return (
        <header className="site-header" style={{height: props.height}}>
          <h1 className="logo">Shartam Atelier</h1>
        </header>
    );
  }
  
  export default Header;
  
