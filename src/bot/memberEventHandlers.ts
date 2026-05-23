import { Client, Events } from "discord.js";
import { saveMemberEvent, type MemberEventType } from "../database/memberEventRepository.js";

type DiscordMemberEventPayload = {
  user: {
    id: string;
    username: string;
  };
  guild: {
    id: string;
  };
  displayName?: string;
};

function toDisplayName(member: DiscordMemberEventPayload): string {
  return member.displayName?.trim() || member.user.username;
}

function handleMemberEvent(
  eventType: MemberEventType,
  member: DiscordMemberEventPayload,
): void {
  const occurredAt = new Date().toISOString();

  saveMemberEvent({
    eventType,
    displayNameSnapshot: toDisplayName(member),
    discordUserId: member.user.id,
    occurredAt,
    guildId: member.guild.id,
  });

  console.log(JSON.stringify({
    event: "member_event_saved",
    type: eventType,
    displayName: toDisplayName(member),
    occurredAt,
    guildId: member.guild.id,
  }));
}

export function registerMemberEventHandlers(client: Client): void {
  client.on(Events.GuildMemberAdd, (member) => {
    handleMemberEvent("join", member);
  });

  client.on(Events.GuildMemberRemove, (member) => {
    handleMemberEvent("leave", member);
  });
}