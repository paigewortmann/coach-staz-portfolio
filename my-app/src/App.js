import React from 'react';
import './App.css'
import ContactForm from './components/contactForm';
import Home from './components/home'
import WhyLift from './components/whyLift';
import AboutStaz from './components/aboutStaz';

function App() {
  return (
    <main>
      <div className="App">
          <Home />
          <WhyLift />
          <AboutStaz />
          <ContactForm />

      </div>
    </main>
  );
}

export default App;



