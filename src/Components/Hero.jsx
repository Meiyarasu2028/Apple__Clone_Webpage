function Hero() {

    return (
        <>
            <div className="mt-20 bg-gray-50 px-4 py-6 text-center">
                <h1 className="text-6xl font-semibold tracking-tight">iPhone Air</h1>
                <p className="text-3xl mt-3 tracking-tight ">The thinnest iPhone ever.</p>
                <p className="text-3xl tracking-tight ">With the powerof proinside.</p>
                <p className="mt-3 text-gray-500 text-xl tracking-tight">Available from 19 Sep</p>

                <div className="flex gap-5 justify-center mt-5">
                    <button className="text-md font-medium border border-black  bg-transparent py-2 px-4 rounded-3xl hover:bg-[#0066cc] hover:text-white">Learn more</button>
                    <button className="text-md font-medium border  bg-[#0066cc] py-2 px-4 rounded-3xl text-white">Pre-order</button>
                </div>
            </div>

            <header
                style={{
                    backgroundImage: "url(https://www.apple.com/v/iphone-air/a/images/overview/welcome/hero__pkj0eg4w6ki2_large_2x.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    height: "100vh",
                    width: "100%",
                }}>
            </header>

        </>
    )
}

export default Hero