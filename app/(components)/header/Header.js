import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <>
            <div className="h-[450px] bg-[url('/img/download.jpg')] bg-no-repeat bg-cover w-[100%]
            ">
                <Navbar />
                <div className="flex justify-between">
                    <div className="w-[50%] p-16 text-white mb-3">
                    <h1 className="text-6xl font-bold mb-3">Creative <br/> Digital Agency</h1>
                    <p className="text-sm font-normal my-3">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit.
                     </p>
                    <button 
                    className="bg-blue-400 w-[130px] h-10 ml-3 mt-2
                     text-white rounded-xl 
                     hover:bg-white 
                     hover:text-black"> 
                    Learn More 
                    </button>
                    </div>
                    <div className="w-[50%] ">
                    <img src="/img/digital.png" alt="" className="m-8 ml-[200px] "/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
