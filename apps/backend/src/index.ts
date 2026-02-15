import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = Number(process.env.PORT) || 8787;

export default {
  port,
  fetch: app.fetch,
};
