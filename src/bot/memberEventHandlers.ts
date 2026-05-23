import { Client, Events, type GuildMember, type PartialGuildMember } from "discord.js";
import {
  saveMemberEvent,
  type MemberEventType,
} from "../repositories/memberEventRepository.js";
import { hashDiscordId } from "../utils/hashDiscordId.js";

type MemberEventPayload = GuildMember | PartialGuildMember;

function toDisplayName(member: MemberEventPayload): string {
  return member.displayName?.trim() || member.user.username;
}

function handleMemberEvent(
  eventType: MemberEventType,
  member: MemberEventPayload,
): void {
  const occurredAt = new Date().toISOString();
  const displayName = toDisplayName(member);

  saveMemberEvent({
    eventType,
    displayNameSnapshot: displayName,
    discordUserIdHash: hashDiscordId(member.user.id),
    occurredAt,
    guildId: member.guild.id,
  });

  console.log(
    JSON.stringify({
      event: "member_event_saved",
      type: eventType,
      displayName,
      occurredAt,
      guildId: member.guild.id,
    }),
  );
}

export function registerMemberEventHandlers(client: Client): void {
  client.on(Events.GuildMemberAdd, (member) => {
    handleMemberEvent("join", member);
  });

  client.on(Events.GuildMemberRemove, (member) => {
    handleMemberEvent("leave", member);
  });
}
