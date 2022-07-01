export default function Register(){
    return(
        <div className="my-[50px] py-[50px] bg-center bg-cover bg-no-repeat h-[200px] overlay min-h-[80vh]" 
        style={{backgroundImage:`url(/images/signup.jpg)`}}>
            <div className="container container-2 relative z-[5] h-[100%] flex justify-between items-center flex-col sm:flex-row gap-y-7">
                

                <div>
                    <p className="text-white text-[15px] mb-[5px]">Get 100 Online Courses For Free</p>
                    <h3 className="text-white text-[34px] font-bold mb-5">Register To Get It</h3>
                    <div className="text-white flex flex-wrap gap-x-5 gap-y-6">
                        <div className="w-[90px] h-[70px] pt-2 rounded-[6px] backdrop-blur-md bg-white/30">
                            <span className="block text-center">18</span>
                            <span className="block text-center">Days</span>
                        </div>
                        <div className="w-[90px] h-[70px] pt-2 rounded-[6px] backdrop-blur-md bg-white/30">
                            <span className="block text-center">23</span>
                            <span className="block text-center">Hours</span>
                        </div>
                        <div className="w-[90px] h-[70px] pt-2 rounded-[6px] backdrop-blur-md bg-white/30">
                            <span className="block text-center">06</span>
                            <span className="block text-center">Mins</span>
                        </div>
                        <div className="w-[90px]  h-[70px] pt-2 rounded-[6px] backdrop-blur-md bg-white/30">
                            <span className="block text-center">58</span>
                            <span className="block text-center">Secs</span>
                        </div>
                    </div>
                </div>

                <div className="">
                    <form action="#" method="POST" onSubmit={e=>e.preventDefault()}
                     className="w-[300px] px-5 py-6 bg-white rounded-[10px]">
                        <h4 className="font-bold text-[18px]">Create Free Account Now!</h4>
                        <input type={"text"} placeholder="NAME" className="block w-full border border-blue outline-none py-[5px] px-[3px] my-4"/>
                        <input type={"email"} placeholder="Email Address" className="block w-full border border-blue outline-none py-[5px] px-[3px] mb-4"/>
                        <input type={"text"} placeholder="Phone Number" className="block w-full border border-blue outline-none py-[5px] px-[3px] mb-4"/>
                        <button type="submit" className="w-[150px] bg-yellow text-white h-[35px] rounded-[4px] duration-200 hover:bg-opacity-[0.85]">
                            Visit Courses</button>
                    </form>
                </div>
            </div>
        </div>
    )
}