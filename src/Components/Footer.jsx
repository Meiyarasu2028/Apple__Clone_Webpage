function Footer() {
    const footer = [
        {
            heading: "Shop and Learn",
            topic: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "Accessories"]
        },
        {
            heading: "Account",
            topic: ["Manage", "Your Apple Account", "Apple Store Account", "iCloud.com"]
        },
        {
            heading: "Entertainment",
            topic: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"]
        },
        {
            heading: "Apple Store",
            topic: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Trade In", "Ways to Buy"]
        },
        {
            heading: "About Apple",
            topic: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Conact Apple"]
        },
        {
            heading: "Apple Values",
            topic: ["Accessibility", "Education", "Environment", "Privacy", "Supply Chain Innovation"]
        }
    ];

    return (
        <footer className="bg-gray-100 p-8">
            {/* outer flex for columns */}
            <div className="flex flex-wrap gap-10 text-gray-700 justify-center">
                {footer.map((item, index) => (
                    <div key={index} className="flex flex-col ">
                        <h3 className="font-semibold mb-2">{item.heading}</h3>
                        <ul className="flex flex-col gap-1">
                            {item.topic.map((t, i) => (
                                <li key={i} className="text-sm hover:text-black cursor-pointer">
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
            <div>
                <p className="text-left mt-10 text-sm">More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
                <hr className="h-px bg-gray-300 border-0 my-6" />
            </div>
            <div className="flex items-center gap-5 flex-wrap ">
                <p className="text-sm text-gray-500 text-center">© 2025 Apple Inc. All rights reserved.</p>
                <p className="text-sm text-gray-500 text-center">Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</p>
            </div>
        </footer>
    );
}

export default Footer;
