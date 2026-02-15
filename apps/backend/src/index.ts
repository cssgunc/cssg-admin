import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

const NEXT_PUBLIC_PORT = Number(process.env.NEXT_PUBLIC_PORT) || 3000;

app.use(
  "/*",
  cors({
    origin: [`http://localhost:${NEXT_PUBLIC_PORT}`],
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
