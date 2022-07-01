import Link from "next/link";

export default function HomeLand(){
    return(
        <div className=" h-[90vh] mt-[70px] bg-center bg-no-repeat bg-cover overlay" 
        style={{backgroundImage:'url(/images/back.jpg)'}}>
            <div className="container containe-2  h-full flex justify-center items-center">

                <div className="relative  z-10">
                    <h2 className="text-white font-bold text-center text-[30px] md:text-[38px] lg:text-[44px] leading-[120%]">
                        Enhance Your Future With TechEduca
                    </h2>
                    <p className="text-white font-medium lg:w-[80%] mx-auto text-center mt-3">
                        There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don&rsquo;t look even slightly believable.</p>

                    <div className="flex items-center justify-center gap-x-2 gap-y-4 mt-4">
                        <div className="w-[120px] h-[40px] bg-blue text-white rounded-md flex items-center justify-center font-medium cursor-pointer
                        duration-200 hover:text-blue hover:bg-white">
                            <Link href={"#"}>Learn More</Link>
                        </div>
                        <div className="w-[120px] h-[40px] bg-yellow text-white rounded-md flex items-center justify-center font-medium cursor-pointer2
                        duration-200 hover:text-blue hover:bg-white">
                            <Link href={"#"}>Visit Courses</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}