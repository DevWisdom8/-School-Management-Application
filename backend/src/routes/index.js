const express = require('express');

const router = express.Router();

// Import route modules (will be created in subsequent days)
// const authRoutes = require('./auth');
// const userRoutes = require('./users');

// Route definitions
// router.use('/auth', authRoutes);
// router.use('/users', userRoutes);

// API documentation route
router.get('/docs', (req, res) => {
  res.json({
    message: 'API Documentation',
    version: '1.0.0',
    endpoints: {
      authentication: {
        register: 'POST /api/v1/auth/register',
        login: 'POST /api/v1/auth/login',
        logout: 'POST /api/v1/auth/logout',
        refresh: 'POST /api/v1/auth/refresh',
        forgotPassword: 'POST /api/v1/auth/forgot-password',
        resetPassword: 'POST /api/v1/auth/reset-password',
      },
      users: {
        getProfile: 'GET /api/v1/users/profile',
        updateProfile: 'PUT /api/v1/users/profile',
        changePassword: 'PUT /api/v1/users/change-password',
      },
    },
  });
});

module.exports = router;

