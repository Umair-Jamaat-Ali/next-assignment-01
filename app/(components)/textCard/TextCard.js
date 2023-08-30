import React from 'react';

const TextCard = () => {
    return (
        <>
          <div className='w-[400px] h-[400px]  border-2 border-blue-300 hover:bg-blue-300 cursor-pointer hover:text-white p-3 hover:border-black'>
            <p className='my-3 text-xl font-semibold '>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <p className='my-3 ursor-pointer text-blue-500 font-semibold text-lg'>Posted, 30 August, 2023</p>
            <p className='my-3 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p className='my-3 cursor-pointer text-blue-500 font-semibold text-lg hover:text-white'>Read More</p>
            </div>  
        </>
    );
}

export default TextCard;
