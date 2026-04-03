const express = require('express');
const app = express();

// middleware
app.use(express.json());

// routes
const authRoutes = require('./routes/auth.routes');

app.use('/auth', authRoutes);

// test route
app.get('/', (req, res) => {
  res.send('API Running');
});

module.exports = app;

const { authenticate } = require('./middleware/auth.middleware');

app.get('/protected', authenticate, (req, res) => {
  res.json({ message: "You are authorized", user: req.user });
});


const recordRoutes = require('./routes/record.routes');

app.use('/records', recordRoutes);

const dashboardRoutes = require('./routes/dashboard.routes');

app.use('/dashboard', dashboardRoutes);