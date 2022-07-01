export default function Footer(){
    return (
        <footer className="py-[50px] bg-[#101C32]">
            <div className=" container container-2">
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-y-7">
                
                <div className="flex gap-x-8  lg:gap-x-10 xl:gap-x-14">
                    <div>
                        <h6 className="text-white font-bold mb-5 text-[18px]">Top Products</h6>
                        <ul>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Manage Reputation</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Power Tools</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Managed Website</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Marketing Service</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-white font-bold mb-5 text-[18px]">Quik Links</h6>
                        <ul>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Jobs</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Brand Assest</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Investor Relations</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Terms of Service</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-x-8 lg:gap-x-10 xl:gap-x-14">
                    <div>
                        <h6 className="text-white font-bold mb-5 text-[18px]">Features</h6>
                        <ul>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Manage Reputation</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Power Tools</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Managed Website</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Marketing Service</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-white font-bold mb-5 text-[18px]">Resourse</h6>
                        <ul>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Guides</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Research</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Experts</li>
                            <li className="text-[#7b8381] mb-3 cursor-pointer duration-200 hover:text-[#f1f0f5]">Marketing Service</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h6 className="text-white font-bold mb-5 text-[18px]">Newsletter</h6>
                    <p  className="text-[#7b8381] mb-3">You can trust us. we only send promo offers,</p>
                    <form action="#" method="POST" onSubmit={e=>e.preventDefault()} className="flex">
                        <input type={"email"} placeholder="Your Email Address" 
                        className="w-[220px] text-[#fff] bg-[#334F6C] border-none outline-none py-[15px] px-[12px]"/>
                        <button type="submit" className="rounded-[5px] h-[54px] bg-yellow text-[#fff] w-[100px] ml-2 duration-200 
                        hover:bg-[#fff] hover:text-blue font-semibold text-[16px]">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            </div>
        </footer>
    )
}