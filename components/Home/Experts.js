import Image from "next/image"
import {FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
export default function Experts(){
    const Data=[
        {
            id:"1-kk",
            name:"Ema Irink",
            jop:"Python & Algorithm Expert",
            img:"/images/pro1.webp"
        },
        {
            id:"2-kk",
            name:"Jason",
            jop:"Data Analysis Expert",
            img:"/images/pro2.webp"
        },
        {
            id:"3-kk",
            name:"Maalik",
            jop:"Full Stack Developer",
            img:"/images/pro3.webp"
        },
        {
            id:"4-kk",
            name:"Jennifer",
            jop:"Design Expert",
            img:"/images/pro4.webp"
        }
    ];

    const DataJsx=Data.map(da=>{
        return (
            <div key={da.id} className="bg-[#fafaf1] text-center py-7">
                <div>
                    <Image src={da.img} alt="" width={"160px"} height="160px"/>
                </div>
                <h5 className="text-blue font-bold text-[18px]">{da.name}</h5>
                <p>{da.jop}</p>
                <ul className="mt-4 flex justify-center gap-x-2">
                    <li className="border border-[#151564] py-[10px] px-[13px] cursor-pointer duration-200 hover:bg-[#151564] group">
                        <FaFacebookF className=" duration-200 group-hover:text-[#fff]"/></li>
                    <li className="border border-[#151564] py-[10px] px-[13px] cursor-pointer duration-200 hover:bg-[#151564] group">
                        <FaInstagram className=" duration-200 group-hover:text-[#fff]"/></li>
                    <li className="border border-[#151564] py-[10px] px-[13px] cursor-pointer duration-200 hover:bg-[#151564] group">
                        <FaLinkedinIn className=" duration-200 group-hover:text-[#fff]"/></li>
                </ul>
            </div>
        )
    })
    return(
        <div className="py-[50px]">
            <div className="container container-2">
                <h2 className="text-center text-blue text-[44px] font-bold">
                    Community Experts
                </h2>
                <p className='text-center text-[15px] text-second font-[500]'>
                    Replenish man have thing gathering lights yielding shall you 
                </p>

                <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3] lg:grid-cols-4 gap-5">
                    {DataJsx}
                </div>
            </div>
        </div>
    )
}