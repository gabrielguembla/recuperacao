import { Navigate } from 'react-router-dom';

import { useAuth } from '../context/useAuth';

function ArtistRoute({ children }) {

    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (user.role !== 'artist') {
        return <Navigate to="/songs" replace />;
    }

    return children;
}

export default ArtistRoute;