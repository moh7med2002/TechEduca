import {FaUserGraduate,FaGraduationCap,FaCertificate} from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
export default function AwsomeFeatures(){
    const LocalData=[
        {
            id:"1-aws",
            title:"Scholarship Facility",
            text:"one make creepeth, man bearing theira firmament won't great heaven",
            icon:FaGraduationCap
        },
        {
            id:"2-aws",
            title:"Sell Online Course",
            text:"one make creepeth, man bearing theira firmament won't great heaven",
            icon:FaUserGraduate
        },
        {
            id:"3-aws",
            title:"Global Certification",
            text:"one make creepeth, man bearing theira firmament won't great heaven",
            icon:FaCertificate
        }
    ]
    return(
        <div className="py-[60px]">
            <div className="container container-2">
                <h2 className="text-center text-blue text-[44px] font-bold">
                    Awsome Features
                </h2>
                <p className='text-center text-[15px] text-second font-[500]'>
                    Replenish man have thing gathering lights yielding shall you 
                </p>

                <Fade left>
                <div className='mt-[50px] grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6'>
                    {LocalData.map(da=>{
                        return(
                            <div key={da.id} className="bg-[#F9F9FF] rounded py-7 px-5">
                                <da.icon className='text-blue text-[30px]'/>
                                <h4 className='text-semiBlack font-[500] text-[20px] mt-2'>{da.title}</h4>
                                <p className='text-second font-[400] leading-[120%]'>{da.text}</p>
                            </div>
                        )
                    })}
                </div>
                </Fade>
            </div>
        </div>
    )
}