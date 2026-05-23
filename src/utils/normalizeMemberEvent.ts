import type { GuildMember } from "discord.js";

export interface NormalizedMemberEvent {
  event: string;
  username: string;
  timestamp: string;
}

export function normalizeMemberEvent(
  event: string,
  member: GuildMember,
): NormalizedMemberEvent {
  return {
    event,
    username: member.user.username,
    timestamp: new Date().toISOString(),
  };
}