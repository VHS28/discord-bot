import { Client, Events, type GuildMember, type PartialGuildMember } from "discord.js";
import { saveMemberEvent, type MemberEventType } from "../repositories/memberEventRepository.js";
import { normalizeMemberEvent } from "../utils/normalizeMemberEvent.js";

type MemberEventPayload = GuildMember | PartialGuildMember;

function handleMemberEvent(
  eventType: MemberEventType,
  member: MemberEventPayload,
): void {
  const event = normalizeMemberEvent(eventType, member);

  saveMemberEvent(event);

  console.log(
    JSON.stringify({
      event: "member_event_saved",
      type: event.eventType,
      displayName: event.displayNameSnapshot,
      occurredAt: event.occurredAt,
      guildId: event.guildId,
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
