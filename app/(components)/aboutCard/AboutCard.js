const AboutCard = (props) => {
    return (
        <>
           <div className="m-2 ">
           <div className=' p-2 w-[300px] h-[170px] cursor-pointer hover:bg-slate-100-300 hover:text-white'>
            <img src={props.imgsrc} alt="" className="rounded-full w-[70px] ml-[100px]" />
            <h3 className="text-center text-lg font-semibold my-2">{props.heading}</h3>
            <p className="text-center text-xs my-2">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                when an unknown printer took a galley of type.
            </p>
            </div> 
            </div> 
        </>
    );
}

export default AboutCard;
