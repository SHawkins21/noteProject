import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const noteSchema =z.object({
  title:z.string().trim(),
  content:z.string().trim(),
  slug:z.string()
})
const updateNoteSchema =z.object({
  id:z.string(), 
  title:z.string().trim(),
  content:z.string().trim(),
  slug:z.string(),
})
export const IDSchema = z.object({id:z.string()})
export const notesRoutes = createTRPCRouter({
    AllNotes:publicProcedure
    .query(({ctx:{prisma}}) => {
        return prisma.note.findMany()
        orderBy:{
          createdAt:"desc"
        }
    }),


create:protectedProcedure
.input(noteSchema)
.mutation(({ctx:{prisma, session,},
 input:{title,content,slug} 

}) => {
 return prisma.note.create({
    data:{
      title, 
      content, 
      slug, 
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
       }, 
    
  })

}), 
detail:protectedProcedure
  .input(z.object({
    slug:z.string()
  }))
  .query(({ctx:{prisma},input:{slug}})=>{
    return prisma.note.findUnique({
      where:{
        slug:slug
      }
    })
  }), 

delete:protectedProcedure
 .input(IDSchema)
 .mutation(({ctx:{prisma},input:{id}}) => {
  return prisma.note.delete({
  where:{
    id, 
  }
}) 
})
//end
})