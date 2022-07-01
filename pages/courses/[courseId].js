import Land from "../../components/assest/Land";
import {popularCourse} from '../../data/popularCourse';
import { useEffect, useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router"
import {HiOutlineVideoCamera} from 'react-icons/hi';
import {FaRegNewspaper,FaCloudDownloadAlt,FaInfinity,FaMobileAlt,FaTrophy} from 'react-icons/fa'
import {FiPaperclip} from 'react-icons/fi'
import Head from 'next/head'


export default function SelectCourse(){
    const router=useRouter();
    const {courseId}=router.query;
    const[isFetched,setIsFetched]=useState(false);
    const [fetchedBlog,setFetchedBlog]=useState({});
    useEffect(()=>{
        if(popularCourse.find(bl=>bl.id===courseId)){
            setFetchedBlog(popularCourse.find(c=>c.id===courseId))
            setIsFetched(true);
        }
        else{
            setIsFetched(false);
        }
    });
    return(
        <div className="mt-[70px]">
            <Head>
                <title>Course {courseId}</title>
            </Head>
            <Land imgSrc={'/images/back1.jpg'} title={"Enroll Our Popular Courses And Skill Up"}/>
            <div className="my-[50px] container container-2">
                {
                    isFetched&&
                    <div className="flex justify-between flex-wrap gap-y-8">
                        
                        <div className="w-[100%] lg:w-[58%] xl:w-[65%]">
                            <div>
                                <Image src={fetchedBlog.img} alt="" width={"800px"} height="440px" className="rounded-[10px]"/>
                            </div>
                            
                            <div className="flex justify-between mt-3 w-[800px] max-w-full">
                                <div>
                                    <h4 className='font-bold text-h6 text-[21px] mt-2'>{fetchedBlog.name}</h4>
                                    <p  className="text-[#686F7A] leading-[120%] mt-2 xl:pr-8">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s 
                                        standard dummy text ever.</p>
                                </div>
                                <div>
                                    <span className="flex items-center justify-center w-[100px] h-[50px] bg-[#654ce41a] rounded-md text-[#654ce4] font-bold text-[22px]">
                                        ${fetchedBlog.salary}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-[100%] lg:w-[40%] xl:w-[30%]">
                            <div className="w-[300px]  enroll rounded px-3 py-5 max-w-full">
                                <h5 className='font-bold text-h6 text-[18px] mb-4'>This course includes:</h5>
                                <ul>
                                    <li className="flex items-center gap-3">
                                        <HiOutlineVideoCamera className="text-[#654ce4]"/>
                                        <span className="text-[#686F7A]">52 hours Video</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaRegNewspaper className="text-[#654ce4]"/>
                                        <span className="text-[#686F7A]">75 articles</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaCloudDownloadAlt className="text-[#654ce4]"/>
                                        <span className="text-[#686F7A]">Download resources</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaInfinity className="text-[#654ce4]"/>
                                        <span className="text-[#686F7A]">Full liftime access</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaMobileAlt className="text-[#654ce4]"/>
                                        <span className="text-[#686F7A]">Access on mobile and TV</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <HiOutlineVideoCamera className="text-[#654ce4]"/>
                                        <span className="text-[#686F7A]">52 hours Video</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <HiOutlineVideoCamera className="text-[#654ce4]"/>
                                        <span className="text-[#686F7A]">52 hours Video</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FiPaperclip className="text-[#654ce4]"/>
                                        <span className="text-[#686F7A]">Assignments</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaTrophy className="text-[#654ce4]"/>
                                        <span className="text-[#686F7A]">Certificate of completion</span>
                                    </li>
                                </ul>
                                <span className="block mt-3 text-[#654ce4] underline cursor-pointer font-bold">Enroll Course</span>
                            </div>
                        </div>

                    </div>
                }
            </div>
        </div>
    )
}