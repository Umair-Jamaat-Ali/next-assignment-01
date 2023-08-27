import Button from "../(components)/button/Button";
import Card from "../(components)/card/Card";

const About = () => {
    return (
        <>
           <div className="p-[100px] ">
            <div className="flex justify-between ">
                <section className="w-[50%] m-3 ml-4 ">
                   <Card/>
                </section>
                <section className="w-[50%] ">
                    <p className="text-blue-500 text-lg uppercase my-4">
                        About Us
                    </p>
                    <h1 className="text-3xl font-semibold tracking-normal my-3">We design, build brands <br/> & digital projects.</h1>
                    <p className="text-left text-sm">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <br/>
                    <p className="text-left text-sm my-3">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer.
                    </p>
                    <Button text="Read More" />
                </section>
            </div>
           </div>
           <div className="w-[100%] h-[350px] bg-slate-300 flex items-center pl-[200px] ">
            <div className=" w-[85%] h-[200px]  border-2 border-slate-100 ">

            </div>
            </div>
        </>
    );
}

export default About;
