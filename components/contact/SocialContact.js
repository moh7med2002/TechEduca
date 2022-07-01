import {FaHome,FaPhoneAlt,FaEnvelopeOpenText,FaFacebookF,FaInstagram,FaLinkedinIn,FaBitcoin} from 'react-icons/fa'

export default function SocialContact(){
    return (
        <div>
            <div className='pb-5'>
                <h3 className='font-bold text-[#2c234d] text-[28px]'>Get in touch</h3>
                <p className="text-[#686875] leading-[120%] mt-2">Looking for help? Fill the form and start a new adventure.</p>
            </div>
            <hr className='mb-5'/>

            <div className='my-6'>
                <h6 className='font-bold text-[#2c234d] text-[16px]'>Headquaters</h6>
                <div className='mt-3 flex items-cestartnter gap-x-3'>
                    <FaHome className='text-[16px] text-[#5838fc]'/>
                    <p className="text-[#686875] leading-[120%] text-[15px] font-[500]">744 New York Ave, Brooklny, Kings, New York 10224</p>
                </div>
            </div>

            <div className='my-6'>
                <h6 className='font-bold text-[#2c234d] text-[16px]'>Phone</h6>
                <div className='mt-3 flex items-start gap-x-3'>
                    <FaPhoneAlt className='text-[16px] text-[#5838fc]'/>
                    <p className="text-[#686875] leading-[120%] text-[15px] font-[500]">(+777) 111 222 333<br/> (+777) 111 222 333</p>
                </div>
            </div>

            <div className='my-6'>
                <h6 className='font-bold text-[#2c234d] text-[16px]'>Support</h6>
                <div className='mt-3 flex items-start gap-x-3'>
                    <FaEnvelopeOpenText className='text-[16px] text-[#5838fc]'/>
                    <p className="text-[#686875] leading-[120%] text-[15px] font-[500]">techeduca@support.com <br/> help@educa.com</p>
                </div>
            </div>

            <div>
            <h6 className='font-bold text-h6 text-[16px]'>Follow Us</h6>
            <ul className="mt-4 flex gap-x-2">
                <li className="border border-[#151564] py-[10px] px-[10px] cursor-pointer duration-200 hover:bg-[#151564] group">
                        <FaFacebookF className=" duration-200 group-hover:text-[#fff]"/></li>
                <li className="border border-[#151564] py-[10px] px-[10px] cursor-pointer duration-200 hover:bg-[#151564] group">
                        <FaInstagram className=" duration-200 group-hover:text-[#fff]"/></li>
                <li className="border border-[#151564] py-[10px] px-[10px] cursor-pointer duration-200 hover:bg-[#151564] group">
                        <FaLinkedinIn className=" duration-200 group-hover:text-[#fff]"/></li>
                <li className="border border-[#151564] py-[10px] px-[10px] cursor-pointer duration-200 hover:bg-[#151564] group">
                        <FaBitcoin className=" duration-200 group-hover:text-[#fff]"/></li>
                </ul>
            </div>
        </div>
    )
}