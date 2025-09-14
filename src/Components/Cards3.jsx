import { FaApple } from "react-icons/fa"

const Card3 = () => {
    return (
        <> 
          
                <div className="basis-full md:basis-1/3 flex-1"><div >
                    <div
                        style={{
                            backgroundImage:
                                "url(https://www.apple.com/in/apple-watch-se-3/images/overview/welcome/hero_startframe__c03sf8dwd1si_large_2x.jpg)",
                            backgroundSize: "contain",
                            backgroundRepeat:"no-repeat",
                            backgroundPosition: "center top",
                            height: "100vh",
                            boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" 
                            
                        }}
                        className="flex flex-col justify-end p-10 text-black"
                    >

                        <div>
                            <h1 className="text-4xl font-bold tracking-tight py-2 flex justify-center "><FaApple/>Watch<span className="text-4xl font-medium">SE 3</span></h1>
                        </div>

                        <div>
                            <p className="text-xl tracking-tight">The world's best in-ear.Active Noise Cancellation.</p>
                            <p className="mt-2 text-gray-500 text-md fond-bold tracking-tight">Available from 19 Sep</p>

                            <div className="flex gap-5 justify-center mt-5 mb-5">
                                <button className="text-md font-medium border border-black bg-transparent py-2 px-4 rounded-3xl hover:bg-[#0066cc] hover:text-white">Learn more</button>
                                <button className="text-md font-medium border  bg-[#0066cc] py-2 px-4 rounded-3xl text-white">Pre-order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card3