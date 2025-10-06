# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.9.0

# ----------------------------
# Base stage (shared dependencies)
# ----------------------------
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory
WORKDIR /usr/src/app

# Use production node environment
ENV NODE_ENV=production

# ----------------------------
# Frontend stage
# ----------------------------
FROM base AS frontend

# Copy frontend package files and install dependencies as root
COPY frontend/package*.json ./

# Install dependencies
RUN npm ci

# Copy frontend source code
COPY frontend/. .

# Expose frontend port
EXPOSE 3000

# Command to run frontend
CMD ["npm", "run", "dev"]

# ----------------------------
# Backend stage
# ----------------------------
FROM base AS backend

# Copy backend package files and install dependencies as root
COPY backend/package*.json ./

# Install dependencies
RUN npm ci

# Copy backend source code
COPY backend/. .

# Expose backend port
EXPOSE 5000

# Command to run backend
CMD ["npm", "run", "dev"]
