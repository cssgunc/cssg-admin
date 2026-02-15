import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

const NEXT_PUBLIC_PORT = Number(process.env.NEXT_PUBLIC_PORT) || 3000;
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST || "localhost";

app.use(
  "/*",
  cors({
    origin: [
      `http${NEXT_PUBLIC_HOST === "localhost" ? "" : "s"}://${NEXT_PUBLIC_HOST}:${NEXT_PUBLIC_PORT}`,
    ],
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
