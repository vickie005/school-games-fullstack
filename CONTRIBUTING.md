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
