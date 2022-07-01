import Image from 'next/dist/client/image'
import {FaStarHalfAlt,FaStar} from 'react-icons/fa'
import {useRouter} from 'next/router'


export default function CourseBox({id,img,name,rate,salary,numberOfStudent}){
    const router=useRouter();
    return(
        <div key={id+"hhh"} className="bg-[#F9F9FF] w-fit mx-auto cursor-pointer" onClick={()=>router.push(`/courses/${id}`)}>
                <div className=' relative'>
                    <Image src={img} alt="" width={"500px"} height="240px"/>
                    <span className='flex items-center justify-center text-white w-[60px] h-[60px] rounded-full bg-blue absolute right-3 bottom-[-30px]'>
                        ${salary}</span>
                </div>
                <div className='mt-4 px-4'>
                    <span className='text-[#777] font-[500]'>Update 21/8/21</span>
                    <h4 className='font-bold text-h6 text-[19px]'>{name}</h4>
                    <div className='flex items-center mb-7 mt-2'>
                        <ul className='flex items-center gap-[4px] mr-1'>
                            <li><FaStar className='text-[#FFD700]'/></li>
                            <li><FaStar className='text-[#FFD700]'/></li>
                            <li><FaStar className='text-[#FFD700]'/></li>
                            <li><FaStar className='text-[#FFD700]'/></li>
                            <li><FaStarHalfAlt className='text-[#FFD700]'/></li>
                        </ul>
                        <span className='text-span'>({numberOfStudent})</span>
                    </div>
                </div>
            </div>
    )
}