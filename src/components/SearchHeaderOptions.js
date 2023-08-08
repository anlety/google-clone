"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {FcSearch} from 'react-icons/fc';
import {BsFillCameraFill} from 'react-icons/bs'

export default function SearchHeaderOptions() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm")
  function selectTab(tab){
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
  }
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm ">
      <div onClick={()=> selectTab("All")} className={`flex items-center space-x-1  border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "!text-blue-600 !border-blue-600"}`}>
        <FcSearch className='text-md '/>
        <p>All</p>
      </div>
      <div onClick={()=> selectTab("Images")} className={`flex items-center space-x-1  border-b-4 border-transparent active:text-red-500 cursor-pointer pb-3 px-2 ${pathname === "/search/image" && "!text-red-600 !border-red-600"}`}>
        
        <BsFillCameraFill/>
        <p>Images</p>
      </div>
    </div>
  )
}
