const ServicesCard = (props) => {
    return (
        <>
        <div className="m-4 ">
           <div className='border-2 border-blue-500 p-2 w-[350px] h-[250px] cursor-pointer hover:bg-blue-300 hover:text-white'>
            <img src={props.imgsrc} alt="" className="rounded-full w-[100px] ml-[100px] my-2 " />
            <h3 className="text-center text-lg font-semibold my-2">{props.heading}</h3>
            <p className="text-center text-xs my-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div> 
            </div>
        </>
    );
}

export default ServicesCard;
