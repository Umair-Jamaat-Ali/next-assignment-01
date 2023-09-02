import Footer from "./(components)/footer/Footer";
import Header from "./(components)/header/Header";
import Navbar from "./(components)/navbar/Navbar";
import ServicesCard from "./(components)/servicescard/Services Card";
import About from "./about/page";
import Blog from "./blog/page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <>
      <div className="m-10">
        <p className="text-center text-lg font-semibold text-blue-600 uppercase py-8">Our services</p>
        <div className="flex justify-end">
          <h1 className="text-center text-4xl font-semibold pb-4 pr-[200px]">We Are Providing Digital Services</h1>
          <button className="w-9 h-9 rounded-full m-3 hover:bg-blue-500 hover:text-white bg-slate-300"> &lt; </button>
          <button className="w-9 h-9 rounded-full m-3 hover:bg-blue-500 hover:text-white bg-slate-300"> &gt; </button>
        </div>
        <div className="flex justify-evenly flex-wrap grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ServicesCard imgsrc='/img/web-development.png' heading='Web development' />
          <ServicesCard imgsrc='/img/graphic-design.png' heading='Graphic designing' />
          <ServicesCard imgsrc='/img/digital-marl.png' heading='Digital Marketing' />
        </div>
        <About/>
        <Portfolio/>
        <Blog/>
      </div>
    </>
  )
}
