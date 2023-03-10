
import {type NextPage} from 'next'
import {api} from "~/utils/api";





const Notes:NextPage = () => {

    const {data:notes} = api.note.AllNotes.useQuery()
  return (
    <>
    
     <div> 
      <h1>Notes</h1>
        {
            notes?.map(({id, title,content}) => 
                <div key={id}>

                    <h1>{title}</h1>
                    <p>{content}</p>


                </div>
            
            
            
            )



        }

     </div>

    </>
  )
}

export default Notes