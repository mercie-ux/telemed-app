const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/db');
const authenticate = require('../controllers/authenticateToken');

const router = express.Router();

// schedule appointment route
router.post(
    '/schedule', authenticate, [
        body('date').notEmpty().withMessage('Date is required').isISO8601().withMessage('Invalid date format '),
        body('time').notEmpty().withMessage('Time is required').matches(/^([01\d|2[0-3]]):?([0-5\d])$/).withMessage('Invalid time format'),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { date, time } = req.body;
        const patientId = req.user.id; // extracted from authenticated token

        try {
            // insert appointment into the database
            const query = 'INSERT INTO appointments (patient_id, date, time) VALUES(?,?,?)';
            await db.execute(query, [patientId, date, time]);

            res.status(201).json({ message: 'Appointment scheduled successfully!'}); 
        } catch (err) {
            console.error('Error scheduling appointment:', err);
            res.status(500).json({ error: 'Internal Server Error'});
        }
    }
);

module.exports = router;