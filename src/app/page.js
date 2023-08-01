import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";


export default function Home() {
  return (
    <>
    {/* Header */}
    <HomeHeader/>

    {/* body */}
    <div className="flex justify-center mt-24">
       <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxnMY2JKny5WzfBxY_vNqrjO29LcAvB4jGBlwqbIRPuRN6AjcP_fpPAO2Ltxi9kw8y8E&usqp=CAU"
    width="300"
    height="100"
    alt="google-logo"
    />
    </div>

    <HomeSearch/>
   

    </>
  )
}
