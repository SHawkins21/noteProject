import Link from "next/link"
import {useSession} from "next-auth/react"; 
import Image from "next/image"



const Header = () => {
    const session = useSession()
  return (
    <div className='flex items-center w-full mb-8 bg-blue-200 rounded-b-xl'>
        <div className='px-6'>
            <p className="text-lg font-bold py-4"> Hello,{session.data?.user.name as string ?? ""}</p>
            <h1 className="italic text-4xl p-4">My Notes</h1>
        </div>

        <div className="">
        <div className="p-4">
          <p><Link 
          className=" bg-blue-600 text-white p-2 rounded-lg"
          href="/note">Note</Link></p>
        </div>
        <div className="p-4"> 
          <p><Link 
          className=" bg-blue-600 text-white p-2 rounded-lg"
          href="/topic/create"> Topic</Link></p>
        </div>
        <div className="p-4"> 
          <p><Link 
          className=" bg-blue-600 text-white p-2 rounded-lg"
          href="/tags/create"> Tags</Link></p>
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