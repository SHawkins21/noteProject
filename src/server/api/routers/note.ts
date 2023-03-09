import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const notesRoutes = createTRPCRouter({
    AllNotes:publicProcedure
    .query(({ctx:{prisma}}) => {
        return prisma.note.findMany()
    })
})