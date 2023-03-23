import React from 'react'
import {useRouter} from "next/router"; 
import UpdateForm from '~/components/UpdateForm';



const Edit = () => {
    const router = useRouter()
    console.log(router.query.id as string); 


  return (
    <div className='font-bod text-4xl'><h1>Edit</h1>
    <UpdateForm/>
    </div>
  )
}

export default Edit