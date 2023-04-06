import {useState,useEffect, type SyntheticEvent, } from 'react' 
import { api } from "~/utils/api"; 
import { useRouter } from 'next/router';
import slugify from 'slugify';

interface NoteForm{
    title:string, 
    content:string,
}

const UpdateForm = () => {

    const router = useRouter()

    const {data:note,isLoading} = api.note.detail.useQuery({
        slug:router.query.detail as string
    })

    const mutation = api.note.update.useMutation({
        onSuccess: async () => { 
         await  router.push('/note'); 
        }
    })

    const [title, setTitle] = useState<string | undefined>("")
    const [content, setcontent] = useState<string | undefined>("")

    useEffect(() => {
        setTitle(note?.title)
        setcontent(note?.content)
        //setSlug(note?.slug as string)

    }, [note?.title,note?.content,])

    const getFormData = (e:SyntheticEvent):void => {
        e.preventDefault()
      
        const data = {
            title: title as string, 
            content:content as string,
            id:note?.id as string, 
            slug:slugify(title as string,'_' ).toLowerCase,
        }
        mutation.mutate(data)
        console.log(data);


    }

  return (
    <div>
        <form>
            <div>
                
                <input type="text" placeholder='Testing' onChange={(evt)=> setTitle(evt.target.value)} value={title}/>


            </div>
            <div className='text-sm'>
                
                <textarea placeholder='Content' onChange={(evt)=> setcontent(evt.target.value)} value={content}/>


            </div>
            <div>
                <button onClick={(e)=> getFormData(e)}>Submit Note</button>
            </div>


        </form>




    </div>
  )
}

export default UpdateForm