# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.9.0

# ----------------------------
# Base stage
# ----------------------------
FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /usr/src/app

# Remove NODE_ENV=production for dev containers
# ENV NODE_ENV=production  <-- remove this line for dev

# ----------------------------
# Frontend stage
# ----------------------------
FROM base AS frontend

COPY frontend/package*.json ./

# Install all dependencies including dev
RUN npm ci

COPY frontend/. .

EXPOSE 3000
CMD ["npm", "run", "dev"]

# ----------------------------
# Backend stage
# ----------------------------
FROM base AS backend

COPY backend/package*.json ./

# Install all dependencies including dev
RUN npm ci

COPY backend/. .

EXPOSE 5000
CMD ["npm", "run", "dev"]
