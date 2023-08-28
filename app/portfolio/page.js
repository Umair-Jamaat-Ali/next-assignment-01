import Card from "../(components)/card/Card";

const Portfolio = () => {
  return (
    <>
      <div className="m-[50px]">
        <div className="">
          <p className=" uppercase text-blue-500 my-5 font-semibold text-lg "> Our portfolio</p>
          <p className="text-4xl font-semibold mb-6">Take A Look At Our Latest Work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          <Card imgsrc="/img/5.png" />
          <Card imgsrc="/img/6.png"/>
          <Card imgsrc="/img/7.png"/>
          <Card imgsrc="/img/8.jpg"/>
          <Card imgsrc="/img/9.png"/>
          <Card imgsrc="/img/images1.png"/>
        </div>
       <div className="pl-[550px]">
         <button className="w-9 h-9 rounded-full m-3 hover:bg-blue-500 hover:text-white bg-slate-300"> &lt; </button>
          <button className="w-9 h-9 rounded-full m-3 hover:bg-blue-500 hover:text-white bg-slate-300"> &gt; </button>
      </div>

      <div className="w-[100%] h-auto bg-slate-300 flex items-center pl-[200px] ">
       
       <p>
        Our team
        </p>
        <p>Our top dedicated professionals. </p>
       
            <div className=" w-[90%] h-[200px]  border-2 border-slate-100 flex justify-between ">
              </div>
              </div>
      </div>
    </>
  );
}

export default Portfolio;
