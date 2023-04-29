import {type GetServerSidePropsContext, type NextPage } from 'next'
import React from 'react'
import TopicForm from '~/components/topics/TopicForm'
import { getServerAuthSession } from '~/server/auth'


const Create:NextPage = () => {
  return (
    <div className='flex justify-center'>
    
    <div className=' text-blue-600 text-3xl space-y-4 italic capitalize '>

        <h1> Create A New Topic: </h1>
        <div>
            <TopicForm/>
        </div>

    </div>
    </div>
  )
}

export default Create

export const getServerSideProps = async(ctx:GetServerSidePropsContext) => {
 
  const session = await getServerAuthSession(ctx)

    if (!session) { 
      return{
      redirect:{
        destination:"/login",
        permanant:false
      }}

    }

    return { 
      props:{
        session
      }
    }

}