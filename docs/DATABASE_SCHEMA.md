# 🗄️ Database Schema Documentation

## Overview

The School Management application uses **PostgreSQL** as the database with **Sequelize ORM** for managing migrations and models.

**Database Name:** `school_management_db`  
**Created:** Day 2 - November 21, 2025

---

## 📊 Entity Relationship Diagram

```
┌─────────────┐         ┌──────────────────┐         ┌─────────────┐
│    Users    │────────▶│ student_classes  │◀────────│   Classes   │
│             │         └──────────────────┘         │             │
│  (4 roles)  │                                      │             │
│  - Student  │         ┌──────────────────┐         │             │
│  - Teacher  │────────▶│teacher_assignments│◀────────│             │
│  - Parent   │         └──────────────────┘         │             │
│  - Admin    │                   ▲                  │             │
│             │                   │                  └──────┬──────┘
└──────┬──────┘                   │                         │
       │                          │                         │
       │                    ┌─────┴──────┐                  │
       │                    │  Subjects  │◀─────────────────┘
       │                    └────────────┘    class_subjects
       │
       │
       ▼
┌──────────────────┐
│ parent_students  │
└──────────────────┘
```

---

## 📋 Core Tables

### 1. **users** - All system users
Stores information for students, teachers, parents, and administrators.

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `first_name` | VARCHAR(100) | User's first name |
| `last_name` | VARCHAR(100) | User's last name |
| `email` | VARCHAR(255) | Unique email address |
| `password` | VARCHAR(255) | Hashed password (bcrypt) |
| `role` | ENUM | student, teacher, parent, admin |
| `phone` | VARCHAR(20) | Contact phone number |
| `date_of_birth` | DATE | Date of birth |
| `address` | TEXT | Physical address |
| `profile_photo` | VARCHAR(255) | Profile picture URL/path |
| `is_active` | BOOLEAN | Account status |
| `is_email_verified` | BOOLEAN | Email verification status |
| `email_verification_token` | VARCHAR(255) | Email verification token |
| `password_reset_token` | VARCHAR(255) | Password reset token |
| `password_reset_expires` | TIMESTAMP | Token expiration |
| `last_login` | TIMESTAMP | Last login timestamp |
| `created_at` | TIMESTAMP | Record creation |
| `updated_at` | TIMESTAMP | Last update |

**Indexes:**
- `email` (unique, indexed)
- `role` (indexed)
- `is_active` (indexed)

**Password Security:**
- Passwords are hashed using bcrypt (10 rounds)
- Automatically hashed before saving via Sequelize hooks
- Never returned in API responses (toJSON override)

---

### 2. **classes** - School classes/sections
Represents different classes or grade levels.

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `name` | VARCHAR(100) | Class name (e.g., "Math A") |
| `grade_level` | VARCHAR(50) | Grade level (e.g., "Grade 10") |
| `section` | VARCHAR(50) | Section identifier (A, B, C) |
| `academic_year` | VARCHAR(20) | Year (e.g., "2024-2025") |
| `capacity` | INTEGER | Maximum students (default: 30) |
| `room_number` | VARCHAR(50) | Physical classroom |
| `description` | TEXT | Additional information |
| `is_active` | BOOLEAN | Active status |
| `created_at` | TIMESTAMP | Record creation |
| `updated_at` | TIMESTAMP | Last update |

**Indexes:**
- `academic_year` (indexed)
- `grade_level` (indexed)
- `is_active` (indexed)

---

### 3. **subjects** - Academic subjects
Contains all subjects taught in the school.

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `name` | VARCHAR(100) | Subject name (e.g., "Mathematics") |
| `code` | VARCHAR(20) | Unique code (e.g., "MATH101") |
| `description` | TEXT | Subject description |
| `color` | VARCHAR(7) | Hex color for UI (#FF5733) |
| `coefficient` | DECIMAL(3,2) | Weight for calculations (default: 1.00) |
| `is_active` | BOOLEAN | Active status |
| `created_at` | TIMESTAMP | Record creation |
| `updated_at` | TIMESTAMP | Last update |

**Indexes:**
- `code` (unique, indexed)
- `is_active` (indexed)

---

## 🔗 Relationship Tables (Many-to-Many)

### 4. **student_classes** - Student enrollment
Links students to their classes.

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `student_id` | UUID | FK → users.id |
| `class_id` | UUID | FK → classes.id |
| `enrollment_date` | TIMESTAMP | When student enrolled |
| `is_active` | BOOLEAN | Currently enrolled |
| `created_at` | TIMESTAMP | Record creation |
| `updated_at` | TIMESTAMP | Last update |

**Constraints:**
- Unique constraint on (student_id, class_id)
- CASCADE delete/update

**Indexes:**
- `student_id`
- `class_id`
- `(student_id, class_id)` unique

---

### 5. **class_subjects** - Class-Subject assignment
Links subjects to classes (which subjects are taught in which classes).

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `class_id` | UUID | FK → classes.id |
| `subject_id` | UUID | FK → subjects.id |
| `created_at` | TIMESTAMP | Record creation |
| `updated_at` | TIMESTAMP | Last update |

**Constraints:**
- Unique constraint on (class_id, subject_id)
- CASCADE delete/update

**Indexes:**
- `class_id`
- `subject_id`
- `(class_id, subject_id)` unique

---

### 6. **teacher_assignments** - Teacher-Class-Subject assignment
Assigns teachers to teach specific subjects in specific classes.

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `teacher_id` | UUID | FK → users.id (role=teacher) |
| `class_id` | UUID | FK → classes.id |
| `subject_id` | UUID | FK → subjects.id |
| `is_primary` | BOOLEAN | Main teacher for this class |
| `created_at` | TIMESTAMP | Record creation |
| `updated_at` | TIMESTAMP | Last update |

**Constraints:**
- CASCADE delete/update

**Indexes:**
- `teacher_id`
- `class_id`
- `subject_id`

---

### 7. **parent_students** - Parent-Child relationship
Links parents to their children (students).

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `parent_id` | UUID | FK → users.id (role=parent) |
| `student_id` | UUID | FK → users.id (role=student) |
| `relationship` | VARCHAR(50) | Mother, Father, Guardian, etc. |
| `is_primary` | BOOLEAN | Primary contact |
| `created_at` | TIMESTAMP | Record creation |
| `updated_at` | TIMESTAMP | Last update |

**Constraints:**
- Unique constraint on (parent_id, student_id)
- CASCADE delete/update

**Indexes:**
- `parent_id`
- `student_id`
- `(parent_id, student_id)` unique

---

## 🔐 Security Features

### Password Handling
- **Hashing Algorithm:** bcrypt
- **Salt Rounds:** 10
- **Auto-hashing:** Sequelize hooks (beforeCreate, beforeUpdate)
- **Validation:** Minimum 8 characters

### Token Management
- **Email Verification:** Random token stored in `email_verification_token`
- **Password Reset:** Token with expiration time
- **JWT Tokens:** Not stored in DB (stateless)

### Data Protection
- Passwords never returned in API responses
- Sensitive fields excluded via `toJSON()` override
- Email uniqueness enforced at DB level
- Cascading deletes prevent orphaned records

---

## 📈 Performance Optimizations

### Indexes Created
- All foreign keys are indexed
- Email, role, and active status indexed for quick lookups
- Unique constraints on relationship pairs
- Composite indexes for common query patterns

### Future Optimizations
- [ ] Add full-text search indexes
- [ ] Implement query result caching (Redis)
- [ ] Consider partitioning for large tables
- [ ] Add database-level audit logging

---

## 🔮 Future Tables (Days 3-30)

The following tables will be created in upcoming days:

### Day 15-20: Timetable & Grades
- **timetable** - Schedule entries
- **grades** - Student grades and evaluations

### Day 29-35: Homework & Attendance
- **homework** - Assignments
- **homework_submissions** - Student submissions
- **attendance** - Daily attendance records

### Day 43-50: Messaging & Documents
- **conversations** - Message threads
- **messages** - Individual messages
- **documents** - File uploads
- **announcements** - School news

### Day 57-58: Notifications
- **notifications** - User notifications
- **notification_preferences** - User settings

---

## 🛠️ Migration Management

### Running Migrations

```bash
# Run all pending migrations
npm run migrate

# Undo last migration
npm run migrate:undo

# Undo all migrations
npm run migrate:undo:all
```

### Creating New Migrations

```bash
# Generate a new migration file
npx sequelize-cli migration:generate --name migration-name
```

### Migration History

| Migration | Date | Description |
|-----------|------|-------------|
| 20251121083818 | Nov 21, 2025 | Create users table |
| 20251121083929 | Nov 21, 2025 | Create classes table |
| 20251121083940 | Nov 21, 2025 | Create subjects table |
| 20251121084017 | Nov 21, 2025 | Create relationship tables |

---

## 📊 Database Statistics

**Current Status:**
- **Tables:** 7 (4 main + 3 relationship)
- **Indexes:** 20+
- **Foreign Keys:** 8
- **Unique Constraints:** 4
- **ENUM Types:** 1 (user roles)

**Expected Growth:**
- Total tables by Day 60: ~15 tables
- Estimated rows (1000 students): 50,000+ rows

---

## 🧪 Testing the Schema

You can verify the tables were created:

```sql
-- List all tables
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- View users table structure
\d users

-- Check indexes
SELECT * FROM pg_indexes 
WHERE tablename = 'users';
```

---

## 📝 Notes

- All timestamps use `TIMESTAMP WITH TIME ZONE` for proper timezone handling
- UUID v4 used for all primary keys (better for distributed systems)
- `created_at` and `updated_at` managed automatically by Sequelize
- Snake_case used for column names (PostgreSQL convention)
- CamelCase used in JavaScript models (follows JavaScript convention)

---

**Last Updated:** Day 2 - November 21, 2025  
**Database Version:** 1.0.0  
**Next Update:** Day 15 (Timetable & Grades tables)

