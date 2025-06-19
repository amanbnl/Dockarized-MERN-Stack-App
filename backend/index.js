require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

//  database connection
// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }
//   console.log('Connected to PostgreSQL database');
//   release();
// });

// Sample route
app.get('/api/users', async (req, res) => {
  try {
    // DB QUERY HERE
    // const result = await pool.query('SELECT NOW()');
    res.status(200).json({
      message: 'SUCCESS',
      data: [
        {
          id: 1,
          name: 'John Doe',
          email: 'Johndoe@gmail.com'
        },
        {
          id: 2,
          name: 'Sam Doe',
          email: 'samdoe@gmail.com'
        }
      ],
    });
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});