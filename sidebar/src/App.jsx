import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css';

// Import your components for each route
import Dashboard from './pages/Dashboard';
import Tracker from './pages/Tracker';
import Transaction from './pages/Transaction';
import Target from './pages/Target';
import Advice from './pages/Advice';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar /> {/* Add the Navbar component here */}
                <SideNavbar />
                <div className="content">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/tracker" element={<Tracker />} />
                        <Route path="/transaction" element={<Transaction />} />
                        <Route path="/target" element={<Target />} />
                        <Route path="/advice" element={<Advice />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                        {/* Add a default route or redirect as needed */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
