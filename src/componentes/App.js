import React from 'react';
import { Information } from './Information';
import { Contact } from './Contact';
import '../styles/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
 
  return (
  <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Information />} />
          <Route path='/contact-us' element={<Contact />} /> 
        </Routes>
      </div>
    
  </Router>
  );
}

export { App };