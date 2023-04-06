import React from 'react'
import { useRouter} from "next/router";
import { type NextPage } from 'next'; 
import {api} from "~/utils/api"; 



const NoteDetail:NextPage = () => {
  const router = useRouter()
  const noteID = router.query.detail as string

  const {data:detail} = api.note.detail.useQuery({
    slug:noteID
  })
  const mutation = api.note.delete.useMutation({
    onSuccess:async () => {
      await router.push(`/note`)
    }
  })

  const id = detail?.slug as string
  
 const deleteNote = ():void => {
  mutation.mutate({id})
 }
 const edit = () => {
  void router.push(`/note/${id}/edit/`)
 }
  return (
    <div>

      <h1>{detail?.title}</h1>
      <p>{detail?.content}</p>
      <div>
        <button onClick={()=> deleteNote() } className=' bg-red-500 px-6 py-4 rounded-lg'>Delete</button>
      </div>

      <button onClick={()=>edit()}
      className="bg-blue-400 px-6 py3">Edit


      </button>

    </div>
  )
}

export default NoteDetail