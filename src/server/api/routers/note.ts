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
const updateNoteSchema =z.object({
  id:z.string(), 
  title:z.string().trim(),
  content:z.string().trim()
})

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
update:protectedProcedure
.input(updateNoteSchema)
.mutation(({ctx:{prisma},input:{id,title,content}}) => {
  return prisma.note.update({
   where:{
    id,
       },
       data:{
        title,
        content
       }

  })
  
})

//end
})