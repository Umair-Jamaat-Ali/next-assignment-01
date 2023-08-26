import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="flex justify-between text-white  h-[90px] items-center px-6">
                    <div>
                        <h4 className="font-bold text-xl"><Link href="/" > LOGO. </Link></h4>
                    </div>
                    <div >
                        <ul className="flex justify-evenly">
                            <li className="mr-6 font-semibold cursor-pointer"><Link href="/"> HOME </Link> </li>
                            <li className="mr-6 font-semibold cursor-pointer"><Link href="/about"> ABOUT </Link> </li>
                            <li className="mr-6 font-semibold cursor-pointer"><Link href="/pages"> PAGES </Link> </li>
                            <li className="mr-6 font-semibold cursor-pointer"><Link href="/services"> SERVICES </Link> </li>
                            <li className="mr-6 font-semibold cursor-pointer"><Link href="/portfolio"> PORTFOLIO </Link> </li>
                            <li className="mr-6 font-semibold cursor-pointer"><Link href="/blog"> BLOGS </Link> </li>
                            <li className="mr-6 font-semibold cursor-pointer"><Link href="/contact"> CONTACT US </Link> </li>
                        </ul>
                    </div>
                    <div>
                        <input type="text" placeholder="Search " className="text-blue-400 rounded-lg w-[250px] h-[40px]
                 hover:bg-blue-400 hover:border border-teal-300"  />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
