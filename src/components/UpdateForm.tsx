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
    <div>
        <form>
            <div>
                
                <input type="text" placeholder='Testing' onChange={(evt)=> setTitle(evt.target.value)} value={title}/>


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

export default UpdateForm