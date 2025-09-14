import { FaSearch, FaShoppingBag, FaApple } from "react-icons/fa"
function NavBar() {

    const Navbar = [
        {
            name: "Store",
            href: "#"
        },
        {
            name: "Mac",
            href: "#"
        },
        {
            name: "ipad",
            href: "#"
        },
        {
            name: "iphone",
            href: "#"
        },
        {
            name: "Watch",
            href: "#"
        },
        {
            name: "Airpods",
            href: "#"
        },
        {
            name: "TV & Home",
            href: "#"
        },
        {
            name: "Entertainment",
            href: "#"
        },
        {
            name: "Accessories",
            href: "#"
        },
        {
            name: "Support",
            href: "#"
        }
    ]

    return (
        <>
            <nav>
                <div className="bg-black text-white p-4 flex gap-10 items-center justify-between relative md:justify-center">
                    <div>
                        <FaApple className="cursor-pointer" />
                    </div>
                    <ul className="gap-10 text-sm justify-center hidden md:flex">
                        {
                            Navbar.map((item, index) => {
                                return <li className="cursor-pointer hover:<Navmenu/>" key={index}><a className="items-center " herf={item.href}></a>{item.name}</li>
                            })
                        }
                    </ul>
                    <div className="flex gap-10">
                        <FaSearch />
                        <FaShoppingBag />
                    </div>
                </div>

                <div className="bg-black text-white pb-10 ">
                    <div className="bg-gray-950 p-3">
                        <p className="text-sm font-semibold text-center">Get up to 6 months of No Cost EMI◊ plus up to ₹10000 instant cashback‡ on selected products with eligible cards. <span className="text-blue-800 hover:underline cursor-pointer">Shop</span> </p>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default NavBar