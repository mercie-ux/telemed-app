const express = require('express');
const db = require('../config/db');
const router = express.Router();

// provider registration
router.post('/register', async (req, res) => {
    const { name, specialty, email, phone, address, availability, experience } = req.body;
     try {
        const query = 'INSERT INTO providers (name, specialty, email, phone, address, availability, experience ) VALUES (?,?,?,?,?,?,?)';

        const [result] = await db.execute(query, [name, specialty, email, phone, address, availability, experience]);

        res.status(201).json({ message: 'Provider registered successfully', providerId: result.insertId });
     } catch (error) {
        console.error('Error registering the provider:', error);
        res.status(500).json({error: 'Failed to register provider' });

     }
});
module.exports = router;