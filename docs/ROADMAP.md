# 🗓️ 90-Day Development Roadmap

## Month 1 — Backend + Core System (Days 1–30)

### Week 1: Authentication & Database Foundation
- [x] **Day 1** — Kickoff & repo setup
- [ ] **Day 2** — DB schema planning (high level)
- [ ] **Day 3** — Backend skeleton + auth design
- [ ] **Day 4** — User model + registration
- [ ] **Day 5** — Login + token + logout
- [ ] **Day 6** — Password reset + email verification
- [ ] **Day 7** — RBAC baseline + docs

### Week 2: Core Entities
- [ ] **Day 8** — Classes table & basic CRUD
- [ ] **Day 9** — Subjects table & linkage
- [ ] **Day 10** — Teacher–Class–Subject relationships
- [ ] **Day 11** — Parent ↔ Student relationship
- [ ] **Day 12** — Student list & profile endpoints
- [ ] **Day 13** — User profile UX endpoints + docs
- [ ] **Day 14** — Auth & users QA sprint

### Week 3: Timetable System
- [ ] **Day 15** — Timetable model & basic CRUD
- [ ] **Day 16** — Weekly/daily timetable endpoints
- [ ] **Day 17** — Real-time design & prototype
- [ ] **Day 18** — Timetable change notifications
- [ ] **Day 19** — Timetable admin UI APIs
- [ ] **Day 20** — Timetable tests & edge cases
- [ ] **Day 21** — Grades DB + model

### Week 4: Grades System
- [ ] **Day 22** — Add grade API (teacher)
- [ ] **Day 23** — Average calculation & coefficients
- [ ] **Day 24** — Grade history & edit
- [ ] **Day 25** — Grade statistics & API for charts
- [ ] **Day 26** — Report card generation
- [ ] **Day 27** — Grade validation & security
- [ ] **Day 28** — Grades QA & docs
- [ ] **Day 29** — Homework model & schema
- [ ] **Day 30** — Teacher creates homework (backend)

## Month 2 — Homework, Attendance, Messaging, Documents (Days 31–60)

### Week 5: Homework & Assignments
- [ ] **Day 31** — Student view & sorting
- [ ] **Day 32** — Automatic reminders system
- [ ] **Day 33** — Homework submission (optional)
- [ ] **Day 34** — Homework search & filters
- [ ] **Day 35** — Homework testing & polish
- [ ] **Day 36** — Attendance model
- [ ] **Day 37** — Teacher marks attendance

### Week 6: Attendance System
- [ ] **Day 38** — Parent justification flow
- [ ] **Day 39** — Attendance history & reports
- [ ] **Day 40** — Behavior logs (optional)
- [ ] **Day 41** — Attendance notifications
- [ ] **Day 42** — Attendance QA
- [ ] **Day 43** — Messaging architecture design
- [ ] **Day 44** — Direct messages MVP

### Week 7: Messaging System
- [ ] **Day 45** — Class group threads
- [ ] **Day 46** — File attachments in messages
- [ ] **Day 47** — Real-time messaging (WebSockets)
- [ ] **Day 48** — Message notifications & read receipts
- [ ] **Day 49** — Messaging QA
- [ ] **Day 50** — Announcements model
- [ ] **Day 51** — Announcement CRUD + schedule

### Week 8: Documents & Notifications
- [ ] **Day 52** — Document manager backend
- [ ] **Day 53** — Document access control
- [ ] **Day 54** — Document organization & search
- [ ] **Day 55** — Document preview + protection
- [ ] **Day 56** — Announcements/documents QA
- [ ] **Day 57** — Notifications system core
- [ ] **Day 58** — Notification channels
- [ ] **Day 59** — Search & global filters
- [ ] **Day 60** — Mid-project QA & backlog cleanup

## Month 3 — Frontend + Mobile + Dashboards + Deployment (Days 61–90)

### Week 9: Web Frontend Core
- [ ] **Day 61** — Web frontend skeleton
- [ ] **Day 62** — Web: Login/Registration screens
- [ ] **Day 63** — Web: Role-based dashboard shells
- [ ] **Day 64** — Web: Timetable UI (calendar)
- [ ] **Day 65** — Web: Grades UI & charts
- [ ] **Day 66** — Web: Homework UI
- [ ] **Day 67** — Web: Attendance UI

### Week 10: Web Frontend Advanced
- [ ] **Day 68** — Web: Messaging UI
- [ ] **Day 69** — Web: Announcements & Documents UI
- [ ] **Day 70** — Web: Admin panel basics
- [ ] **Day 71** — Web: Admin advanced tools
- [ ] **Day 72** — Web: Polish & accessibility
- [ ] **Day 73** — Frontend testing & E2E
- [ ] **Day 74** — Mobile (Flutter) skeleton & auth

### Week 11: Mobile Development
- [ ] **Day 75** — Mobile: Dashboard & navigation
- [ ] **Day 76** — Mobile: Timetable screen
- [ ] **Day 77** — Mobile: Grades & homework screens
- [ ] **Day 78** — Mobile: Messaging & attachments
- [ ] **Day 79** — Mobile: Documents & announcements
- [ ] **Day 80** — Mobile: Attendance (student view)
- [ ] **Day 81** — Push notifications & Firebase

### Week 12: Security, Performance & Deployment
- [ ] **Day 82** — Security audit sprint
- [ ] **Day 83** — GDPR & data export/delete
- [ ] **Day 84** — Performance tests & DB tuning
- [ ] **Day 85** — Final bugfix sprint
- [ ] **Day 86** — Prepare production infra
- [ ] **Day 87** — Deploy backend + run smoke tests
- [ ] **Day 88** — Deploy web app + final verifications
- [ ] **Day 89** — Build mobile releases & distribution
- [ ] **Day 90** — Handover & documentation

## 📊 Progress Tracking

- **Current Day:** 1
- **Days Completed:** 1
- **Days Remaining:** 89
- **Progress:** 1.1%

## 🎯 Key Milestones

- **Day 30:** Backend core features complete
- **Day 60:** All backend features + APIs complete
- **Day 73:** Web frontend complete
- **Day 81:** Mobile apps complete
- **Day 90:** Production deployment & handover

## 📝 Notes

- Each day's tasks should be completed sequentially
- Daily tasks are cumulative - previous days' work is prerequisite
- QA days include testing all features implemented in the week
- Adjust timeline as needed based on complexity and team capacity
- Document blockers and risks in daily standups

## 🚀 Next Steps

**Tomorrow (Day 2):**
- Draw ER diagram for core entities
- Choose PostgreSQL as database
- Create initial SQL schema file
- Add migrations tool (Sequelize)

---

**Last Updated:** Day 1 - November 20, 2025  
**Status:** 🟢 On Track

