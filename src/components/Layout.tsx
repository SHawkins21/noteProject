import React, {type ReactNode} from 'react'
import  Header  from './Header'
 

type LayoutProps = {
    children:ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        <Header/>
         <h1></h1>
        {children}



    </div>
  )
}

export default Layout