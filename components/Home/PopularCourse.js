import {popularCourse} from '../../data/popularCourse'
import Image from 'next/dist/client/image'
import {FaStarHalfAlt,FaStar} from 'react-icons/fa'
export default function PopularCourses(){

    const Jsx=popularCourse.map(course=>{
        return(
            <div key={course.id} className="bg-[#F9F9FF] w-fit mx-auto">
                <div className=' relative'>
                    <Image src={course.img} alt="" width={"500px"} height="240px"/>
                    <span className='flex items-center justify-center text-white w-[60px] h-[60px] rounded-full bg-blue absolute right-3 bottom-[-30px]'>
                        ${course.salary}</span>
                </div>
                <div className='mt-4 px-4'>
                    <span className='text-[#777] font-[500]'>Update 21/8/21</span>
                    <h4 className='font-bold text-h6 text-[19px]'>{course.name}</h4>
                    <div className='flex items-center mb-7 mt-2'>
                        <ul className='flex items-center gap-[4px] mr-1'>
                            <li><FaStar className='text-[#FFD700]'/></li>
                            <li><FaStar className='text-[#FFD700]'/></li>
                            <li><FaStar className='text-[#FFD700]'/></li>
                            <li><FaStar className='text-[#FFD700]'/></li>
                            <li><FaStarHalfAlt className='text-[#FFD700]'/></li>
                        </ul>
                        <span className='text-span'>({course.numberOfStudent})</span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="py-[50px]">
            <div className=" container container-2">
                <h2 className="text-center text-blue text-[44px] font-bold">
                    Our Popular Courses
                </h2>
                <p className='text-center text-[15px] text-second font-[500]'>
                    Replenish man have thing gathering lights yielding shall you 
                </p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-7 sm:mt-9'>
                    {Jsx}
                </div>
            </div>
        </div>
    )
}