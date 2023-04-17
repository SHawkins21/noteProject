import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const topicSchema =z.object({
    title:z.string().trim(),
    
  })
const IDSchema = z.object({
 id:z.string()
})
export const topicRoute = createTRPCRouter({

    list:protectedProcedure
     .query(({ctx:{prisma}}) => {
        return prisma.topic.findMany(
            {
                orderBy:{
                    createdAt: 'desc'
                },
                include:{
                    notes:{
                        select:{
                            title:true, 
                            slug:true
                        }
                    }
                } 
            }


        ) 
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

        }),
        topic_notes:publicProcedure
         .input(IDSchema)
         .query(({ctx: {prisma}, input:{id}}) => {
            return prisma.note.findUnique({
                where:{
                    id
                }, 
                select:{
                    noteId:true
                }
            })
         })
         
})