import { tagsRoute } from "~/server/api/routers/tags";
import {api} from '~/utils/api'



const Tags = () => {

const {data,isError, isLoading} = api.tags.list.useQuery()

if(isLoading){
    return(
        <div>..Loading</div>
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
)}