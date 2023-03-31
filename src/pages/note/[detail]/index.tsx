import React from 'react'
import { useRouter} from "next/router";
import { type NextPage } from 'next'; 
import {api} from "~/utils/api"; 



const NoteDetail:NextPage = () => {
  const router = useRouter()
  const noteID = router.query.detail as string

  const {data:detail} = api.note.detail.useQuery({
    id:noteID
  })
  const mutation = api.note.delete.useMutation({
    onSuccess:async () => {
      await router.push(`/note`)
    }
  })

  const id = detail?.id as string
  
 const deleteNote = ():void => {
  mutation.mutate({id})
 }
 const edit = () => {
  void router.push(`/note/${id}/edit/`)
 }
  return (
  <div>
  <h1 className='text-2xl font-bold py-4 p-2 '>{detail?.title}</h1>
  <div className='flex space-x-3 p-4 px-2 '>
  <button onClick={()=>edit()}
      className="bg-blue-500 px-6 py-4 rounded-lg">Edit</button>
  <div>
        <button onClick={()=> deleteNote() } className=' bg-red-500 px-6 py-4 rounded-lg'>Delete</button>
  </div>   
  </div>

    <div className='px-4 w-[400px]'>
      <div className=''>
      
      <p>{detail?.content}</p>

      
     </div>
      


      

    </div>
    </div>
  )
}

export default NoteDetail