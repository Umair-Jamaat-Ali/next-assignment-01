import React from 'react';
import FooterMenu from './FooterMenu';

const Footer = () => {
    return (
        <div className='bg-slate-100 p-11'>
            <footer>
                <section className='flex ml-[100px] pb-8'>
        <div className='w-[25%] pr-5'>
            <h1 className='text-2xl font-semibold text-blue-500 pb-3 font-serif'>LOGO.</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <FooterMenu />
        <FooterMenu/>
        <FooterMenu/>
        </section>
        <div className='pt-6 border-t-4 border-blue-300 text-center '>
        <p>Made with <i className="fas fa-heart"></i> by <a href="index.html">Umair Jamaat Developer</a></p>
        <p>Copyright © 2021 <b>LOGO.</b> All Rights Reserved</p>
        </div>
            </footer>
        </div>
    );
}

export default Footer;
