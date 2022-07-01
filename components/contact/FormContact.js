export default function FormContact(){
    return(
        <div className="bg-[#F9F9FF] px-5 py-7">
            <h4  className='font-bold text-[#2c234d] text-[22px]'>Lets Connect</h4>
            <p className="text-[#686875] leading-[120%] mt-2 font-[500]">
                Integer at lorem eget diam facilisis lacinia ac id massa</p>
            <form action="" onSubmit={e=>e.preventDefault()} className="mt-7">
                <div className="flex justify-between flex-wrap">
                    <input type={"text"} placeholder="Your Name" name="name" className=" inline-block w-[100%] sm:w-[49%] h-[40px] rounded px-3 py-2 outline-none my-3"/>
                    <input type={"text"} placeholder="Your Email" name="email" className="inline-block w-[100%] sm:w-[49%] h-[40px] rounded  px-3 py-2 outline-none my-3"/>
                </div>
                <input type={"text"} placeholder="Subject" name="subject"  className="inline-block w-[100%] h-[40px] rounded  px-3 py-2 outline-none my-3"/>
                <textarea name="message" placeholder="How can we help?" className="inline-block w-[100%] h-[200px] rounded  px-3 py-2 outline-none my-3"/>
                <button type="submit"  className="w-[120px] h-[35px] bg-blue text-[#fff] rounded mt-3 duration-200 hover:bg-yellow">
                    Send Message</button>
            </form>
        </div>
    )
}