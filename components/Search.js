import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BiFilter} from 'react-icons/bi'
function Search() {
  return (
    <div className='py-4 flex items-center justify-between mx-6'>
        {/* Search Input With Icon */}
        <div className='flex items-center bg-primaryColor space-x-1 px-2 py-1 rounded-lg'>
            <CiSearch  className='cursor-pointer'/>
            <input type="text" placeholder='Search or start new chat' className='bg-primaryColor outline-0 ring-0 text-sm' />
        </div>
        {/* Filter */}
        <div>
            <BiFilter size={20}  className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default Search