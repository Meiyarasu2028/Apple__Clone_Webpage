function SubHero() {

    return (
        <>
            <div className="bg-gray-50 px-4 py-6 text-center">
                <h1 className="text-6xl font-semibold tracking-tight">iPhone Air</h1>
                <p className="text-3xl mt-3 tracking-tight ">Magichromatic..</p>
                <p className="mt-3 text-gray-500 text-xl tracking-tight">Available from 19 Sep</p>

                <div className="flex gap-5 justify-center mt-5">
                    <button className="text-md font-medium border border-black  bg-transparent py-2 px-4 rounded-3xl hover:bg-[#0066cc] hover:text-white">Learn more</button>
                    <button className="text-md font-medium border  bg-[#0066cc] py-2 px-4 rounded-3xl text-white">Pre-order</button>
                </div>
            </div>

            <div className="bg-gray-50">
                <header
                    style={{
                        backgroundImage: "url(https://data.ictjournal.ch/styles/np8_full/s3/media/2025/09/10/apple-iphone-17-color-lineup-250909_big.jpg.large_.jpg?itok=vAuqTYhV)",
                        backgroundSize: "contain",
                        backgroundPosition: "center top",
                        backgroundRepeat: "no-repeat",
                        height: "60vh",
                        width: "100%",
                    }}>
                </header>
            </div>

        </>
    )
}

export default SubHero