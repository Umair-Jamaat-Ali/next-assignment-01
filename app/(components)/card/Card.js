import Image from "next/image";

const Card = (props) => {
    return (
        <>
        <div className="py-4">
            <div className="w-[350px] h-[350px] border-2 border-slate-200
             bg-cover bg-no-repeat cursor-pointer
            hover:border-blue-300"
            style={{backgroundImage: `URL(${props.imgsrc})`}}>
             </div>   
            </div>
        </>
    );
}

export default Card;
