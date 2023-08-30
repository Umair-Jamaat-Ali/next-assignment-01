import React from 'react';
import TextCard from '../(components)/textCard/TextCard';

const Blog = () => {
    return (
        <>
            <div className=' flex justify-evenly my-16 mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* first div */}
                <div className='px-10 my-auto w-[400px]'>
                    <p className='uppercase text-lg text-blue-500 mb-3'>our blog</p>
                    <p className='text-2xl font-bold mb-3'>Latest News & Blogs</p>
                    <p className='mb-4'>lorem ispum ilt gumsum ronaldo sompal nepal hoptit lorem ispum ilt gumsum ronaldo</p>
                    <input type="text" placeholder='Enter Your Mail' className='border border-blue-500 h-[35px] pl-5'/>
                    
                </div>
                {/* ////////////second div */}
                <div> <TextCard /> </div>
                {/* ////////////third div */}
                <div> <TextCard /> </div>

            </div>

        </>
    );
}

export default Blog;
