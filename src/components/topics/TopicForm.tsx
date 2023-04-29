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
    <form onSubmit={handleSubmit(onSubmit)}>
      
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("title", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.title && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );}

  export default TopicForm