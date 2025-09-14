import { FaApple } from "react-icons/fa"

const Card2 = () => {
    return (
        <>
            <div className="mt-10 basis-1/3 flex-1  bg-gray-100 text-center">
                <div>
                    <div
                        style={{
                            backgroundImage:
                                "url(https://www.apple.com/v/apple-watch-series-11/a/images/overview/highlights/highlights_glass_endframe__f39nueq3bfiy_large_2x.jpg)",
                            backgroundSize: "contain",
                            backgroundPosition: "center top",
                            backgroundRepeat:"no-repeat",
                            height: "100vh",
                            
                           
                        }}
                        className="flex flex-col justify-end p-10 text-black"
                    >
                        
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight py-2 flex justify-center "><FaApple/> Watch  <span className="text-4xl font-medium">SERIES 11</span></h1>
                        </div>

                        <div>
                            <p className="text-xl tracking-tight">The ultimate watch for a healthy life.</p>
                            <p className="mt-2 text-gray-500 text-md fond-bold tracking-tight">Available from 19 Sep</p>

                            <div className="flex gap-5 justify-center mt-5">
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

export default Card2