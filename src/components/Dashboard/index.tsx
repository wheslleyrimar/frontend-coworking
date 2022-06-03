import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dashboard } from '../../services/dashboard';
import './style.css';

type Response = {
    _id: string;
    thumbnail_url: string;
    techs: string[];
    company: string;
    price: number;
}

function Dashboard() {
    const [spots, setSpots] = useState<Response[]>([]);
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            if (user_id){
                const response = await dashboard.spotList(user_id);
                setSpots(response.data);
            }
            
        }
        loadSpots();
    }, []);
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span><b>Techs:</b> {spot.techs.map((tech, index) => {
                            if (index === spot.techs.length - 1) {
                                return tech + '.';
                            }
                            return tech + ', ';
                        })}</span>
                        <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>
            <Link to="/new">
                <button className="btn">Cadastrar novo spot</button>
            </Link>
        </>
    )
}

export default Dashboard;