import type { GuildMember } from "discord.js";
import { normalizeMemberEvent } from "../utils/normalizeMemberEvent.js";

export function handleGuildMemberAdd(member: GuildMember): void {
 const payload = normalizeMemberEvent(
  "guildMemberAdd",
  member,
);

  console.log(JSON.stringify(payload));
}