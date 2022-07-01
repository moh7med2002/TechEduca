import BlogBox from "./BlogBox"
export default function Blogs(){
    const Data=[
        {
            id:"1-bl",
            imgSrc:"/images/b1.jpg",
            title:"Learn Web Development In The Easiest Way",
        },
        {
            id:"2-bl",
            imgSrc:"/images/b2.jpg",
            title:"Learn Web Development In The Easiest Way",
        },
        {
            id:"3-bl",
            imgSrc:"/images/b3.jpg",
            title:"Learn Web Development In The Easiest Way",
        },
        {
            id:"4-bl",
            imgSrc:"/images/b4.png",
            title:"Learn Web Development In The Easiest Way",
        }
    ]
    return (
        <div className="py-[50px]">
            <div className=" container container-2 flex justify-between flex-wrap">
                <div className="md:w-[62%] xl:w-[65%]">
                {
                    Data.map(da=>{
                        return <BlogBox key={da.id} {...da}/>
                    })
                }
                </div>
                <div className="hidden md:block md:lg:w-[35%] xl:w-[30%]">
                    <h3 className="font-bold text-[22px] mb-3">Category</h3>
                    <ul>
                        <li className="text-[#686F7A] cursor-pointer border-y border-[#686F7A] py-1">Web Development</li>
                        <li className="text-[#686F7A] cursor-pointer border-b border-[#686F7A] py-1">Web Design</li>
                        <li className="text-[#686F7A] cursor-pointer border-b border-[#686F7A] py-1">App Development</li>
                        <li className="text-[#686F7A] cursor-pointer border-b border-[#686F7A] py-1">Frontend Web</li>
                        <li className="text-[#686F7A] cursor-pointer border-b border-[#686F7A] py-1">Python Programming</li>
                        <li className="text-[#686F7A] cursor-pointer border-b border-[#686F7A] py-1">Javascript Hacks</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}