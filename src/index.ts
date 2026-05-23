import "dotenv/config";

import { createServer } from "./api/createServer.js";
import { createDiscordClient } from "./bot/client.js";
import { registerMemberEventHandlers } from "./bot/memberEventHandlers.js";
import { EnvValidationError, loadEnv } from "./config/env.js";
import { initDatabase } from "./database/initDatabase.js";

async function main(): Promise<void> {
  const env = loadEnv();

  initDatabase();

  const server = createServer();
  await server.listen({
    host: env.host,
    port: env.port,
  });

  const client = createDiscordClient();
  registerMemberEventHandlers(client);

  client.once("ready", (readyClient) => {
    console.log(`Discord bot logged in as ${readyClient.user.tag}`);
  });

  await client.login(env.discordBotToken);
}

main().catch((error: unknown) => {
  if (error instanceof EnvValidationError) {
    console.error(error.message);
    process.exitCode = 1;
    return;
  }

  console.error("Failed to start Discord bot or API server");
  console.error(error);
  process.exitCode = 1;
});
