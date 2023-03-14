import {useState} from 'react'

interface NoteForm{
    title:string, 
    content:string
}

const Form = () => {

    const [title, setTitle] = useState<string>("")
    const [content, setcontent] = useState<string>("")

    const getFormData = (e):void => {
        e.preventDefault()
        const data = {
            title, 
            content
        }
        console.log(data)


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