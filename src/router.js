import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import NewSpot from './components/NewSpot';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/new" element={<NewSpot />} />
            </Routes>
        </BrowserRouter>
    );

}

export default Router;