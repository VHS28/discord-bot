import type { FastifyInstance } from "fastify";
import { getRecentPublicMemberEvents } from "../../database/database.js";

export function registerPublicRoutes(server: FastifyInstance): void {
  server.get("/api/public/status", async () => {
    const recentEvents = getRecentPublicMemberEvents();

    return {
      status: "ok",
      recentEvents,
    };
  });

  server.get("/api/public/member-events", async () => {
    const events = getRecentPublicMemberEvents();

    return { events };
  });
}
