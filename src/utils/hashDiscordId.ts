import crypto from "node:crypto";

export function hashDiscordId(id: string): string {
  return crypto
    .createHash("sha256")
    .update(id)
    .digest("hex");
}