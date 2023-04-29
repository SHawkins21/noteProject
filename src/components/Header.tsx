import Link from "next/link"
import {useSession} from "next-auth/react"; 
import Image from "next/image"



const Header = () => {
    const session = useSession()
  return (
    <div className='flex items-center w-full mb-8 bg-gradient-to-r from-pink-200 to-amber-500 rounded-b-xl'>
        <div className='px-6'>
            <p className="text-lg italic font-bold text-white py-4"> Hello,{session.data?.user.name as string ?? ""}</p>
            <h1 className="italic text-4xl p-4">My Notes</h1>
        </div>
        <div className="flex justify-end w-full ">
        <div className="flex space-x-2">
        <div className="p-4 bg-blue-200 rounded-full">
          <p><Link href="/note">Note</Link></p>
        </div>
        <div className="p-4 bg-blue-300 rounded-full"> 
          <p><Link href="/topic/create"> Topic</Link></p>
        </div>
        <div className="p-4 bg-blue-400 rounded-full "> 
          <p><Link href="/tags/create"> Tags</Link></p>
        </div>
        </div>
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