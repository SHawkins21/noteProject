import {type NextPage} from 'next'; 
import {useForm, type SubmitHandler} from 'react-hook-form'; 
import {api} from '~/utils/api'
import { useRouter } from 'next/router';
import Link from 'next/link'

type Inputs = {
    title:string, 
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

        <input 
        className='p-4 bg-slate-300 rounded-md'
        {...register("title", {required: true })} /> 
        {errors.title && <span>This field is Required</span>}
        


        <input 
        className='flex p-4 px-3 bg-green-500 rounded-lg'
        
        type="submit"/>
        </form>

    );} 



export default TagsForm 