import { describe, expect, it } from "vitest";

import { EnvValidationError, loadEnv } from "../src/config/env.js";

describe("loadEnv", () => {
  it("throws a readable error when DISCORD_BOT_TOKEN is missing", () => {
    expect(() =>
      loadEnv({
        DISCORD_CLIENT_ID: "client-id",
        DISCORD_GUILD_ID: "guild-id",
      }),
    ).toThrow(new EnvValidationError("Missing required environment variable: DISCORD_BOT_TOKEN"));
  });

  it("loads required values and default server settings", () => {
    const env = loadEnv({
      DISCORD_BOT_TOKEN: "token",
      DISCORD_CLIENT_ID: "client-id",
      DISCORD_GUILD_ID: "guild-id",
    });

    expect(env).toEqual({
      discordBotToken: "token",
      discordClientId: "client-id",
      discordGuildId: "guild-id",
      host: "127.0.0.1",
      port: 3000,
    });
  });
});
