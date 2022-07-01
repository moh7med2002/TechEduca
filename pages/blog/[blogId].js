import { useRouter } from "next/router"
import { useState ,useEffect} from "react";
import { blogsData } from "../../data/blogsData";
import Image from "next/image";
import Head from 'next/head'
export default function BlogClicked(){
    const router=useRouter();
    const {blogId}=router.query;
    const[isFetched,setIsFetched]=useState(false);
    const [fetchedBlog,setFetchedBlog]=useState({});
    useEffect(()=>{
        if(blogsData.find(bl=>bl.id===blogId)){
            setFetchedBlog(blogsData.find(bl=>bl.id===blogId))
            setIsFetched(true);
        }
        else{
            setIsFetched(false);
        }
    });
    return (
        <div className="mt-[70px] py-[50px]">
            <Head>
                <title>Blog {blogId}</title>
            </Head>
            <div className=" container container-2">
                {
                    isFetched&&
                    <div className="w-[600px] max-w-full mx-auto">
                        <div className="text-center">
                            <Image src={fetchedBlog.imgSrc} alt="" width={"600px"} height="340px" className="rounded-[10px]"/>
                        </div>
                        <h3 className="text-head font-bold text-[18px] mt-3">{fetchedBlog.title}</h3>
                        <p className="text-[#686F7A] leading-[120%] mt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="text-[#686F7A] leading-[120%] mt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="text-[#686F7A] leading-[120%] mt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button onClick={()=>router.push('/blog')} className="w-[120px] h-[35px] bg-blue text-[#fff] rounded mt-3 duration-200 hover:bg-yellow">
                            Back</button>
                    </div>
                }
            </div>
        </div>
    )
}