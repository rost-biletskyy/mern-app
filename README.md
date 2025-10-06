Frontend 

Framework: Next.js (React 18 + TypeScript) (App Router, React 18 features)
Language: TypeScript (strict mode enabled)
Styling: SCSS Modules + PostCSS pipeline
Notifications: React Hot Toast for global UX feedback
Real-time: Socket.IO client for instant messaging updates


Backend

Framework:  Node.js + Express (RESTful API)
Database: MongoDB + Mongoose ODM
Real-time: Socket.IO integrated server-side
Environment: dotenv configuration with typed env validation
Authentication: JWT-based (planned for next phase)
Role Management: Admin / Member model
Documentation: Swagger UI for interactive API docs

DevOps / Tooling

Docker: containerized fullstack environment (frontend + backend services)
Jira: issue tracking, sprint planning, and task flow
npm / yarn: dependency and build management
Nodemon / Turbopack: fast reload for backend/frontend
ESLint + Prettier: (optional) maintain code style consistency

## 📂 Project Structure

```bash
chat-app/
├── backend/                 # Express + MongoDB server
│   ├── src/                 # Controllers, models, routes, sockets
│   ├── .env                 # Backend environment variables
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                # Next.js frontend
│   ├── app/                 # Pages & layouts
│   ├── components/          # Reusable UI components
│   ├── lib/                 # API helpers
│   ├── styles/              # Global + module styles
│   ├── .env.local           # Frontend environment variables
│   ├── next.config.ts
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore               # Root gitignore (ignores node_modules etc.)
└── README.md                # Documentation
```

##Features

User management (create, edit, delete)
Roles: Admin / Member
Avatars from user initials + random background color
Dark theme UI
Real-time chat (via Socket.IO, upcoming)
OAuth / JWT login (planned)
User CRUD + roles
