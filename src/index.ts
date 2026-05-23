import "dotenv/config";
import { initDatabase } from "./database/initDatabase.js";
import { createDiscordClient } from "./bot/client.js";
import { EnvValidationError, loadEnv } from "./config/env.js";
import { createServer } from './api/createServer.js';

async function main(): Promise<void> {
  const env = loadEnv();
  const client = createDiscordClient();

  client.once("ready", (readyClient) => {
    console.log(`Discord bot logged in as ${readyClient.user.tag}`);
  });

  await client.login(env.discordBotToken);
}
initDatabase();

const server = createServer();

await server.listen({
  host: '0.0.0.0',
  port: 3000,
});

main().catch((error: unknown) => {
  if (error instanceof EnvValidationError) {
    console.error(error.message);
    process.exitCode = 1;
    return;
  }

  console.error("Failed to start Discord bot");
  console.error(error);
  process.exitCode = 1;
});
