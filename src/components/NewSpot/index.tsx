import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import camera from '../../assets/camera.png';
import './style.css';
import { spot } from '../../services/spot';

function NewSpot() {
    const [thumbnail, setThumbnail] = useState<FileList | null>(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail[0]) : null;
    }, [thumbnail]
    )
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');
        if (thumbnail !== null) {
            data.append('thumbnail', thumbnail[0]);
        }
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        if (user_id) {
            await spot.create(data, user_id);
        }
        navigate('/dashboard');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={event => setThumbnail(event.target.files)} />
                <img src={camera} alt="Select img" className="cam" />
            </label>

            <label htmlFor="company">Empresa *</label>
            <input
                type="text"
                placeholder="Sua empresa incrível"
                id="company"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">Tecnologias *<span> (separadas por vírgula)</span></label>
            <input
                type="text"
                placeholder="Quais tecnologias usam?"
                id="techs"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price">Valor da Diária *<span> (em branco para GRATUITO)</span></label>
            <input
                type="text"
                placeholder="Valor cobrado por dia"
                id="price"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    );
}

export default NewSpot;