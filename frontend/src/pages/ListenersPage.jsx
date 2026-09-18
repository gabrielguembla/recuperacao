import { useEffect, useState } from 'react';

import api from '../services/api';

import Navbar from '../components/Navbar.jsx';

function ListenersPage() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        const getUsers = async () => {

            try {

                const response = await api.get(
                    '/users'
                );

                setUsers(response.data);

            } catch (error) {

                console.error(
                    'Error loading users:',
                    error
                );

                setError(
                    error.response?.data?.message ||
                    'Unable to load users.'
                );

            } finally {

                setLoading(false);
            }
        };

        getUsers();

    }, []);

    if (loading) {
        return <h1>Loading listeners...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>

            <Navbar />

            <h1>GGTune</h1>

            <h2>Registered Users</h2>

            {users.length === 0 ? (

                <p>No users found.</p>

            ) : (

                <ul>

                    {users.map((user) => (

                        <li key={user.id}>

                            <strong>
                                {user.name}
                            </strong>

                            {' — '}

                            {user.email}

                            {' | '}

                            {user.role}

                        </li>

                    ))}

                </ul>
            )}

        </div>
    );
}

export default ListenersPage;