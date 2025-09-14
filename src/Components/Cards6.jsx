const Card6 = () => {
    return (
        <>

            <div className="basis-1/3 flex-1 bg-gray-100"><div >
                <div
                    style={{
                        backgroundImage:
                            "url(https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphones-value-tradein-202509_GEO_EMEA?wid=524&hei=708&fmt=png-alpha&.v=aHBjaGFSWjRFaHlmSUNGdm1BMTBlbkRldG1TYUdFcGJyblRTblc1K0hBZ2YxT3JMVHpFczE2QlJDdmoxalZrclpnb0Z1U2N6bjVHcFNlU2tKOUZMYWpxVHNpczhOczRPYm14MWpMUkc2d2doeEU3VndvaUNRWG5OL2pmemlrd2Q)",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center ",
                        height: "100vh",


                    }}
                    className="flex flex-col justify-end p-10 text-black text-center"
                >
                    <div className="bg-gray-100/40 p-8 max-w-full backdrop:blur-md">
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">AirPods Pro 3</h1>
                        </div>

                        <div>
                            <p className="text-xl tracking-tight bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-500
              bg-clip-text text-transparent">The world's best in-ear.Active Noise Cancellation.</p>
                            <p className="mt-2 text-gray-500 text-md fond-bold tracking-tight">Available from 19 Sep</p>

                            <div className="flex gap-5 justify-center mt-5">
                                <button className="text-md font-medium border border-black bg-transparent py-2 px-4 rounded-3xl hover:bg-[#0066cc] hover:text-white">Learn more</button>
                                <button className="text-md font-medium border  bg-[#0066cc] py-2 px-4 rounded-3xl text-white">Pre-order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card6