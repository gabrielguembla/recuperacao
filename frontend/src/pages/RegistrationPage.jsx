import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';

function RegistrationPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('listener');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {

        event.preventDefault();

        setError('');
        setSuccess('');

        try {

            await api.post(
                '/auth/register',
                {
                    name,
                    email,
                    password,
                    role
                }
            );

            setSuccess(
                'Registration successful! Redirecting to login...'
            );

            setTimeout(() => {
                navigate('/');
            }, 1500);

        } catch (error) {

            console.error(
                'Registration error:',
                error
            );

            setError(
                error.response?.data?.message ||
                'Unable to register.'
            );
        }
    };

    return (
        <div>

            <h1>GGTune</h1>

            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>
                        Name
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                    />
                </div>

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

                <div>
                    <label>
                        Profile
                    </label>

                    <select
                        value={role}
                        onChange={(event) =>
                            setRole(event.target.value)
                        }
                    >
                        <option value="listener">
                            Listener
                        </option>

                        <option value="artist">
                            Artist
                        </option>
                    </select>
                </div>

                <button type="submit">
                    Register
                </button>

            </form>

            {error && (
                <p>
                    {error}
                </p>
            )}

            {success && (
                <p>
                    {success}
                </p>
            )}

        </div>
    );
}

export default RegistrationPage;