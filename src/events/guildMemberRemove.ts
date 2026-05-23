import type { GuildMember } from "discord.js";
import { normalizeMemberEvent } from "../utils/normalizeMemberEvent.js";

export function handleGuildMemberRemove(member: GuildMember): void {
  const payload = normalizeMemberEvent("leave", member);

  console.log(JSON.stringify(payload));
}
