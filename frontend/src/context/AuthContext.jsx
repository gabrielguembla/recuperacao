import {
    createContext,
    useState
} from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');

        return storedUser
            ? JSON.parse(storedUser)
            : null;
    });

    const [token, setToken] = useState(() => {
        return localStorage.getItem('token');
    });

    const login = (userData, accessToken) => {

        setUser(userData);
        setToken(accessToken);

        localStorage.setItem(
            'user',
            JSON.stringify(userData)
        );

        localStorage.setItem(
            'token',
            accessToken
        );
    };

    const logout = () => {

        setUser(null);
        setToken(null);

        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}