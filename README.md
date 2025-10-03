Frontend

Next.js (React 18 + TypeScript)
SCSS / PostCSS
React Hot Toast (notifications)

Backend

Node.js + Express
MongoDB + Mongoose
Socket.IO (real-time communication)
JWT Authentication (planned)
Role management (admin / member)

chat-app/
 ├── backend/                # Express + MongoDB server
 │   ├── src/                # Controllers, models, routes, sockets
 │   ├── .env                # Backend environment variables
 │   ├── package.json
 │   └── tsconfig.json
 │
 ├── frontend/               # Next.js frontend
 │   ├── app/                # Pages & layouts
 │   ├── components/         # Reusable UI components
 │   ├── lib/                # API helpers
 │   ├── styles/             # Global + module styles
 │   ├── .env.local          # Frontend environment variables
 │   ├── next.config.ts
 │   ├── package.json
 │   └── tsconfig.json
 │
 ├── .gitignore        # Root gitignore (ignores node_modules etc.)
 └── README.md         # README

##Features
 
User management (create, edit, delete)
Roles: Admin / Member
Avatars from user initials + random background color
Dark theme UI
Real-time chat (via Socket.IO, upcoming)
OAuth / JWT login (planned)

##Roadmap

✅ User CRUD + roles

✅ Avatars

⏳ Socket.IO real-time chat

⏳ JWT/OAuth authentication

⏳ Group chat & admin tools

⏳ Deployment (Vercel + Render/Heroku)
