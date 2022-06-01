import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { user } from '../../services/user';

function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    async function handleSubmit(event: SyntheticEvent){
        event.preventDefault();
        console.log(event);
        const response = await user.auth(email);
        const { _id } = response.data;
        console.log(_id);

        localStorage.setItem('user', _id);
        navigate('/dashboard');
    }
    return (
        <>
            <p>Ofereça <strong>spots</strong> para devs e encontre <strong>os melhores</strong> talentos</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail *</label>
                <input                 
                    autoComplete='off'
                    type="email"
                    id="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}

export default Home;