
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
            notes?.map(({id, title, content, slug}) => 
            
            <div className=' inline-grid p-4'>

                <div className='flex p-4 bg-slate-400 rounded-xl w-40 h-40 shadow-black shadow-sm' 
                key={id}>
                  
                  <Link href={`note/${slug as string}`}>
                  <div className='grid'>
                  <h1 className="font-bold text-black-600 my-2">{title}</h1>
                  <h2 className="truncate font-semibold text-slate-600 ">{content}...</h2>
                  </div>
                  </Link>

                  <div className='p-3'>
                  <button onClick={()=> deleteNote()} className='bg-red-500 px-2 py-2 rounded-full'>
                  <AiOutlineDelete></AiOutlineDelete>  
                  </button>
                  </div>

                </div>
                
                </div>
            
         
        // </div>
            )
        }
        
     </div>

    </>
  )
}

export default Notes