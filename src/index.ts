import "dotenv/config";

import { createDiscordClient } from "./bot/client.js";
import { EnvValidationError, loadEnv } from "./config/env.js";

async function main(): Promise<void> {
  const env = loadEnv();
  const client = createDiscordClient();

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

  console.error("Failed to start Discord bot");
  console.error(error);
  process.exitCode = 1;
});
