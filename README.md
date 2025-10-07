Frontend: Next.js (React 18 + TypeScript), SCSS / PostCSS, React Hot Toast, Socket.IO client

Backend: Node.js, Express, MongoDB (Mongoose), Socket.IO, dotenv, Swagger, JWT (planned)

DevOps: Docker, Jira, npm , Nodemon / Turbopack, Prettier

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
