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
        //  await  router.push(`/note/${router.query.detail as string}`);
        await  router.push(`/note/${slugify(title as string,'_').toLowerCase()}`) 
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
            slug:slugify(title as string,'_' ).toLowerCase(),
        }
        mutation.mutate(data)
        // console.log(data);


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