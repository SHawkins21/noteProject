import {useState,useEffect, type SyntheticEvent, } from 'react' 
import { api } from "~/utils/api"; 
import { useRouter } from 'next/router';

interface NoteForm{
    title:string, 
    content:string
}

const UpdateForm = () => {

    const router = useRouter()

    const {data:note,isLoading} = api.note.detail.useQuery({
        id:router.query.detail as string
    })

    const mutation = api.note.create.useMutation({
        onSuccess: async () => { 
         await  router.push('/note'); 
        }
    })

    const [title, setTitle] = useState<string>("")
    const [content, setcontent] = useState<string>("")

    useEffect(() => {
        setTitle(note?.title)
        setcontent(note?.content)

    }, [note?.title,note?.content])

    const getFormData = (e:SyntheticEvent):void => {
        e.preventDefault()
        const data = {
            title, 
            content
        }
        // mutation.mutate(data)
        console.log(data);


    }

  return (
    <div className='p-4'>
        <form className='space-x-6 '>
            <div className='flex space-x-6'>
            <div className=''>
                <label className=' text-gray-600 italic'>Edit Note Title</label>
                <input type="text" 
                       placeholder='Testing' 
                       onChange={(evt)=> setTitle(evt.target.value)} 
                       value={title}
                       className='flex p-4 h-[80px] text-gray-400 font-semibold bg-slate-100 rounded-lg'
                       />
                       


            </div>
            <div className=''>
                <text className='text-gray-600 italic'>Edit Note Content</text>
                <textarea 
                          className='flex text-gray-400 p-4 border-spacing-4 bg-slate-100 rounded-lg' 
                          value={content}
                          onChange={(evt)=> setcontent(evt.target.value)}/>


            </div>
            </div>
            <div className='p-5 '>
                <button
                     className='hover:shadow-lg bg-green-300 p-4 rounded-lg'

                     onClick={(e)=> getFormData(e)}>Submit Note
                   
                     
                     
                </button>
            </div>


        </form>




    </div>
  )
}

export default UpdateForm