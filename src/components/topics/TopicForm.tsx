import {type NextPage} from 'next'; 
import React from 'react'
import { useForm, type SubmitHandler } from "react-hook-form";
import {api} from '~/utils/api'
import {useRouter } from "next/router"; 
import Link from 'next/link';


type Inputs = {
  title:string, 
};



 const TopicForm:NextPage = () => {

  const router = useRouter()

  const mutation = api.topic.create.useMutation(


    {
    onSuccess: async(data, variables, context) => {

      await router.push('/topic')
      console.log(data,"good"); 
    }, 
    }
  
  ) 

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {

  const dt = {
    title:data.title
  }

  mutation.mutate(dt)


}
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form 
    className='space-y-3'
    onSubmit={handleSubmit(onSubmit)}>
      
      
      {/* include validation with required or other standard HTML validation rules */}
      <input 
      className=' bg-slate-300 rounded full'
      {...register("title", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.title && <span className=' text-red-600'>This field is required</span>}
      <div className='flex space-x-3'>
      <input 
      type="submit" 
      className='flex px-2 bg-green-600 text-white rounded-xl'/>
       
      <Link href={`/topic/`} className=' bg-blue-500 text-white p-2 rounded-xl'> Current topics
        </Link>

     
      </div>
    </form>
  );}

  export default TopicForm