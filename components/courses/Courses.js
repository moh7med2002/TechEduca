import {popularCourse} from '../../data/popularCourse'
import CourseBox from './courseBox'

export default function Courses(){
    return(
        <div className="py-[50px]">
            <div className=" container container-2">
                <h2 className="text-center text-blue text-[44px] font-bold">
                    Our Popular Courses
                </h2>
                <p className='text-center text-[15px] text-second font-[500]'>
                    Replenish man have thing gathering lights yielding shall you 
                </p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-7 sm:mt-9'>
                    {
                        popularCourse.map(course=>{
                            return <CourseBox {...course} key={course.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}