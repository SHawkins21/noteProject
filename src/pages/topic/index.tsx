import React from 'react'
import { topicRoute } from '~/server/api/routers/topics'
import { api } from '~/utils/api'





const Topics = () => {

  const {data,isError,isLoading} = api.topic.list.useQuery() 

  if(isLoading){
    return(
      <div>...Loading</div>
    )
    
  }

 return (
    <div> 
      <ul>
      {
        data?.map(({title, index}) => (
          <li key={index}>
            <p>{title}</p>
          </li>

        ))

      }
      </ul>
    </div>
  )




  }



 



 


export default Topics