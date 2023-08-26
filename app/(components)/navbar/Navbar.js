const Navbar = () => {
    return (
        <>
         <div className="flex justify-between  h-[90px] items-center px-6">
            <div>
                <h4 className="font-bold text-xl">LOGO.</h4>
            </div>
            <div >
                <ul className="flex justify-evenly">
                    <li className="mr-6 font-semibold cursor-pointer">HOME</li>
                    <li className="mr-6 font-semibold cursor-pointer">ABOUT</li>
                    <li className="mr-6 font-semibold cursor-pointer">PAGES</li>
                    <li className="mr-6 font-semibold cursor-pointer">SERVICES</li>
                    <li className="mr-6 font-semibold cursor-pointer">PORTFOLIO</li>
                    <li className="mr-6 font-semibold cursor-pointer">BLOGS</li>
                    <li className="mr-6 font-semibold cursor-pointer">CONTACT US</li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="Search " className="text-blue-400 rounded-lg w-[250px] h-[40px]
                 hover:bg-green-400 hover:border border-teal-300"  />
            </div>
            </div>   
        </>
    );
}

export default Navbar;
