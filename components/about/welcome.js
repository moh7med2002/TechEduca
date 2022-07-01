import Image from "next/dist/client/image"
export default function Welcome(){
    return(
        <div className="py-[50px] mt-[50px]">
            <div className=" container container-2 grid lg:grid-cols-2 gap-y-7 gap-x-5 items-center">

                <div>
                    <Image src={'/images/a.png'} alt="" width={"650px"} height="500px"/>
                </div>
                
                <div>
                    <h4 className="font-bold leading-[120%] text-head text-[21px]">
                        Welcome to TechEduca, Enhance your skills with best Online Courses</h4>
                    <p className="leading-[120%] my-5 text-[#686F7A]">
                        You can start and finish one of these popular courses in under a day - for free! Check out the list below. Take the course for free.</p>
                    <div className="flex my-5">
                        <div>
                            <Image src={'/images/fe1.png'} alt="" width={"50px"} height="50px"/>
                        </div>
                        <div className="ml-3">
                            <h6 className="text-h6 font-bold ">400+ Courses</h6>
                            <p className="text-[#686F7A] leading-[120%]">You can start and finish one of these popular courses in under our site</p>
                        </div>
                    </div>
                    <div className="flex my-5">
                        <div>
                            <Image src={'/images/fe2.png'} alt="" width={"50px"} height="50px"/>
                        </div>
                        <div className="ml-2">
                            <h6 className="text-h6 font-bold">lifetime Access</h6>
                            <p className="text-[#686F7A] leading-[120%]">You can start and finish one of these popular courses in under our site</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}