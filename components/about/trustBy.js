import Image from 'next/image'
export default function TrustBy(){
    const Data=[
        {
            id:"1-tr",
            img:"/images/trust (1).png"
        },
        {
            id:"2-tr",
            img:"/images/trust (2).png"
        },
        {
            id:"3-tr",
            img:"/images/trust (3).png"
        },
        {
            id:"4-tr",
            img:"/images/trust (4).png"
        },
        {
            id:"5-tr",
            img:"/images/trust (5).png"
        },
        {
            id:"6-tr",
            img:"/images/trust (6).png"
        }
    ]
    return(
        <div className="py-[60px]">
            <div className="container container-2">
                <h2 className="text-center text-blue text-[44px] font-bold">
                    Trusted By
                </h2>
                <p className='text-center text-[15px] text-second font-[500]'>
                    Replenish man have thing gathering lights yielding shall you 
                </p>

                <div className='mt-11 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-6'>
                    {
                        Data.map(da=>{
                            return <div key={da.id} className=" text-center">
                                <Image src={da.img} alt="" width={"80px"} height="70px"/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )}