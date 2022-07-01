export default function Land({imgSrc,title}){
    return(
        <div className=" h-[50vh]  bg-center bg-no-repeat bg-cover overlay" 
        style={{backgroundImage:`url(${imgSrc})`}}>
                <div className=" container container-2 flex items-center justify-center h-full z-[2] relative">
                    <h2 className="text-white text-[30px] font-bold">{title}</h2>
                </div>
        </div>
    )
}