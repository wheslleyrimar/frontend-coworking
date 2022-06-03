import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import NewSpot from './components/NewSpot';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/new" element={<NewSpot />} />
            </Routes>
        </BrowserRouter>
    );

}

export default Router;