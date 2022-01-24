import React from 'react';

export function Contactme() {
    return (
        <div>
            <div className='text-center mt-9'>
                <p className='font-Ubuntu font-bold text-3xl mb-2'>Are You Interested On My Work?</p>
                <p className='font-Ubuntu font-medium text-lg'>Then Contact Me</p>
            </div>
            <form action="https://formsubmit.co/joaoantoniopintovieira13@gmail.com" method="POST" className='flex flex-col rounded-lg items-center mt-24'>
                <input className='mb-9 h-12 w-3/6 bg-slate-300 border-b-black border-b-2 placeholder:text-black font-Poppins font-medium outline-none' type="text" name="name" placeholder='Name' required />
                <input className='mb-9 h-12 w-3/6 bg-slate-300 border-b-black border-b-2 placeholder:text-black font-Poppins font-medium outline-none' type="email" name="email" placeholder='Email' required />
                <input className='mb-9 h-12 w-3/6 bg-slate-300 border-b-black border-b-2 placeholder:text-black font-Poppins font-medium outline-none' type="text" name="subject" placeholder='Subject' required />
                <textarea className='mb-9 h-12 w-3/6 bg-slate-300 border-b-black border-b-2 placeholder:text-black font-Poppins font-medium outline-none' name='message' placeholder='Message' />
                <button type="submit" className='bg-black w-20 h-9 rounded-xl text-white font-bold'>Send</button>
            </form>
        </div>
    );
}
