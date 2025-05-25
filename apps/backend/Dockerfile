# syntax=docker/dockerfile:1
# --- Builder stage ---
FROM node:lts-slim AS builder
WORKDIR /app
COPY ../../pnpm-lock.yaml ../../pnpm-workspace.yaml ./
COPY . .
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile \
  && pnpm build

# --- Test stage ---
FROM node:lts-slim AS test
WORKDIR /app
COPY --from=builder /app /app
RUN pnpm install --frozen-lockfile --prod=false
CMD ["pnpm", "test"]

# --- Production stage ---
FROM gcr.io/distroless/nodejs:20 AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
ENV NODE_ENV=production
CMD ["dist/main.js"]
