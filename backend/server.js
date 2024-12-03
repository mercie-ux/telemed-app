const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// user Registration Endpoint
app.post('/api/register', async (req, res) => {
    const {name, email, password, role } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, password, role]
        );
        res.status(201).json({ id: result.insertId, message: 'User registered successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// fetch Appointments Endpoint
app.get('/api/appointments', async (req, res) => {
    try {
        const [appointments] = await db.query('SELECT * FROM appointments');
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});

