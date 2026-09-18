import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import connection from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import authMiddleware from './middlewares/authMiddleware.js';
import artistMiddleware from './middlewares/artistMiddleware.js';
// import songRoutes from './routes/songRoutes.js';
// import userRoutes from './routes/userRoutes.js';

dotenv.config();


const app = express();

// app.use(
//     cors({
//         origin: 'http://localhost:5173'

//     })

// );

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const [users] = await connection.query(

            'SELECT * FROM users'

        );

        res.json(users);

    } catch (error) {
        console.error('Database error: ', error);

        res.status(500).json(
            {
            message: 'Database error'
            }
        );
    }


    // res.json({
    //     message: 'Welcome to the GGtunes API!'

    // });

});

app.use('/api/auth', authRoutes);
// app.use('/api/songs', songRoutes);
// app.use('/api/users', userRoutes);

app.get('/api/test', authMiddleware, (req, res) => {
    res.json({
        message: 'Authentication successful.',
        user: req.user
    });
});


app.get(
    '/api/artist-test',
    authMiddleware,
    artistMiddleware,
    (req, res) => {
        res.json({
            message: 'Artist access granted.',
            user: req.user
        });
    }
);

const PORT = process.env.EXPRESS_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}.`)

});

