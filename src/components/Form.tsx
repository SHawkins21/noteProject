import {SyntheticEvent, useState} from 'react' 
import { api } from "~/utils/api"; 
import { useRouter } from 'next/router';
import slugify from 'slugify';

interface NoteForm{
    title:string, 
    content:string, 
    
}

const Form = () => {

    const router = useRouter()

    const mutation = api.note.create.useMutation({
        onSuccess: async () => { 
         await  router.push('/note'); 
        }
    })

    const [title, setTitle] = useState<string>("")
    const [content, setcontent] = useState<string>("")

    const getFormData = (e:SyntheticEvent):void => {
        e.preventDefault()
        const data = {
            title, 
            content,
            slug:slugify(title,'_').toLowerCase()
        }
        mutation.mutate(data)
        console.log(data);


    }

  return (
    <div>
        <form>
            <div className='p-4'>
                
                <input 
                type="text" 
                placeholder='Note Title' 
                onChange={(evt)=> setTitle(evt.target.value)}
                className="p-4 bg-slate-300 rounded-xl"/>


            </div>
            <div className='p-4'>
                
                <textarea 
                
                placeholder='Note Content' 
                onChange={(evt)=> setcontent(evt.target.value)}
                className='p-4 bg-slate-300 rounded-xl'/>


            </div>
            <div className='p-4'>
                <button 
                className=' bg-green-500 text-white p-6 rounded-md'
                onClick={(e)=> getFormData(e)}>Add New Note</button>
            </div>


        </form>




    </div>
  )
}

export default Form