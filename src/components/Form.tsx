import {useState} from 'react' 
import { api } from "~/utils/api"; 

interface NoteForm{
    title:string, 
    content:string
}

const Form = () => {

    const mutation = api.note.create.useMutation({
        onSuccess: () => { 
         void   console.log('good'); 
        }
    })

    const [title, setTitle] = useState<string>("")
    const [content, setcontent] = useState<string>("")

    const getFormData = (e:MouseEvent):void => {
        e.preventDefault()
        const data = {
            title, 
            content
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