# Contributing to School Management Application

Thank you for considering contributing to this project! This document outlines the guidelines and best practices for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)

## 🤝 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Expected Behavior

- Be respectful and considerate
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what is best for the project and community

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Personal attacks or trolling
- Publishing others' private information
- Any conduct that could reasonably be considered inappropriate

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/school-management-app.git
   cd school-management-app
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/original/school-management-app.git
   ```
4. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🔄 Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/add-messaging`)
- `bugfix/` - Bug fixes (e.g., `bugfix/login-error`)
- `hotfix/` - Urgent production fixes (e.g., `hotfix/security-patch`)
- `refactor/` - Code refactoring (e.g., `refactor/auth-service`)
- `docs/` - Documentation updates (e.g., `docs/api-endpoints`)
- `test/` - Test additions/modifications (e.g., `test/grades-calculation`)

### Keeping Your Fork Updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## 💻 Coding Standards

### JavaScript/TypeScript (Backend & Web Frontend)

- **Linting**: ESLint with Airbnb configuration
- **Formatting**: Prettier with 2-space indentation
- **Naming Conventions**:
  - Variables/Functions: `camelCase`
  - Classes/Components: `PascalCase`
  - Constants: `UPPER_SNAKE_CASE`
  - Private methods: `_prefixedCamelCase`

#### Example:

```javascript
// Good
const userService = new UserService();
const MAX_LOGIN_ATTEMPTS = 5;

class AuthController {
  async loginUser(req, res) {
    // Implementation
  }
}

// Bad
const UserService = new userservice();
const maxLoginAttempts = 5;
```

### Dart/Flutter (Mobile)

- **Linting**: Official Dart/Flutter lints
- **Formatting**: `dart format`
- **Naming Conventions**:
  - Variables/Functions: `camelCase`
  - Classes: `PascalCase`
  - Constants: `lowerCamelCase`
  - Private: `_prefixed`

### General Code Quality

- Keep functions small and focused (max 50 lines)
- Write self-documenting code with clear variable names
- Add comments for complex logic only
- Avoid code duplication (DRY principle)
- Follow SOLID principles
- Maximum line length: 100 characters

### File Organization

```
backend/
├── src/
│   ├── controllers/    # Request handlers
│   ├── services/       # Business logic
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── utils/          # Helper functions
│   ├── config/         # Configuration files
│   └── validators/     # Input validation schemas
```

## 📝 Commit Message Guidelines

We follow the **Conventional Commits** specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, build config)
- `perf`: Performance improvements
- `ci`: CI/CD changes

### Examples

```bash
feat(auth): add JWT refresh token mechanism

Implemented automatic token refresh to improve user experience.
Tokens now refresh 5 minutes before expiry.

Closes #123

---

fix(grades): correct average calculation with coefficients

Fixed bug where coefficients were not applied correctly in
weighted average calculation.

Fixes #456

---

docs(api): update authentication endpoint documentation

Added examples for all auth endpoints and error responses.

---

chore(deps): update dependencies to latest versions
```

### Rules

- Use imperative mood: "add" not "added" or "adds"
- Don't capitalize first letter of subject
- No period (.) at the end of subject
- Limit subject line to 72 characters
- Separate subject from body with blank line
- Wrap body at 72 characters
- Use body to explain what and why, not how

## 🔀 Pull Request Process

1. **Update your branch** with the latest main:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run tests and linting**:
   ```bash
   npm run lint
   npm test
   ```

3. **Push your changes**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request** on GitHub:
   - Use a clear, descriptive title
   - Fill out the PR template completely
   - Reference related issues
   - Add screenshots for UI changes
   - Request review from relevant team members

5. **PR Title Format**:
   ```
   [TYPE] Brief description
   ```
   Examples:
   - `[FEATURE] Add student attendance tracking`
   - `[BUGFIX] Fix login redirect loop`
   - `[REFACTOR] Improve grade calculation service`

6. **PR Description Template**:
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Related Issues
   Fixes #issue_number

   ## Testing
   - [ ] Unit tests added/updated
   - [ ] Integration tests added/updated
   - [ ] Manual testing completed

   ## Checklist
   - [ ] Code follows project style guidelines
   - [ ] Self-review completed
   - [ ] Comments added for complex code
   - [ ] Documentation updated
   - [ ] No new warnings generated
   - [ ] Tests pass locally
   ```

7. **Address Review Comments**:
   - Respond to all comments
   - Make requested changes
   - Push updates to the same branch
   - Re-request review when ready

8. **Merge Requirements**:
   - At least 1 approval from code owner
   - All CI checks passing
   - No merge conflicts
   - Up-to-date with main branch

## 🧪 Testing Guidelines

### Unit Tests

- Write tests for all new functions/methods
- Aim for >80% code coverage
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

```javascript
describe('AuthService', () => {
  describe('loginUser', () => {
    it('should return JWT token for valid credentials', async () => {
      // Arrange
      const credentials = { email: 'test@example.com', password: 'password123' };
      
      // Act
      const result = await authService.loginUser(credentials);
      
      // Assert
      expect(result).toHaveProperty('token');
      expect(result.token).toMatch(/^eyJ/);
    });

    it('should throw error for invalid credentials', async () => {
      // Arrange
      const credentials = { email: 'test@example.com', password: 'wrong' };
      
      // Act & Assert
      await expect(authService.loginUser(credentials))
        .rejects.toThrow('Invalid credentials');
    });
  });
});
```

### Integration Tests

- Test API endpoints end-to-end
- Use test database
- Clean up test data after each test

### E2E Tests

- Test critical user flows
- Use Playwright or Cypress
- Run on CI/CD pipeline

### Running Tests

```bash
# Backend
cd backend
npm test                    # Run all tests
npm run test:watch         # Watch mode
npm run test:coverage      # Coverage report

# Frontend
cd web-frontend
npm test
npm run test:coverage
```

## 🐛 Bug Reports

When filing a bug report, include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Numbered steps to reproduce
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**:
   - OS and version
   - Browser and version
   - Node.js version
   - App version
6. **Screenshots/Logs**: If applicable
7. **Possible Fix**: If you have suggestions

## 💡 Feature Requests

When requesting a feature:

1. **Use Case**: Describe the problem you're trying to solve
2. **Proposed Solution**: Your suggested implementation
3. **Alternatives**: Other solutions you've considered
4. **Additional Context**: Screenshots, mockups, examples

## 📞 Getting Help

- **Documentation**: Check `/docs` folder
- **Issues**: Search existing issues first
- **Discussions**: Use GitHub Discussions for questions
- **Email**: contact@schoolapp.com

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Annual contributor spotlight

Thank you for contributing! 🎉

