import { useEffect, useState } from 'react';

import api from '../services/api';

import Navbar from '../components/Navbar.jsx';

function SongsPage() {

    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        const getSongs = async () => {

            try {

                const response = await api.get('/songs');

                setSongs(response.data);

            } catch (error) {

                console.error(
                    'Error loading songs:',
                    error
                );

                setError(
                    error.response?.data?.message ||
                    'Unable to load songs.'
                );

            } finally {

                setLoading(false);

            }
        };

        getSongs();

    }, []);

    if (loading) {
        return <h1>Loading songs...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>

            <Navbar />

            <h1>GGTune</h1>

            <h2>Music Catalog</h2>

            {songs.length === 0 ? (

                <p>No songs found.</p>

            ) : (

                <ul>

                    {songs.map((song) => (

                        <li key={song.id}>

                            <strong>
                                {song.title}
                            </strong>

                            {' — '}

                            {song.artist}

                            {' | '}

                            {song.genre}

                            {' | '}

                            {song.duration}

                        </li>

                    ))}

                </ul>

            )}

        </div>
    );
}

export default SongsPage;