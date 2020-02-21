import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.js';

const App = () => (
  <Router>
    <div className="App">
      <Routes />
    </div>
  </Router>
);

export default App;
