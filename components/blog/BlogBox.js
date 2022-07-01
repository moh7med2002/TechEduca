import Image from "next/image"
import { useRouter } from "next/router"
export default function BlogBox({imgSrc,title,id}){
    const router=useRouter();
    const showMore=(id)=>{
        router.push(`/blog/${id}`);
    }
    return(
        <div className="mt-7">
            <Image src={imgSrc} alt="" width={"600px"} height="340px" className=" rounded-[8px]"/>
            <h3 className="text-head font-bold text-[18px] mt-3">{title}</h3>
            <p className="text-[#686F7A] leading-[120%] pr-5 mt-2">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
            classical, making it over 2000 years old. 
            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.
            </p>
            <button onClick={()=>showMore(id)} className="w-[120px] h-[35px] bg-blue text-[#fff] rounded mt-3 duration-200 hover:bg-yellow">
                Read More</button>
        </div>
    )
}