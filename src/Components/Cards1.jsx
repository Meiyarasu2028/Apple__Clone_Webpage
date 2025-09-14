const Card1 = () => {
    return (
        <> 
          
                <div className="mt-10  basis-1/3 flex-1"><div >
                    <div
                        style={{
                            backgroundImage:
                                "url(https://www.apple.com/v/airpods-pro/o/images/overview/welcome/hero__b0eal3mn03ua_large_2x.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center top",
                            height: "100vh",
                           
                            
                        }}
                        className="flex flex-col justify-between p-10 text-black"
                    >

                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> AirPods Pro 3</h1>
                        </div>

                        <div>
                            <p className="text-xl tracking-tight">The world's best in-ear.Active Noise Cancellation.</p>
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

export default Card1
