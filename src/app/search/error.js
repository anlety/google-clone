"use client"

import { useEffect } from "react"

export default function Error({error, reset}) {
  useEffect(()=> {
    console.log(error)
  }, [error])
  return (
    <div className="flex flex-col justify-center items-center">
    <h1 className="">Something went wrong, </h1>
    <button onClick={()=> reset()} className="text-blue-500">Try again</button>
    </div>
  )
}
