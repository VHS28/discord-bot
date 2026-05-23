import { Client, Events, GuildMember } from "discord.js";
import { saveMemberEvent, MemberEventType } from "../database/memberEventRepository.js";

function toDisplayName(member: GuildMember): string {
  return member.displayName?.trim() || member.user.username;
}

function handleMemberEvent(
  eventType: MemberEventType,
  member: GuildMember,
): void {
  const occurredAt = new Date().toISOString();

  saveMemberEvent({
    eventType,
    displayNameSnapshot: toDisplayName(member),
    discordUserId: member.user.id,
    occurredAt,
    guildId: member.guild.id,
  });

  console.log(
    JSON.stringify({
      event: "member_event_saved",
      type: eventType,
      displayName: toDisplayName(member),
      occurredAt,
      guildId: member.guild.id,
    })
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