import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { MdPersonAddAlt } from "react-icons/md";
import { Link,NavLink } from 'react-router-dom';



const Header = () => {
  return (
    // const url=
    <div className='bg-white border-b fixed w-full left-0 top-0 z-40 border-gray-300 flex items-center justify-between py-2 px-3 sm:px-5'>
        <Link to='/'>
        <div className='flex items-center gap-2'>
            <div className='bg-blue-600 p-2 rounded-full justify-center items-center'>
                <MdOutlineDashboard size={20} className='text-white font-bold' />


            </div>
            <span className='text-xl hidden sm:inline font-semibold'>LeadFlow</span>

        </div></Link>


        <div>
            <div className='flex gap-1 sm:gap-5'>
           <NavLink
          to="/"
          className={({ isActive }) =>
            `flex cursor-pointer py-1 px-2 rounded-md items-center justify-center gap-1  transition
             ${isActive ? "text-blue-500   font-semibold bg-blue-100" : "text-gray-400 hover:bg-gray-100"}`
          }
        >  
  

                    <MdOutlineDashboard size={20} className=' font-bold' /> 
                    <span className=' hidden sm:inline font-semibold'>Home</span>
                </NavLink>

                <NavLink
          to="/leads"
          className={({ isActive }) =>
            `flex cursor-pointer py-1 px-2 rounded-md items-center  gap-1  transition
             ${isActive ? "text-blue-500 bg-blue-100 font-semibold" : "text-gray-400 hover:bg-gray-100"}`
          }
        >
                
                    
                    <GoPeople  size={20} className=' font-bold' /> 
                    <span className=' hidden sm:inline font-semibold'>Leads</span>
                </NavLink>

               <NavLink
  to="/addlead"
  className={({ isActive }) =>
    `flex py-1 px-2 rounded-md items-center gap-1 transition
     ${isActive 
       ? "text-blue-600 bg-blue-100 font-semibold" 
       : "text-gray-400 hover:bg-gray-100"}`
  }
>
  <MdPersonAddAlt size={20} />
  <span className="hidden sm:inline font-semibold">
    Add Lead
  </span>
</NavLink>



            </div>
           

        </div>
      
    </div>
  )
}

export default Header
