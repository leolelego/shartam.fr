import React  from 'react';
import './App.css';
import Header from './Componenents/Header'
import Social from './Componenents/Social'
import Introduction from './Componenents/Introduction'
import Event from './Componenents/Event'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Gallery from './Componenents/Gallery';
import Contact from './Componenents/Contact';
import Footer from './Componenents/Footer';

function App() {


  return (
    <div className="App">
      <Header height={50} />
      <Social />

      <div className="cards-list">
         {/*<Event /> */}

        <Introduction />
        <Gallery />
        <Contact />
      </div>
      <Footer/>

      <MessengerCustomerChat pageId="110943757203274" 
                              appId=""
                              loggedInGreeting="Bonjour, comment puis-je vous aidez?"
                              loggedOutGreeting="Bonjour, comment puis-je vous aidez?"
      />
    </div>

    
  );
}

export default App;
