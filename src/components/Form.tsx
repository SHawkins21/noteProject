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
            <div>
                
                <input type="text" placeholder='Testing' onChange={(evt)=> setTitle(evt.target.value)}/>


            </div>
            <div>
                
                <textarea placeholder='Content' onChange={(evt)=> setcontent(evt.target.value)}/>


            </div>
            <div>
                <button onClick={(e)=> getFormData(e)}>Submit Note</button>
            </div>


        </form>




    </div>
  )
}

export default Form