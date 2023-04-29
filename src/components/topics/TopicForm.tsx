import {type NextPage} from 'next'; 
import React from 'react'
import { useForm, type SubmitHandler } from "react-hook-form";
import {api} from '~/utils/api'
import {useRouter } from "next/router"; 


type Inputs = {
  title:string, 
};



 const TopicForm:NextPage = () => {

  const router = useRouter()

  const mutation = api.topic.create.useMutation(


    {
    onSuccess: async(data, variables, context) => {

      await router.push('/topics')
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
    <form className='p-4 space-x-3 rounded-xl bg-gradient-to-r from-pink-200 to-amber-500' onSubmit={handleSubmit(onSubmit)}>
      
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className=' bg-slate-200 rounded-md' {...register("title", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.title && <span className=' text-red-700'>This field is required</span>}
      
      <input className='bg-blue-200 p-3 rounded-xl' type="submit" />
    </form>
  );}

  export default TopicForm