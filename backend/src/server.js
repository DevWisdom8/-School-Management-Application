require('dotenv').config();

const app = require('./app');
const logger = require('./utils/logger');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 5000;

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    logger.info('✓ Database connection established successfully.');
  })
  .catch((err) => {
    logger.error('✗ Unable to connect to the database:', err);
    process.exit(1);
  });

// Start server
const server = app.listen(PORT, () => {
  logger.info(`🚀 Server is running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  logger.info(`📡 API available at http://localhost:${PORT}/api/v1`);
});

// Graceful shutdown
const gracefulShutdown = (signal) => {
  logger.info(`\n${signal} received. Starting graceful shutdown...`);
  
  server.close(async () => {
    logger.info('✓ HTTP server closed');
    
    try {
      await sequelize.close();
      logger.info('✓ Database connection closed');
      process.exit(0);
    } catch (err) {
      logger.error('✗ Error during shutdown:', err);
      process.exit(1);
    }
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    logger.error('✗ Forced shutdown after timeout');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION! Shutting down...', err);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = server;

