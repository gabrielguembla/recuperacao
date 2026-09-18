import connection from '../config/db.js';

export const listUsers = async (req, res) => {
    try {

        const [users] = await connection.query(
            `SELECT
                id,
                name,
                email,
                role,
                created_at
             FROM users`
        );

        res.json(users);

    } catch (error) {

        console.error('Error listing users:', error);

        res.status(500).json({
            message: 'Database error.'
        });
    }
};


export const getProfile = async (req, res) => {
    try {

        const [users] = await connection.query(
            `SELECT
                id,
                name,
                email,
                role,
                created_at
             FROM users
             WHERE id = ?`,
            [req.user.id]
        );

        if (users.length === 0) {
            return res.status(404).json({
                message: 'User not found.'
            });
        }

        res.json(users[0]);

    } catch (error) {

        console.error('Error getting profile:', error);

        res.status(500).json({
            message: 'Database error.'
        });
    }
};