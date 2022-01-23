import React from 'react';

export function Project() {
    return (
        <>
            <div className='text-center font-Ubuntu mt-8'>
                <p className='font-bold text-3xl'>My Work</p>
                <p className='font-bold text-xl mt-2 text-gray-600'>A section of my ranges of work</p>
            </div>
            <div className='flex justify-between ml-16 mr-16 mt-6 mb-8'>
                <div className='w-96 bg-white rounded-xl'>
                    <img src='./hotel.jpg' alt='hotel' className='object-cover h-80 rounded-t-xl' />
                    <div className='font-Poppins ml-8 mt-6 mr-6 mb-10'>
                        <p className='text-gray-500 font-bold text-sm mb-4'>Hotel</p>
                        <p className='font-Ubuntu font-bold text-2xl text-sky-900 -mt-2 mb-4'>App To Do Hotel <br />Reservations</p>
                        <p className='leading-7'>This was a full-stack project where was expected that the user could SignIn, SignUp,
                            could view the catalogue, be able to add rooms to favorites and be able to book rooms for
                            a certain number of nights. I developed the <a href='https://github.com/JoaoVieira13/HotelAPI'><span className='underline text-sky-900'>Back-End </span></a>
                            with Node.js and the <a href='https://github.com/JoaoVieira13/Hotel-ReactJS'><span className='underline text-sky-900'>Front-End </span></a> with React.js!</p>
                    </div>
                </div>
                <div className='w-96 bg-white rounded-xl'>
                    <img src='./news.png' alt='hotel' className='object-cover h-80 rounded-t-xl' />
                    <div className='font-Poppins ml-8 mt-6 mr-6 mb-10'>
                        <p className='text-gray-500 font-bold text-sm mb-4'>News</p>
                        <p className='font-Ubuntu font-bold text-2xl text-sky-900 -mt-2 mb-4'>Website To Read <br />Daily News</p>
                        <p className='leading-7'>This was a project where was expected that the user could read, comment and like/dislike
                            the news. I only developed the <a href='https://github.com/JoaoVieira13/FolkNews-with-Angular'><span className='underline text-sky-900'>Front-End </span></a>
                            with Angular.Ts and I also used <a href='https://newsapi.org/'><span className='underline text-sky-900'>Public News API</span></a>.</p>
                    </div>
                </div>
                <div className='w-96 bg-white rounded-xl'>
                    <img src='./news2.jpg' alt='hotel' className='object-cover h-80 rounded-t-xl' />
                    <div className='font-Poppins ml-8 mt-6 mr-6 mb-10'>
                        <p className='text-gray-500 font-bold text-sm mb-4'>News</p>
                        <p className='font-Ubuntu font-bold text-2xl text-sky-900 -mt-2 mb-4'>Mobile App To Read <br />Daily News</p>
                        <p className='leading-7'>This was the same project as News Website but in Mobile version where was expected that the
                            user could do exactly the same as in the web version I only developed the <a href='https://github.com/JoaoVieira13/FolkNews-with-Ionic'><span className='underline text-sky-900'>Front-End </span></a>
                            with Ionic.Ts.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
