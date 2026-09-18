import { useState } from 'react'

import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


import LoginPage from './pages/LoginPage.jsx';
import ListenersPage from './pages/ListenersPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import SongsPage from './pages/SongsPage.jsx';

import ProtectedRoute from './routes/ProtectedRoutes.jsx';

import ArtistRoute from './routes/ArtistRoutes.jsx';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}

        />

        <Route
          path='/register'
          element={<RegistrationPage />}

        />

        <Route
          path='/songs'
          element=
            {
              <ProtectedRoute>
                  <SongsPage />
              </ProtectedRoute>
            }
        />

        <Route
          path="/listeners"
          element={
              <ArtistRoute>
                  <ListenersPage />
              </ArtistRoute>
          }
        />

        <Route
          path="/profile"
          element=
            {
              <ProtectedRoute>
                  <ProfilePage />
              </ProtectedRoute>
            }

        />

      </Routes>

    </BrowserRouter>
  );

}

export default App;

