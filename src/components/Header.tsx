import Link from "next/link"
import {useSession} from "next-auth/react"; 
import Image from "next/image"



const Header = () => {
    const session = useSession()
  return (
    <div className='flex items-center w-full mb-8'>
        <div className='px-6'>
            <p className="text-xs"> Hello,{session.data?.user.name}</p>
            <h1 className="text-4xl">My Notes</h1>
        </div>
        <div className="ml-auto px-6">
            
            <Image
            className='rounded-full'
            height={40}
            width={40}
            src={session.data?.user.image as string}
            alt="Avatar"
            />
            
        </div>
    </div>
  )
}

export default Header