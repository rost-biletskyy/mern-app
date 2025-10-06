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

# Set up a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# ----------------------------
# Frontend stage
# ----------------------------
FROM base AS frontend

# Mount frontend package files and install dependencies
RUN --mount=type=bind,source=frontend/package.json,target=package.json \
    --mount=type=bind,source=frontend/package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/home/appuser/.npm \
    npm ci --omit=dev

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

# Mount backend package files and install dependencies
RUN --mount=type=bind,source=backend/package.json,target=package.json \
    --mount=type=bind,source=backend/package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/home/appuser/.npm \
    npm ci --omit=dev

# Copy backend source code
COPY backend/. .

# Expose backend port
EXPOSE 5000

# Command to run backend
CMD ["npm", "run", "dev"]
