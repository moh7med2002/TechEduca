import Image from "next/image"
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useState } from "react"
export default function Navbar(){
    const router=useRouter();
    const [isShow,setIsShow]=useState(false);
    return(
        <div className="w-full h-[70px] bg-[#fff] shadow fixed top-0 z-50">
            <div className="container mx-auto container-2 flex items-center justify-between h-full">
                <div className="">
                    <Image src={'/images/logo.svg'} alt="" width={"200px"} height={"50px"}/>
                </div>

                <div className={`lg:flex lg:items-center lg:justify-end lg:relative absolute lg:top-0 top-[70px] left-0 lg:bg-transparent bg-[#FFFFFF] lg:shadow-none shadow w-[100%]
                ${isShow?"lg:flex block":"hidden"}`}>

                    <ul className="lg:flex lg:items-center lg:justify-between">
                        <li className={`text-blue font-semibold text-lg lg:mr-4 duration-200 hover:text-yellow lg:my-0 my-2 lg:ml-0 ml-3 
                        ${router.pathname==='/'&&"text-yellow"}`}>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className={`text-blue font-semibold text-lg lg:mr-4 duration-200 hover:text-yellow lg:my-0 my-2 lg:ml-0 ml-3 
                        ${router.pathname==='/about'&&"text-yellow"}`}>
                            <Link href={'/about'}>About</Link>
                        </li>
                        <li className={`text-blue font-semibold text-lg lg:mr-4 duration-200 hover:text-yellow lg:my-0 my-2 lg:ml-0 ml-3 
                        ${router.pathname.includes('/blog')&&"text-yellow"}`}>
                            <Link href={'/blog'}>Blog</Link>
                        </li>
                        <li  className={`text-blue font-semibold text-lg lg:mr-4 duration-200 hover:text-yellow lg:my-0 my-2 lg:ml-0 ml-3 
                        ${router.pathname.includes('/courses')&&"text-yellow"}`}>
                            <Link href={'/courses'}>Courses</Link>
                        </li>
                        <li   className={`text-blue font-semibold text-lg lg:mr-4 duration-200 hover:text-yellow lg:my-0 my-2 lg:ml-0 ml-3 
                        ${router.pathname==='/contact'&&"text-yellow"}`}>
                            <Link href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                    <div className="w-[120px] h-[40px] border-[2px] border-blue rounded flex items-center justify-center text-blue duration-200
                    hover:text-black font-medium  lg:m-0 ml-3 mt-2 mb-5">
                        <Link href={'#'}>Join For Free</Link>
                    </div>
                </div>

                <div className="cursor-pointer lg:hidden" onClick={()=>setIsShow(!isShow)}>
                    <Image src={'/images/menu.png'} alt="menu image" width={"40px"} height="30px"/>
                </div>
            </div>
        </div>
    )
}