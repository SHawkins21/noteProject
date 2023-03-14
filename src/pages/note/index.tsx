
import {type NextPage} from 'next'
import {api} from "~/utils/api";
import {useRouter} from "next/router"


const Notes:NextPage = () => {

   const router = useRouter()
   const createRoute = ():void => {
    
    router.push('/create')
   }

    const {data:notes} = api.note.AllNotes.useQuery()
  return (
    <>
    
     <div className=''> 
     <div className='w-full p-5 text-4xl bg-slate-400 rounded-md '>
      <h1 className='text-white text-center'>Notes</h1>
      </div>
      <div className='p-5'></div>
        {
            notes?.map(({id, title,content}) => 
            <div className='grid'>
                <div className='p-4 bg-slate-400 rounded-xl w-40 shadow-black shadow-sm' key={id}>
                    
                    <div className=''>
                    <h1 className="font-semibold ">{title}</h1>
                    <p className=''>{content}</p>
                    <p>{}</p>
                    </div>

                </div>
            </div>
            
            
            )



        }
        <div>

              <button
              onClick={()=> createRoute()}
              className='bg-sky-300 rounded-full text-white flex justify-center items-center h-[50px] w-[50px]'>New Note</button>


        </div>
     </div>

    </>
  )
}

export default Notes