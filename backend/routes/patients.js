const express = require('express');
const db = require('../config/db');
const authenticateToken = require('../controllers/authenticateToken');


const router = express.Router();

// patient profile
router.get('/profile', authenticateToken, async (req, res) => {
    try {
        const query = 'SELECT * FROM patients WHERE id = ?';
        const [rows] = await db.execute(query, [req.user.id]);

        if (rows.length === 0)
            return res.status(404).json({ error: 'Patient not found'});

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
});

// upcoming appointments
router.get('/appointments/upcoming', authenticateToken, async (req, res) => {
    try {
        const query = 'SELECT * FROM appointments WHERE patient_id = ? AND appointment_date >= NOW() ORDER BY appointment_date ASC LIMIT !';
        
        const [rows] = await db.execute(query, [req.user.id]);

        if (rows.length === 0)
            return res.status(404).json({ error: 'No upcoming appointments' });

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch upcoming appointments'});
    }
});
module.exports = router;