const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patients'); // import patients route
const providerRoutes = require('./routes/providers'); // import providers route

dotenv.config();

const app = express();

app.use(bodyParser.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/providers', providerRoutes); 
// start server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));