# Contributing to School Games Fullstack App

Thanks for your interest in contributing! This guide will help you get started.

## 🎯 Development Setup

### Prerequisites

- Node.js 18+

### Quick Start

```bash
# 1. Clone and install
git clone https://github.com/vickie005/school-games-fullstack
cd school-games-fullstack
pnpm install

# 2. Copy environment variables.
cp .env.example .env

# 3. Start development servers
pnpm run dev
```

## 🏗️ Architecture Overview

### Services
- **Frontend (dashboard)** - React app for 
- **Backend (webhook-service)** - node + express service to ...

### Key Technologies

- **React.js** - Modern React framework.
- **TypeScript** - Type safety across all services
- **Redis** - Queue management
- **PostgreSQL** - Data persistence

## 📋 Team Roles & Responsibilities

### Available Lead Positions

- **Backend Lead** 
- **Frontend Lead** (dashboard)
- **DevOps Lead** (infrastructure + deployment)

### Responsibilities

- **Leads**: Architecture decisions, code review, team coordination
- **Contributors**: Feature development, bug fixes, testing
- **Reviewers**: Code quality, documentation, testing

## 🛠️ Development Workflow

### 1. Pick a Task

- Check GitHub Issues for available tasks
- Comment on issue to claim it
- Ask questions if anything is unclear

### 2. Development

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make your changes
# Test your changes
npm run dev # Test locally

# Commit with clear messages
git commit -m "feat: add webhook validation middleware"
```

## 📌 Project Contribution Guidelines (School Games Website)

- Ensure the project runs fully after cloning (both backend and frontend) before starting work.
- Work on your own branch. Branch naming format:
  - `github-username/feature-name`
  - Example: `vickie005/auth-login-flow`

### Common Git Commands

- Check current branch before coding:
```bash
git status
git branch --show-current
```

- Fetch or pull latest changes from `main`:
```bash
# Fetch updates from origin without merging
git fetch origin

# Update local main
git checkout main
git pull origin main

# Rebase your branch on latest main (recommended)
git checkout your-branch
git rebase origin/main
```

- Create and switch to a new branch:
```bash
git checkout -b github-username/feature-name
```

### Main Branch Protection

- Do NOT push directly to `main`.
- All changes must go through Pull Requests.
- Only reviewed and approved code is merged into `main`.

## ✅ Getting the Project Running After Clone

Follow these quick steps to get both services running locally.

### Root (Monorepo)
```bash
pnpm install
```

### Backend (API)
```bash
cd backend

# 1) Install dependencies
pnpm install

# 2) Configure environment variables
# Create .env and fill required values (DB connection, JWT_SECRET, etc.)
copy .env.example .env  # Windows
cp .env.example .env    # macOS/Linux

# 3) (Optional) Run database migrations once DB is ready
pnpm migrate

# 4) Start the server (dev mode)
pnpm dev
```

### Frontend (Web App)
```bash
cd frontend

# 1) Install dependencies
pnpm install

# 2) Start the dev server
pnpm dev

# The app will be available on http://localhost:3000 by default
```

### 3. Submit PR

- Push to your fork
- Create Pull Request with clear description
- Link to relevant issue
- Add screenshots if UI changes

## 🧪 Testing

### Manual Testing

```bash
# Test webhook endpoint
curl -X POST http://localhost:3001/test/user123

# Health check
curl http://localhost:3001/health

# Test dashboard
open http://localhost:3000
```

### Future: Automated Testing

- Unit tests for shared utilities
- Integration tests for webhook flow
- E2E tests for dashboard

## 📝 Code Standards

### TypeScript

- Use strict mode
- Export types from `shared/` package
- Prefer interfaces over types
- Use meaningful variable names

### Commit Messages

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semi colons, etc
refactor: code refactoring
test: adding tests
chore: updating build tasks, package manager configs, etc
```

### File Structure

```

```

## 🚀 Deployment

### Development

- Services run locally on different ports
- Hot reload enabled

### Staging (Coming Soon)

- Deployed on Railway/Vercel
- Staging database
- Real M-Pesa sandbox testing

### Production (Coming Soon)

- Production-ready infrastructure
- Monitoring & alerting
- Real M-Pesa integration

## 🤝 Communication

### Discord Server

- #general - General discussion
- #backend - Webhook service & delivery worker
- #frontend - Dashboard development
- #devops - Infrastructure & deployment
- #daily-updates - Daily progress updates

### GitHub

- Use issues for bugs and feature requests
- Use discussions for architectural questions
- Tag relevant team leads in PRs

## 📚 Resources


### Technical Docs


## ❓ Questions?

- Ask in Discord #general channel
- Create GitHub Discussion

Let's build something amazing together!
