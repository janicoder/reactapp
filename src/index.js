import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Container from './Container';

const root = ReactDOM.createRoot(document.getElementById('navbar'));
root.render(
  <div>
    <Navbar />
  </div>
);

const root2 = ReactDOM.createRoot(document.getElementById('container'));
root2.render(
  <Container />
);