"use client"
import {FcSearch} from 'react-icons/fc';
import {FaMicrophoneAlt} from 'react-icons/fa'
import { useState } from 'react';
import {useRouter} from 'next/navigation'
import Image from 'next/image';

export default function HomeSearch() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  function handleSubmit(e){
    e.preventDefault()
    // if there is no input
    if(!input.trim()) return
    router.push(`/search/web?searchTerm=${input}`)
  }

  async function randomSearch(){
    setLoading(true)
    const response= await fetch("https://random-word-api.herokuapp.com/word").then((res) => res.json()).then((data) => data[0])
    if(!response) return;
    router.push(`/search/web?searchTerm=${response}`)
    setLoading(false)
  }
  return (
    <>
    <form  className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl' onSubmit={handleSubmit} >
      <FcSearch onClick={handleSubmit} className='text-xl text-gray-500 mr-3'/>
      <input onChange={(e)=> setInput(e.target.value)} value={input} type='text' className='flex-grow focus:outline-none'/>
      <FaMicrophoneAlt className='text-lg'/>
    </form>

    {/* buttons */}
    <div className='flex flex-col space-x-2 sm:space-x-0 sm:space-x-4 justify-center sm:flex-row mt-8'>
      <button onClick={handleSubmit} className='btn'>Google Search</button>
      <button  onClick={randomSearch} className='btn flex items-center justify-center disabled:opacity-80' disabled={loading}>
        {loading ? (<img src="spinner.svg" alt="loading" className='h-6 text-center'/>) : ("I am feeling lucky")} 
        </button>
    </div>
    </>
    
  )
}
