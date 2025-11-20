import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

// Pages (to be created)
// import Login from '@pages/auth/Login';
// import Dashboard from '@pages/Dashboard';

function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Routes>
        {/* Temporary welcome route */}
        <Route
          path="/"
          element={
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
              }}
            >
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                🎓 School Management System
              </h1>
              <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>
                Web Application - Under Development
              </p>
              <p style={{ fontSize: '1rem', opacity: 0.7, marginTop: '2rem' }}>
                Day 1: Project Initialization Complete
              </p>
            </Box>
          }
        />

        {/* Authentication routes */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* Protected routes */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* 404 route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Box>
  );
}

export default App;

