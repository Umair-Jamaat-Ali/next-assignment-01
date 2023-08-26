const FooterMenu = (props) => {
    return (
        <>
            <div className='w-[25%] pl-[100px] '>
        <h3 className="my-3 text-lg font-semibold hover:text-blue-500 cursor-pointer hover:border-b-2  hover:border-blue-400 ">Our links</h3>
        <ul>
            <li className="text-left text-base cursor-pointer font-medium hover:text-blue-500">Home</li>
            <li className="text-left text-base cursor-pointer font-medium hover:text-blue-500">Services</li>
            <li className="text-left text-base cursor-pointer font-medium hover:text-blue-500">Blog</li>
            <li className="text-left text-base cursor-pointer font-medium hover:text-blue-500">Team</li>
            <li className="text-left text-base cursor-pointer font-medium hover:text-blue-500">About Us</li>
        </ul>
        </div>
        </>
    );
}

export default FooterMenu;
