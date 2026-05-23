import type { GuildMember, PartialGuildMember } from "discord.js";
import type { MemberEventType } from "../repositories/memberEventRepository.js";
import { hashDiscordId } from "./hashDiscordId.js";

export interface NormalizedMemberEvent {
  eventType: MemberEventType;
  displayNameSnapshot: string;
  occurredAt: string;
  discordUserIdHash: string;
  guildId: string;
}

export function normalizeMemberEvent(
  eventType: MemberEventType,
  member: GuildMember | PartialGuildMember,
): NormalizedMemberEvent {
  return {
    eventType,
    displayNameSnapshot: member.displayName?.trim() || member.user.username,
    occurredAt: new Date().toISOString(),
    discordUserIdHash: hashDiscordId(member.user.id),
    guildId: member.guild.id,
  };
}
