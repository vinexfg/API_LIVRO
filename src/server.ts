import Fastify from "fastify";
import routes from "./routes/livroRoutes.js";

const app = Fastify({
  logger: true,
});

app.register(routes);

async function start() {
  try {
    await app.listen({
      port: 3000,
      host: "0.0.0.0",
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();
