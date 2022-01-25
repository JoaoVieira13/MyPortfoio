import React from 'react';
import { Navbar } from '../components/navbar';
import Link from 'next/link';

export default function Success() {
    return (
        <>
            <Navbar />
            <div className='flex justify-center mt-32'>
                <div className='flex flex-col justify-center border-2 w-3/6 border-black rounded-xl bg-white'>
                    <p className='font-Ubuntu font-bold text-4xl text-center mt-8'>Email Sent Successfully!</p>
                    <div className='flex justify-center mt-10 mb-10'>
                        <img src='sent.jpg' alt='emailSent' className='flex w-2/5 h-5/5' />
                    </div>
                    <div className='flex justify-center mb-8'>
                        <Link href="/"><button className='bg-black hover:bg-slate-700 w-24 h-9 text-white rounded-lg font-bold'>Back</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
