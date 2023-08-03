import Link from 'next/link'
import React from 'react'
import Image from "next/image";

import {FiSettings} from "react-icons/fi"
import {LuLayoutGrid} from "react-icons/lu"
import SearchHeaderOptions from './SearchHeaderOptions';
import SearchBox from './SearchBox';

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href={"/"}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxnMY2JKny5WzfBxY_vNqrjO29LcAvB4jGBlwqbIRPuRN6AjcP_fpPAO2Ltxi9kw8y8E&usqp=CAU" width="120"
    height="100"
    alt="google-logo"/>
        </Link>
        <div className='flex-1'>
          <SearchBox/>
        </div>
        <div className='hidden md:inline-flex space-x-2'>
          <FiSettings className='header-icon'/>
          <LuLayoutGrid className='header-icon'/>
          <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2'>Sign in</button>
        </div>
      </div>
      <SearchHeaderOptions/>
    </header>
  )
}
