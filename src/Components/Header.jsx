function Header() {
  return (
    <>
      <header
        style={{
          backgroundImage: "url(https://www.apple.com/v/iphone-17-pro/a/images/overview/welcome/hero__bdntboqignj6_xlarge.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          backgroundColor: "black",
          height: "100vh",
          width: "100%",
        }} className="z-10"
      >

        <div className="flex flex-col items-center justify-end h-full text-white text-center">
          <div className="flex gap-5">
            <button className="text-md font-medium border  bg-transparent py-2 px-4 rounded-3xl hover:bg-[#0066cc]">Learn more</button>
            <button className="text-md font-medium border  bg-[#0066cc] py-2 px-4 rounded-3xl">Pre-order</button>
          </div>

          <p className="mt-4 text-lg font-bold mb-0">From ₹134900.00* or ₹21650.00/mo. for 6 mo.‡</p>
          <p className="mt-4 text-lg font-bold mb-10">Available from 19 Sep</p>
        </div>
      </header>

    </>
  );
}

export default Header;




