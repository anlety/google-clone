"use client"
import { useSearchParams, useRouter } from 'next/navigation';
import {GiCrossMark} from 'react-icons/gi';
import {FcSearch} from 'react-icons/fc';
import {FaMicrophoneAlt} from 'react-icons/fa'
import { useState } from 'react';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const searchTerm =searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "")

  function handleSubmit(e){
    e.preventDefault()
    // if there is nothing in the input return
    if(!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`)
  }
  return (
    <form className='flex border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center' onSubmit={handleSubmit}>
      <input className='w-full focus:outline-none' value={term} onChange={(e)=> setTerm(e.target.value)}/>
      <GiCrossMark className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={() => setTerm("")}/>
      <FaMicrophoneAlt className='hidden sm:inline-flex text-red-500 text-4xl pl-4 border-l-2 border-gray-300 mr-3'/>
      <FcSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer' onClick={handleSubmit}/>
    </form>
  )
}
