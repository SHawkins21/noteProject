import React from 'react'
import {useRouter} from "next/router"; 
import UpdateForm from '~/components/UpdateForm';



const Edit = () => {
    const router = useRouter()
    console.log(router.query.id as string); 


  return (
    <div><h1 className='font-bod text-4xl'>Edit</h1>
    <UpdateForm/>
    </div>
  )
}

export default Edit