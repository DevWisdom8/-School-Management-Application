# School Management Web Frontend

Modern web application for the School Management System built with React, Vite, and Material-UI.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
web-frontend/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   │   ├── common/      # Common UI components
│   │   ├── layout/      # Layout components
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── auth/        # Authentication pages
│   │   ├── dashboard/   # Dashboard pages
│   │   ├── grades/      # Grades pages
│   │   └── ...
│   ├── services/        # API services
│   │   ├── api.js       # Axios instance
│   │   ├── authService.js
│   │   └── ...
│   ├── store/           # Redux store
│   │   ├── slices/      # Redux slices
│   │   └── index.js
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── theme.js         # MUI theme configuration
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── tests/               # Test files
├── .env.example         # Environment variables template
├── vite.config.js       # Vite configuration
├── package.json
└── README.md
```

## 🎨 Features

### UI/UX
- Modern Material Design (Material-UI)
- Responsive layout for all devices
- Light and Dark theme support
- Smooth animations and transitions
- Accessible components (WCAG compliant)

### State Management
- Redux Toolkit for global state
- React Query for server state (optional)
- Context API for theme and auth

### Routing
- React Router v6
- Protected routes
- Dynamic route loading
- Route-based code splitting

### Real-time Features
- Socket.io for live updates
- Real-time notifications
- Live messaging

### Performance
- Code splitting with React.lazy
- Image optimization
- Bundle size optimization
- Caching strategies

## 🔌 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
```

### Testing
```bash
npm test             # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage
```

## 🎯 Key Pages

### Public Pages
- `/` - Landing page
- `/login` - User login
- `/register` - User registration
- `/forgot-password` - Password reset

### Student Dashboard
- `/dashboard` - Overview
- `/timetable` - Class schedule
- `/grades` - View grades and averages
- `/homework` - Assignments list
- `/attendance` - Attendance records
- `/messages` - Internal messaging
- `/documents` - Download materials

### Teacher Dashboard
- `/dashboard` - Overview
- `/classes` - Manage classes
- `/grades/add` - Add/edit grades
- `/homework/create` - Create assignments
- `/attendance/mark` - Mark attendance
- `/messages` - Communicate
- `/documents/upload` - Upload materials

### Parent Dashboard
- `/dashboard` - Child overview
- `/children` - Manage children
- `/timetable/:childId` - Child's schedule
- `/grades/:childId` - Child's grades
- `/attendance/:childId` - Child's attendance
- `/messages` - Communication

### Admin Dashboard
- `/admin/dashboard` - System overview
- `/admin/users` - User management
- `/admin/classes` - Class management
- `/admin/subjects` - Subject management
- `/admin/timetable` - Timetable management
- `/admin/announcements` - Publish news
- `/admin/reports` - Generate reports
- `/admin/settings` - System settings

## 🔒 Authentication

Authentication is handled through JWT tokens:

```javascript
// Login
import { login } from '@services/authService';

const { accessToken, refreshToken, user } = await login(email, password);

// Auto-refresh tokens
// Token refresh is automatic via axios interceptors

// Logout
import { logout } from '@services/authService';
await logout();
```

## 📡 API Integration

All API calls use the centralized axios instance:

```javascript
import api from '@services/api';

// GET request
const response = await api.get('/users/profile');

// POST request
const response = await api.post('/grades', gradeData);

// File upload
const formData = new FormData();
formData.append('file', file);
const response = await api.post('/documents', formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
```

## 🎨 Theming

Customize the theme in `src/theme.js`:

```javascript
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});
```

## 🧪 Testing

Write tests using Vitest and React Testing Library:

```javascript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## 📦 Building for Production

```bash
# Build
npm run build

# The build output will be in the 'dist' folder
# Deploy the contents of 'dist' to your hosting provider
```

### Environment Variables for Production

```env
VITE_API_BASE_URL=https://api.yourschool.com/api/v1
VITE_SOCKET_URL=https://api.yourschool.com
VITE_APP_NAME=Your School Name
```

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Docker
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔧 Configuration

### Vite Configuration
See `vite.config.js` for build and dev server settings.

### Path Aliases
```javascript
import Button from '@components/common/Button';
import api from '@services/api';
import { useAuth } from '@hooks/useAuth';
```

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Material-UI Documentation](https://mui.com/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Router Documentation](https://reactrouter.com/)

## 🤝 Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for development guidelines.

## 📄 License

MIT License - see [LICENSE](../LICENSE)

