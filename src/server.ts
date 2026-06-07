import "dotenv/config";
import Fastify from "fastify";
import livroRoutes from "./routes/livroRoutes.js";
import autorRoutes from "./routes/autorRoutes.js";

const app = Fastify({
  logger: true,
});

app.register(autorRoutes);
app.register(livroRoutes);

async function start() {
  try {
    await app.listen({
      port: Number(process.env.PORT),
      host: "0.0.0.0",
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();
