import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminPanelPage from './pages/AdminPanelPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';


function App() {
  return (
      <Router>
          <Route path='/' exact render={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='/admin-panel' component={AdminPanelPage} />
          <Route path='/contact' component={ContactPage} />
      </Router>
  );
}

export default App;
