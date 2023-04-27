import React from 'react'
import TopicForm from '~/components/topics/TopicForm'


const Create = () => {
  return (
    <div className=' italic p-4 '> Create New Topic 

        <h1>New Topic</h1>
        <div>
            <TopicForm/>
        </div>

    </div>
  )
}

export default Create