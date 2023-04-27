import React from 'react'
import { topicRoute } from '~/server/api/routers/topics'
import { api } from '~/utils/api'
import Link from 'next/link'
import Notes from '../note'





const Topics = () => {

  const {data,isError,isLoading} = api.topic.list.useQuery() 

  if(isLoading){
    return(
      <div>...Loading</div>
    )
    
  }

 return (
    <div className='p-4'> 
      <ul className='flex space-x-4 '>
      {
        data?.map(({title,id}, index) => (
          <li key={index}>
            
            <Link className='' href={`/topic/${id}`}>
                  <p>{title}</p>
                  
            </Link>
              {/* {
                notes?.map(({slug}) => (
                  <link key={slug} href={`/topic/${slug}`}>
                  <p>{title}</p>
                  </link>
                ))
              } */}
            
          </li>

        ))

      }
      </ul>
    </div>
  )




  }



 



 


export default Topics