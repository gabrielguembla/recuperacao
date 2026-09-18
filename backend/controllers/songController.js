import connection from '../config/db.js';

export const listSongs = async (req, res) => {
    try {

        const [songs] = await connection.query(
            `SELECT
                id,
                title,
                artist,
                genre,
                duration,
                created_at
             FROM songs`
        );

        res.json(songs);

    } catch (error) {

        console.error('Error listing songs:', error);

        res.status(500).json({
            message: 'Database error.'
        });
    }
};