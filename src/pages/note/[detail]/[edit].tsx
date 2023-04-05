import React from 'react'
import {useRouter} from "next/router"; 
import UpdateForm from '~/components/UpdateForm';
import { AiFillEdit } from "react-icons/ai";


const Edit = () => {
    const router = useRouter()
    console.log(router.query.id as string); 


  return (
    <div className=''>
        <AiFillEdit className=' text-blue-500 h-[40px] w-[40px]'/>
        <div className='flex'>
         <h1 className='p-4 text-blue-500 font-bold text-3xl'>Edit Note...</h1>
        </div>
      


    <UpdateForm/>
    </div>
  )
}

export default Edit