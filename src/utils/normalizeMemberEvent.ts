import type { GuildMember } from "discord.js";
import { hashDiscordId } from "./hashDiscordId.js";

export interface NormalizedMemberEvent {
  event: string;
  username: string;
  timestamp: string;
  discordUserIdHash: string;
  guildId: string;
}

export function normalizeMemberEvent(
  event: string,
  member: GuildMember,
): NormalizedMemberEvent {
  return {
    event,
    username: member.user.username,
    timestamp: new Date().toISOString(),
    discordUserIdHash: hashDiscordId(member.id),
    guildId: member.guild.id,
  };
}