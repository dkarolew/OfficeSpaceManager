import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import HomePage from "./pages/HomePage";
import AdminPanelPage from './pages/AdminPanelPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import {CustomProvider} from "./utils/CustomProvider";


function App() {

    return (
        <Router>
            <CustomProvider>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/dashboard' component={DashboardPage}/>
                <Route exact path='/admin-panel' component={AdminPanelPage}/>
                <Route exact path='/contact' component={ContactPage}/>
            </CustomProvider>
        </Router>
    );
}

export default App;
