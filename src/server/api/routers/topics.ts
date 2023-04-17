import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const topicSchema =z.object({
    title:z.string().trim(),
    
  })


export const topicRoute = createTRPCRouter({

    list:protectedProcedure
     .query(({ctx:{prisma}}) => {
        return prisma.topic.findMany()
            {
                orderBy:
                    createdAt:'desc'
            }

     }),

    
    create:protectedProcedure
        .input(topicSchema)
        .mutation(({ctx:{prisma,session},input:{title}}) => {
            return prisma.topic.create({
                data:{
                    title,
                    userId:session.user.id
                }
            })

        })
})