
import {type NextPage} from 'next'
import { AiOutlineDelete } from "react-icons/ai";
import {api} from "~/utils/api";
import {useRouter} from "next/router"; 
import Link from "next/link"; 


const Notes:NextPage = () => {
    
   const router = useRouter()
   const createRoute = ():void => {
   const noteID = router.query.detail as string

    void router.push('/create')
   }
  
    const {data:notes} = api.note.AllNotes.useQuery(
        
    )
    // const {data:notes} = api.note.detail.useQuery({
      
    // })

    const mutation = api.note.delete.useMutation({
      onSuccess:async () => {
        await router.push(`/note`)
      }
    })
    const id = notes?.id as string
    
    const deleteNote = ():void => {
      mutation.mutate({id})
    }



  return (
    <>
    
     <div className=''> 
     <div className='w-full p-5 text-4xl bg-slate-400 rounded-md '>
      <h1 className='text-white text-center'>Notes</h1>
      </div>

      <div className='p-5'>

              <button
              onClick={()=> createRoute()}
              className='bg-sky-300 rounded-full  text-white flex justify-center items-center h-[50px] w-[200px]'>Add New Note</button>


        </div>

      
        {
            notes?.map(({id, title, content}) => 
        <div className='inline-grid grid-cols-1 p-4'>

                <div className=' p-4 bg-slate-400 rounded-xl w-40 shadow-black shadow-sm' key={id}>
                  <div>
                  <button onClick={()=> deleteNote()} className='bg-red-500 px-2 py-2 rounded-full'>
                  <AiOutlineDelete></AiOutlineDelete>  
                  </button>
                  <div className="font-semibold text-slate-600 my-2 ">{title}</div>
                  <div className='truncate' >{content}...</div>
                  <Link href={`note/${id}`} ></Link>
                </div>
                
                </div>
            
         
        </div>
            )
        }
        
     </div>

    </>
  )
}

export default Notes