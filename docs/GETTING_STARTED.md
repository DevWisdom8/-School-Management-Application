# 🚀 Getting Started Guide

Complete guide to set up and run the School Management Application locally.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

- **Node.js** >= 18.x ([Download](https://nodejs.org/))
- **npm** >= 9.x (comes with Node.js)
- **PostgreSQL** >= 14.x ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/downloads))
- **Flutter** >= 3.0 (for mobile) ([Install](https://docs.flutter.dev/get-started/install))

### Optional Tools

- **Docker** (for containerized development)
- **VS Code** or **WebStorm** (recommended IDEs)
- **Postman** or **Insomnia** (for API testing)
- **pgAdmin** or **DBeaver** (for database management)

## 🔧 Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd school-management-app
```

### 2. Backend Setup

#### Install Dependencies

```bash
cd backend
npm install
```

#### Configure Environment

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your settings
# Use your preferred editor
nano .env
```

Update these key variables:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=school_management_db
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=your_super_secret_key_here
JWT_REFRESH_SECRET=your_refresh_secret_key_here

EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

#### Create Database

```bash
# Using PostgreSQL command line
createdb school_management_db

# Or using SQL
psql -U postgres
CREATE DATABASE school_management_db;
\q
```

#### Run Migrations

```bash
npm run migrate
```

#### Seed Initial Data (Optional)

```bash
npm run seed
```

#### Start Backend Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The API should now be running at `http://localhost:5000`

### 3. Web Frontend Setup

#### Install Dependencies

```bash
cd ../web-frontend
npm install
```

#### Configure Environment

```bash
cp .env.example .env
```

Update `.env`:
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000
```

#### Start Development Server

```bash
npm run dev
```

The web app should now be running at `http://localhost:3000`

### 4. Mobile App Setup

#### Install Dependencies

```bash
cd ../mobile
flutter pub get
```

#### Check Flutter Setup

```bash
flutter doctor
```

Fix any issues reported by `flutter doctor`.

#### Run on Android

```bash
# List available devices
flutter devices

# Run on connected device/emulator
flutter run -d android
```

#### Run on iOS (macOS only)

```bash
# Install CocoaPods dependencies
cd ios
pod install
cd ..

# Run on simulator/device
flutter run -d ios
```

## 🧪 Verify Installation

### Test Backend

```bash
# Health check
curl http://localhost:5000/health

# Expected response:
# {"status":"OK","timestamp":"...","uptime":...}
```

### Test Frontend

Open `http://localhost:3000` in your browser. You should see the welcome screen.

### Test Database Connection

```bash
cd backend
npm test
```

## 🐳 Docker Setup (Alternative)

### Using Docker Compose

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🔑 Default Credentials

After seeding the database, you can login with:

**Admin Account:**
- Email: `admin@schoolapp.com`
- Password: `Admin@123456`

**⚠️ Change these credentials immediately after first login!**

## 📱 Development Workflow

### Backend Development

```bash
cd backend

# Start with auto-reload
npm run dev

# Run tests
npm test

# Run linter
npm run lint

# Format code
npm run format
```

### Frontend Development

```bash
cd web-frontend

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Mobile Development

```bash
cd mobile

# Run in debug mode
flutter run

# Hot reload (press 'r' in terminal)

# Hot restart (press 'R' in terminal)

# Run tests
flutter test
```

## 🔧 Troubleshooting

### Backend Issues

**Port already in use:**
```bash
# Change PORT in .env file
PORT=5001
```

**Database connection error:**
```bash
# Check PostgreSQL is running
sudo service postgresql status

# Verify credentials in .env
# Ensure database exists
psql -U postgres -l
```

### Frontend Issues

**Module not found:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Vite build errors:**
```bash
# Clear cache
rm -rf node_modules/.vite
npm run dev
```

### Mobile Issues

**Flutter doctor issues:**
```bash
# Update Flutter
flutter upgrade

# Accept Android licenses
flutter doctor --android-licenses
```

**iOS build errors (macOS):**
```bash
cd ios
pod deintegrate
pod install
cd ..
flutter clean
flutter run
```

## 📖 Next Steps

1. **Explore the API:** Visit `http://localhost:5000/api/v1/docs`
2. **Read the docs:** Check the `/docs` folder for detailed documentation
3. **Start developing:** Follow the [ROADMAP.md](./ROADMAP.md) for Day 2 tasks
4. **Join discussions:** Use GitHub Discussions for questions

## 🆘 Getting Help

- **Documentation:** Check `/docs` folder
- **Issues:** Search [GitHub Issues](../issues)
- **Discussions:** Ask in [GitHub Discussions](../discussions)
- **Email:** support@schoolapp.com

## ✅ Installation Checklist

- [ ] Node.js and npm installed
- [ ] PostgreSQL installed and running
- [ ] Repository cloned
- [ ] Backend dependencies installed
- [ ] Database created and migrated
- [ ] Backend server running
- [ ] Frontend dependencies installed
- [ ] Frontend dev server running
- [ ] Flutter installed (for mobile)
- [ ] Mobile app running on device/emulator
- [ ] API responding to requests
- [ ] Default admin login works

---

**Happy coding! 🎉**

