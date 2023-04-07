import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome,AiFillEdit} from 'react-icons/ai' 
import {MdLocalPharmacy} from 'react-icons/md'
import {FaUserLock} from 'react-icons/fa'
import Link from 'next/link'

const Sidebar = () => {
  return (

  <div className='h-10/12 w-2/12 mr-5 bg-white flex flex-col items-center pt-5  mt-2 float-left  border-2'>

  
  <aside className='mt-11 '>
  
  
  <Link href="/admin/">   < MenuItem Icon={AiFillHome} title="Home"/></Link>
     
  <Link href=""> < MenuItem Icon={MdLocalPharmacy} title="Pharamacies"/></Link>
  <Link href=""> < MenuItem Icon={FaUserLock} title="Admins"/></Link>
  
     
  <Link href="">  < MenuItem Icon={AiFillEdit} title="Modify Pharamacy"/></Link>
      
  </aside>
  
      
      </div>
      
  )
}

export default Sidebar