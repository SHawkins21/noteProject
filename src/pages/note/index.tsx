import { type GetServerSidePropsContext, } from 'next';
import {type NextPage} from 'next'
import { AiOutlineDelete } from "react-icons/ai";
import {api} from "~/utils/api";
import {useRouter} from "next/router"; 
import Link from "next/link"; 
import { getServerAuthSession } from '~/server/auth';


const Notes:NextPage = () => {
    
   const router = useRouter()
   const createRoute = ():void => {
   const noteID = router.query.detail as string

    void router.push('/create')
   }
  
    const {data:notes} = api.note.AllNotes.useQuery(
        
    )
    // const {data:notes} = api.note.detail.useQuery(
      
    //  )

    const mutation = api.note.delete.useMutation({
      onSuccess:async () => {
        await router.push(`/note`)
      }
    })
    const id = notes?.id as string
    
    const deleteNote = ():void => {
      mutation.mutate({id})
    }
  //   topics?.slice(0,1).map(({id}) => (
  //     void setTopic(id)
  // ))


  return (
    <>
    
     <div className=''> 

         <div className='w-full p-5 text-4xl bg-pink-200 rounded-md '>
         <h1 className='text-white text-center'>Notes</h1>
         </div>
       

    
        <div className= 'p-3 flex justify-center'>

              <button
              onClick={()=> createRoute()}
              className=' bg-sky-300 rounded-full  text-white flex justify-center items-center h-[50px] w-[200px]'>Add New Note</button>

        </div>
    
      
        {
            notes?.map(({id, title, content, slug, topicId}) => 
           
            
              <div className='inline-grid p-2'>
                <div className='flex bg-gradient-to-l from-slate-200 to-blue-200 rounded-xl shadow-black shadow-sm 
                w-[400px] h-[100px]' key={id}>
                
                  <button onClick={()=> deleteNote()} className=' bg-red-500 px-2 py-3 p-4 rounded-xl'>
                  <AiOutlineDelete></AiOutlineDelete>  
                  </button>

                  <div className='grid grid-cols-1'>
                  <Link href={`note/${slug as string}`}>
                  
                  <h1 className="text-center font-bold text-black capitalize my-2 ">{title}</h1>
                  <h2 className="truncate fir font-semibold text-slate-600 my-5 p-4">{content}...</h2>
                  <h3 className=''>{}</h3>
                  </Link>
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


 export async function getServerSideProps(ctx:GetServerSidePropsContext){
  const session = await getServerAuthSession(ctx)

if (!session) { 
  return { 
    redirect:{
    destination:"/login",
    permanent:false
   }
  }
}

return{ 
  props:{
    session
  }
}


}


