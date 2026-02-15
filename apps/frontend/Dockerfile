# Build stage: install deps and build Next.js from repo root
FROM oven/bun:1 AS builder

WORKDIR /app
COPY package.json bun.lock* tsconfig.json tsconfig.base.json ./
COPY packages ./packages
COPY apps ./apps
RUN bun install --frozen-lockfile
RUN bun run --filter frontend build

# Run stage: minimal image with only standalone output
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/apps/frontend/.next/standalone ./
COPY --from=builder /app/apps/frontend/.next/static ./apps/frontend/.next/static
COPY --from=builder /app/apps/frontend/public ./apps/frontend/public

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs
USER nextjs
EXPOSE 3000

CMD ["node", "apps/frontend/server.js"]
