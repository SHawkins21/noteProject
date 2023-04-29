import {SyntheticEvent, useState} from 'react' 
import { api } from "~/utils/api"; 
import { useRouter } from 'next/router';
import slugify from 'slugify';
import { useEffect } from 'react';

interface NoteForm{
    title:string, 
    content:string, 
    
}

const Form = () => {

    const router = useRouter()


    const {data:topics} = api.topic.list.useQuery()

    const mutation = api.note.create.useMutation({
        onSuccess: async () => { 
         await  router.push('/note'); 
        }
    })

    const [title, setTitle] = useState<string>("")
    const [content, setcontent] = useState<string>("")
    const [topic, setTopic] = useState<string>("")

    const setInitTopic = ():void => {
        topics?.slice(0,1).map(({id}) => (
            void setTopic(id)
        ))
        console.log(topic); 
    }

    useEffect(() => { 
        setInitTopic()
    },)



    const getFormData = (e:SyntheticEvent):void => {
        e.preventDefault()
        const data = {
            topicId:topic,
            title, 
            content,
            slug:slugify(title,'_').toLowerCase()
        }
        mutation.mutate(data)
        console.log(data);


    }

  return (
    <div>
        <form className='p-4 grid justify-center text-2xl'>
            <div className='p-7 bg-gradient-to-r from-pink-200 to-amber-500 rounded-xl'>
                <p>New Topic</p>
            <div className='space-x-3'> 
                <select className='bg-slate-200' onChange={(evt) => setTopic(evt.target.value)}>
                    {
                        topics?.map(({id,title}) => (
                            <option key={id} value={id} defaultValue={id}>{title}</option>
                        ))
                    }
                </select>
           </div>

            <div>
                
                <input type="text" placeholder='Title' onChange={(evt)=> setTitle(evt.target.value)}/>


            </div>
            <div>
                
                <textarea placeholder='Content' onChange={(evt)=> setcontent(evt.target.value)}/>


            </div>
            <div>
                <button onClick={(e)=> getFormData(e)}>Submit Note</button>
            </div>

        </div>
        </form>




    </div>
  )
}

export default Form