import { useEffect, useState } from 'react';

import api from '../services/api';

import Navbar from '../components/Navbar.jsx';

function ProfilePage() {

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        const getProfile = async () => {

            try {

                const response = await api.get(
                    '/users/profile'
                );

                setProfile(response.data);

            } catch (error) {

                console.error(
                    'Error loading profile:',
                    error
                );

                setError(
                    error.response?.data?.message ||
                    'Unable to load profile.'
                );

            } finally {

                setLoading(false);
            }
        };

        getProfile();

    }, []);

    if (loading) {
        return <h1>Loading profile...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (

        <div>
            <Navbar />

            <h1>GGTune</h1>

            <h2>My Profile</h2>

            <p>
                <strong>ID:</strong>{' '}
                {profile.id}
            </p>

            <p>
                <strong>Name:</strong>{' '}
                {profile.name}
            </p>

            <p>
                <strong>Email:</strong>{' '}
                {profile.email}
            </p>

            <p>
                <strong>Profile:</strong>{' '}
                {profile.role}
            </p>

            <p>
                <strong>Created at:</strong>{' '}
                {profile.created_at}
            </p>

        </div>
    );
}

export default ProfilePage;