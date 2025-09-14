const Card4 = () => {
    return (
        <> 
          
                <div className="basis-full md:basis-1/3 flex-1 bg-black"><div >
                    <div
                        style={{
                            backgroundImage:
                                "url(https://www.apple.com/in/apple-watch-ultra-3/images/overview/welcome/hero_endframe__e4ls9pihykya_large_2x.jpg)",
                            backgroundSize: "contain",
                            backgroundRepeat:"no-repeat",
                            backgroundPosition: "center bottom",
                            height: "100vh",
                            
                        
                            
                        }}
                        className="flex flex-col justify-between p-4 text-white text-center"
                    >

                        <div>
                            <h1 className="text-4xl font-bold tracking-tight py-2 ">WATCH <span className="text-4xl font-medium"> ULTRA 3</span></h1>
                            <p className="text-xl tracking-tight">Personal beast.</p>
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

export default Card4