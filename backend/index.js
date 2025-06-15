const express = require('express');
const {Pool} = require('pg');


const app = express();
const PORT = process.env.PORT || 3000;


// PostgreSQL connection pool
const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'database',
    database: process.env.DB_NAME || 'pg',
    password: process.env.DB_PASSWORD || 'password',
    port: process.env.DB_PORT || 5432 
});


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database query failed');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



