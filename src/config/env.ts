export type AppEnv = {
  discordBotToken: string;
  discordClientId: string;
  discordGuildId: string;
  host: string;
  port: number;
};

export class EnvValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnvValidationError";
  }
}

function requireValue(source: NodeJS.ProcessEnv, key: string): string {
  const value = source[key];

  if (!value || value.trim().length === 0) {
    throw new EnvValidationError(`Missing required environment variable: ${key}`);
  }

  return value;
}

function readPort(source: NodeJS.ProcessEnv): number {
  const rawPort = source.PORT ?? "3000";
  const port = Number.parseInt(rawPort, 10);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new EnvValidationError("PORT must be an integer between 1 and 65535");
  }

  return port;
}

export function loadEnv(source: NodeJS.ProcessEnv = process.env): AppEnv {
  return {
    discordBotToken: requireValue(source, "DISCORD_BOT_TOKEN"),
    discordClientId: requireValue(source, "DISCORD_CLIENT_ID"),
    discordGuildId: requireValue(source, "DISCORD_GUILD_ID"),
    host: source.HOST ?? "127.0.0.1",
    port: readPort(source),
  };
}
