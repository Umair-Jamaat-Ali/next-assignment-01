import Button from "../button/Button";
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <>
            <div className="h-[450px] bg-[url('/img/13.jpg')] bg-no-repeat bg-cover w-[100%]
            ">
                <Navbar />
                <div className="flex justify-between">
                    <div className="w-[50%] p-16 text-white mb-3">
                    <h1 className="text-6xl font-bold mb-3">Creative <br/> Digital Agency</h1>
                    <p className="text-sm font-normal my-3">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit.
                     </p>
                   <Button text="Learn More" />
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
