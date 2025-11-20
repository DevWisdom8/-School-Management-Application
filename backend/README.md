# School Management Backend API

RESTful API server for the School Management Application built with Node.js, Express, and PostgreSQL.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.x
- PostgreSQL >= 14.x
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Create database
createdb school_management_db

# Run migrations
npm run migrate

# Seed initial data
npm run seed

# Start development server
npm run dev
```

The API will be available at `http://localhost:5000`

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   │   ├── database.js  # Database configuration
│   │   └── config.js    # App configuration
│   ├── controllers/     # Request handlers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── ...
│   ├── models/          # Sequelize models
│   │   ├── index.js
│   │   ├── User.js
│   │   └── ...
│   ├── routes/          # API routes
│   │   ├── index.js
│   │   ├── auth.js
│   │   └── ...
│   ├── middleware/      # Custom middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── services/        # Business logic
│   │   ├── authService.js
│   │   ├── emailService.js
│   │   └── ...
│   ├── utils/           # Helper functions
│   │   ├── logger.js
│   │   └── helpers.js
│   ├── validators/      # Input validation schemas
│   │   └── authValidator.js
│   ├── migrations/      # Database migrations
│   ├── seeders/         # Database seeders
│   ├── app.js           # Express app setup
│   └── server.js        # Server entry point
├── tests/               # Test files
│   ├── unit/
│   └── integration/
├── uploads/             # Uploaded files (gitignored)
├── .env.example         # Environment variables template
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── jest.config.js       # Jest configuration
└── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/forgot-password` - Request password reset
- `POST /api/v1/auth/reset-password` - Reset password
- `POST /api/v1/auth/verify-email` - Verify email address

### Users
- `GET /api/v1/users/profile` - Get current user profile
- `PUT /api/v1/users/profile` - Update profile
- `PUT /api/v1/users/change-password` - Change password
- `POST /api/v1/users/upload-photo` - Upload profile photo

### Admin
- `GET /api/v1/admin/users` - List all users
- `POST /api/v1/admin/users` - Create user
- `PUT /api/v1/admin/users/:id` - Update user
- `DELETE /api/v1/admin/users/:id` - Delete user

*More endpoints will be added as development progresses.*

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication.

### Access Token
- Expires in 15 minutes
- Used for API requests
- Sent in Authorization header: `Bearer <token>`

### Refresh Token
- Expires in 7 days
- Used to get new access token
- Stored securely on client

### Example Request

```bash
curl -X GET http://localhost:5000/api/v1/users/profile \
  -H "Authorization: Bearer your_access_token_here"
```

## 🛡️ Security Features

- Password hashing with bcrypt (10 rounds)
- JWT token authentication
- Rate limiting (100 requests per 15 minutes)
- Helmet.js security headers
- Input validation with express-validator
- SQL injection prevention (Sequelize ORM)
- XSS protection
- CORS configuration

## 🗄️ Database

### Models

- **User** - Users (students, teachers, parents, admins)
- **Class** - School classes
- **Subject** - Academic subjects
- **Timetable** - Schedule entries
- **Grade** - Student grades
- **Homework** - Assignments
- **Attendance** - Attendance records
- **Message** - Internal messages
- **Conversation** - Message threads
- **Announcement** - News and announcements
- **Document** - File uploads
- **Notification** - User notifications
- **BehaviorLog** - Student behavior records

### Migrations

```bash
# Create new migration
npx sequelize-cli migration:generate --name migration-name

# Run migrations
npm run migrate

# Undo last migration
npm run migrate:undo
```

### Seeders

```bash
# Create new seeder
npx sequelize-cli seed:generate --name seeder-name

# Run all seeders
npm run seed
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm test -- --coverage
```

### Test Structure

```javascript
describe('AuthController', () => {
  describe('POST /api/v1/auth/login', () => {
    it('should login user with valid credentials', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123'
        });
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
    });
  });
});
```

## 🔧 Development

### Code Style

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Environment Variables

See `.env.example` for all available configuration options.

## 📝 Logging

Logs are managed with Winston:
- Console output in development
- File output in production
- Error logs: `logs/error.log`
- Combined logs: `logs/combined.log`

## 🚀 Deployment

### Build

```bash
npm install --production
```

### Run

```bash
NODE_ENV=production npm start
```

### Environment

Ensure all environment variables are set in production:
- Use strong JWT secrets
- Configure proper database credentials
- Set up email service
- Configure file storage (S3 recommended)

## 📊 Performance

- Database query optimization with indexes
- Response caching (Redis recommended)
- Compression middleware
- Connection pooling

## 🐛 Debugging

```bash
# Debug mode
DEBUG=* npm run dev
```

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [JWT.io](https://jwt.io/)

## 🤝 Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for development guidelines.

## 📄 License

MIT License - see [LICENSE](../LICENSE)

