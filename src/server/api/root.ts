import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { notesRoutes } from "./routers/note";
import { topicRoute } from "./routers/topics"
import { tagsRoute } from "./routers/tags";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  note:notesRoutes,
  topic:topicRoute, 
  tags:tagsRoute, 
});

// export type definition of API
export type AppRouter = typeof appRouter;
