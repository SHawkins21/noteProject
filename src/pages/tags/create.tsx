import {NextPage} from 'next'

import TagsForm from '~/components/tags/TagsForm'


const Create = () => {

    return ( 
        <div className=' italic'> Create Tag 

        <div>
            <TagsForm/>
        </div>
        </div>

    )
}

export default Create 