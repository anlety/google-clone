export const dynamic = "force-dynamic";

import WebSearchResults from "@/components/WebSearchResults"
import Link from "next/link"


export default async function WebSearchPage({searchParams}) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_GOOGLE_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`)
  if(!response.ok){
    console.log(response)
    throw new Error("Something went wrong")
  }
  const data =await response.json()
  const results= data.items
  if(!results){
    return <div className="flex flex-col justify-center items-center mt-6">
      <h1 className="text-3xl mb-4">No result found</h1>
      <p className="text-lg">Try searching something else, go back to the homepage{" "}
        <Link href="/" className="text-red-500">Home</Link>
      </p>
    </div> 
  }
  return <>{results && <WebSearchResults results = {data}/>}
   
    </>
    
  
}
