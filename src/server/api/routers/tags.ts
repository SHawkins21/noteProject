import { z } from "zod"; 

import {
    createTRPCRouter, 
    publicProcedure, 
    
    protectedProcedure, 

} from "~/server/api/trpc"; 

const tagsSchema = z.object({
    title:z.string().trim(), 
})

export const tagsRoute = createTRPCRouter({
    list:protectedProcedure
    .query(({ctx:{prisma}}) => {
        return prisma.tags.findMany()
            {
                orderBy: 
                 title:'asc'


            }

    }), 

    create:protectedProcedure
        .input(tagsSchema)
        .mutation(({ctx:{prisma,session}, input:{title}}) => {
            return prisma.tags.create({
                data:{
                    title, 
                    userId:session.user.id
                }
            })
        })


})