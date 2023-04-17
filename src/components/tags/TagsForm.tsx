import {type NextPage} from 'next'; 
import {useForm, type SubmitHandler} from 'react-hook-form'; 
import {api} from '~/utils/api'
import { useRouter } from 'next/router';

type Inputs = {
    title:string, 
    status:[]
}; 

const TagsForm:NextPage = () => {

    const router = useRouter()
    const mutation = api.tags.create.useMutation(

        {
            onSuccess: async(data, variables, context) => {

                await router.push('/tags')
                console.log(data, "Tag Created");
            },
        }


    )

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>(); 
    const onSubmit: SubmitHandler<Inputs> = (data) => {
//tgdt "TaG DaTa"
        const tgdt = {
            title:data.title
        }
        mutation.mutate(tgdt)

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

        <input {...register("title", {required: true })} /> 
        {errors.title && <span>This field is Required</span>}
        


        <input type="submit"/>
        </form>

    );} 



export default TagsForm 