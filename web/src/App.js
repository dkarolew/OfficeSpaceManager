import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


function App() {
  return (
      <Router>
          <Route path='/' exact render={HomePage} />
          <Route path='/login' component={LoginPage} />
      </Router>
  );
}

export default App;
