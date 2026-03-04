# Build stage: install deps and build backend from repo root
FROM oven/bun:1 AS builder

WORKDIR /app
COPY package.json bun.lock* tsconfig.json tsconfig.base.json ./
COPY packages ./packages
COPY apps ./apps
RUN bun install --frozen-lockfile
RUN bun run --filter backend build:prod

# Run stage: minimal image with bundled backend
FROM oven/bun:1-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8787

COPY --from=builder /app/apps/backend/dist/index.js ./
RUN echo "NODE_ENV=$NODE_ENV"

EXPOSE 8787

CMD ["bun", "run", "index.js"]
