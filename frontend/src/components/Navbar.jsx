import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/useAuth';

function Navbar() {

    const {
        user,
        isAuthenticated,
        logout
    } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate('/');
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <nav>

            <h2>GGTune</h2>

            <div>

                <Link to="/songs">
                    Songs
                </Link>

                {' | '}

                <Link to="/profile">
                    Profile
                </Link>

                {user?.role === 'artist' && (
                    <>
                        {' | '}

                        <Link to="/listeners">
                            Listeners
                        </Link>
                    </>
                )}

                {' | '}

                <button onClick={handleLogout}>
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;