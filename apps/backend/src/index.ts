import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

const NEXT_PUBLIC_FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

app.use(
  "/*",
  cors({
    origin: [NEXT_PUBLIC_FRONTEND_URL],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.get("/health", (c) => {
  return c.json({
    status: "ok",
    message: "Backend is running",
  });
});

const port = Number(process.env.PORT) || 8787;

export default {
  port,
  fetch: app.fetch,
};
