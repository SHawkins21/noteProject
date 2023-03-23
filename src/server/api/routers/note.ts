import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const noteSchema =z.object({
  title:z.string().trim(),
  content:z.string().trim()
})

export const IDSchema = z.object({id:z.string()})

export const notesRoutes = createTRPCRouter({
    AllNotes:publicProcedure
    .query(({ctx:{prisma}}) => {
        return prisma.note.findMany()
    }),


create:protectedProcedure
.input(noteSchema)
.mutation(({ctx:{prisma, session},
 input:{title,content} 

}) => {
 return prisma.note.create({
    data:{
      title, 
      content, 
      userId:session.user.id
    }

 })
}),

detail:protectedProcedure
  .input(IDSchema)
  .query(({ctx:{prisma},input:{id}}) => {
    return prisma.note.findUnique({
      where:{
        id,
      }
    })
  }),

delete:protectedProcedure
.input(IDSchema)
.mutation(({ctx:{prisma}, input:{id}})=> {
      return prisma.note.delete({
        where:{
          id, 
        }
      })
}),



//end
})