import React from 'react'
import TopicForm from '~/components/topics/TopicForm'
type Props = {}

const Create = (props: Props) => {
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