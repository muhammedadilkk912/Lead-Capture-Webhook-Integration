import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { MdPersonAddAlt } from "react-icons/md";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    // const url=
    <div className='bg-white border-b fixed w-full left-0 top-0 z-40 border-gray-300 flex items-center justify-between py-2 px-3 sm:px-5'>
        <div className='flex items-center gap-2'>
            <div className='bg-blue-600 p-2 rounded-full justify-center items-center'>
                <MdOutlineDashboard size={20} className='text-white font-bold' />


            </div>
            <span className='text-xl hidden sm:inline font-semibold'>LeadFlow</span>

        </div>
        <div>
            <div className='flex gap-1 sm:gap-5'>
            <Link to='/'>
                <div className='flex cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md text-gray-400 items-center justify-center gap-1'>
                    <MdOutlineDashboard size={20} className=' font-bold' /> 
                    <span className='text-md hidden sm:inline font-semibold'>Home</span>
                </div></Link>
                <Link to="/leads">
                <div className='flex cursor-pointer rounded-md hover:bg-gray-100 py-1 px-2 text-gray-400 items-center justify-center gap-1'>
                    
                    <GoPeople  size={20} className=' font-bold' /> 
                    <span className='text-md hidden sm:inline font-semibold'>Leads</span>
                </div></Link>
                <Link to='/addlead'>
                
                <div className='flex cursor-pointer rounded-md hover:bg-gray-100 py-1 px-2 text-gray-400 items-center justify-center gap-1'>
                    <MdPersonAddAlt size={20} className=' font-bold' /> 
                    <span className='text-md hidden sm:inline font-semibold'>Add Lead</span>
                </div>
                </Link>


            </div>
           

        </div>
      
    </div>
  )
}

export default Header
