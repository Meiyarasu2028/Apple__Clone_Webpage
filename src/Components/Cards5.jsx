const Card5 = () => {
    return (
        <>

            <div className="  basis-1/3 flex-1"><div >
                <div
                    style={{
                        backgroundImage:
                            "url(https://www.apple.com/v/ipad-air/ab/images/overview/closer-look/all-colors/slide_1A__fg52jvpudo6e_large_2x.jpg)",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center bottom",
                        height: "100vh",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px "
                    }}
                    className="flex flex-col justify-start p-4 text-white text-center"
                >

                    <div>
                        <h1 className="text-4xl font-bold tracking-tight py-2 text-black mt-4">iPad <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
              bg-clip-text text-transparent"> air</span> </h1>
                        <p className="text-xl tracking-tight text-black">Now Supercharged by the M3 chip.</p>
                        <p className="mt-2 text-gray-400 text-md fond-bold tracking-tight">Available from 19 Sep</p>
                    </div>

                    <div>
                        <div className="flex gap-5 justify-center mt-5 mb-10">
                            <button className="text-md font-medium border text-[#0066cc] border-[#0066cc] bg-transparent py-2 px-4 rounded-3xl hover:bg-[#0066cc] hover:text-white">Learn more</button>
                            <button className="text-md font-medium border border-[#0066cc] bg-[#0066cc] py-2 px-4 rounded-3xl text-white">Pre-order</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card5