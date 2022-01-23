import React from 'react';
import './App.css'
import ContactForm from './components/contactForm';
import Home from './components/home'

function App() {
  return (
    <main>
      <div className="App">
          <Home />
          <ContactForm />

      </div>
    </main>
  );
}

export default App;



