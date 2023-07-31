import Link from 'next/link'
import React from 'react'
import {LuLayoutGrid} from "react-icons/lu"

export default function HomeHeader() {
  return (
    <header className='p-5 text-sm'>
      <div className='flex justify-end items-center space-x-4 '>
        <Link href="https://mail.google.com" className='hover:underline'>
        Gmail</Link>
        <Link href="https://mail.google.com" className='hover:underline'>
        Images</Link>
        <LuLayoutGrid className='bg-transparent hover:bg-gray-200 rounded-fu;;'/>
      <button className='bg-blue-600 text-white rounded-md hover:brightness-105  px-6 py-2 font-medium shadow hover:shadow-md transition duration-150 ease-in-out'>Sign in</button>
      </div>
      
    </header>
  )
}
