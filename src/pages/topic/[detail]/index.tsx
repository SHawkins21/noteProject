import {type NextPage} from "next"
import {api} from "~/utils/api"
import {useRouter} from "next/router"; 



const Topics:Nextpage = () => {

  const router = useRouter()
  const id = router.query.detail as string

  const {data: note, isLoading} = api.topic.topic_notes.useQuery(

    {
      id:id 
    }
  )

  return (
    <div>Title{note?.title}</div>
  )
}

export default Topics