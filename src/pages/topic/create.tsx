import {type GetServerSidePropsContext, type NextPage } from 'next'
import React from 'react'
import TopicForm from '~/components/topics/TopicForm'
import { getServerAuthSession } from '~/server/auth'


const Create:NextPage = () => {
  return (
    <div>create

        <h1>New Topic</h1>
        <div>
            <TopicForm/>
        </div>

    </div>
  )
}

export default Create

export const GetServerSideProps = async(ctx:GetServerSidePropsContext) => {
 
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