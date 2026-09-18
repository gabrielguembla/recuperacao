import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';
import { useAuth } from '../context/useAuth.js';


function LoginPage() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const { login } = useAuth();

    const navigate = useNavigate();


    const handleSubmit = async (event) => {

        event.preventDefault();

        setError('');


        try {

            const response = await api.post(
                '/auth/login',
                {
                    email,
                    password
                }
            );


            const {
                token,
                user
            } = response.data;


            login(user, token);


            if (user.role === 'artist') {

                navigate('/listeners');

            } else {

                navigate('/songs');

            }


        } catch (error) {

            console.error(
                'Login error:',
                error
            );

            setError(
                error.response?.data?.message ||
                'Unable to login.'
            );
        }
    };


    return (

        <div>


            <h1>GGTune</h1>


            <form onSubmit={handleSubmit}>

                <div>

                    <label>
                        Email
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                    />

                </div>


                <div>

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                    />

                </div>


                <button type="submit">
                    Login
                </button>

            </form>


            {error && (
                <p>
                    {error}
                </p>
            )}

        </div>
    );
}


export default LoginPage;