import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_PORT:', process.env.DB_PORT);
// console.log('DB_NAME:', process.env.DB_NAME);

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

});

console.log('Connected to the database.');

// const [serverInfo] = await connection.query(`
//     SELECT
//         @@hostname AS hostname,
//         @@port AS port,
//         @@datadir AS data_directory
// `);

// console.log('Database server:', serverInfo);

export default connection;