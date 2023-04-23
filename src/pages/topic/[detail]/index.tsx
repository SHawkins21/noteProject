import {type NextPage} from "next"
import {api} from "~/utils/api"
import {useRouter} from "next/router"; 
import Link from "next/link"


const Topics:Nextpage = () => {

  const router = useRouter()
  const id = router.query.detail as string

  const {data: note, isLoading} = api.topic.topic_notes.useQuery(

    {
      id:id 
    }
  )

  return (

  <div> 
    <div>{note?.title}</div>
    {
      note?.notes?.map(({title,slug,createdAt})=>(
        <li key={slug}>
          <h2>{title}</h2>
          <Link href={`/note/${slug}`}>
            <h2>{title}</h2>
            <p>{ new Date(createdAt).getFullYear()}</p>
          </Link>
        </li>
      ))
    }
  </div> 
  )
}

export default Topics