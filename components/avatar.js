import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function avatar() {
    return (
        <div className='mt-32 ml-60 flex'>
            <img src="./Joao.jpeg" alt="sou lindo" width={400} height={400} className='rounded-full' />
            <div className='ml-16 mt-16'>
                <p className='mb-4 font-medium font-Poppins'>HI THERE! I'M</p>
                <div className='flex mb-4'>
                    <p className='text-purple-900 text-4xl font-bold font-Ubuntu'>JOÃO</p>
                    <p className='text-4xl font-bold ml-3 font-Ubuntu'>VIEIRA</p>
                </div>
                <p className='text-purple-900 font-Poppins leading-7'>A Junior Front-End Developer <span className='text-black'>
                    interested to learn  <br /> new technologies and create interactive applications<br />
                    and experiencies on the web.</span></p>
                <div className='flex mt-12'>
                    <button className='bg-purple-900 h-9 w-28 rounded-xl text-white'>Resume</button>
                    <div className='flex ml-14'>
                        <a href='https://www.instagram.com/joaopintovieira13/'><AiFillInstagram className='w-8 h-8 ml-3' /></a>
                        <a href='https://www.linkedin.com/in/jo%C3%A3o-vieira-833579215/'><AiFillLinkedin className='w-8 h-8 ml-3' /></a>
                        <a href='https://github.com/JoaoVieira13'><AiFillGithub className='w-8 h-8 ml-3' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default avatar;