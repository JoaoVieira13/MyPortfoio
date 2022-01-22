import React from 'react';

function avatar() {
    return (
        <div className='mt-32 ml-60 flex'>
            <img src="./Joao.jpeg" alt="sou lindo" width={400} height={400} className='rounded-full' />
            <div className='ml-16 mt-10'>
                <p className='mb-4 font-medium'>HI THERE! I'M</p>
                <div className='flex mb-4'>
                    <p className='text-purple-900 text-4xl font-bold'>JOÃO</p>
                    <p className='text-4xl font-bold ml-3'>VIEIRA</p>
                </div>
                <p className='text-purple-900'>A Junior Front-End Developer <span className='text-black'>
                    interested to learn  <br /> new technologies and create interactive applications<br />
                    and experiencies on the web.</span></p>
                <button className='mt-16 bg-purple-900 h-9 w-28 rounded-xl text-white'>Resume</button>
            </div>
        </div>
    );
}

export default avatar;