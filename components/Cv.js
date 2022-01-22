import React from 'react';

function Cv() {
    return (
        <>
            <div className='bg-slate-200 pt-1 pb-4'>
                <div className='ml-5 mt-5 flex'>
                    <img src='./Joao.jpeg' width={180} height={180} className='rounded-full border-4 border-blue-400' />
                    <div className='w-screen ml-8'>
                        <p className='font-Ubuntu font-bold text-3xl mb-2 text-gray-600'>João Vieira</p>
                        <hr className='h-1 bg-blue-400 w-5/12' />
                        <div className='mt-4 font-Poppins leading-9'>
                            <p><span className='font-bold'>Birth Date: </span> 04/05/2002 |<span className='font-bold ml-3'>Nationality: </span>Portuguese   |</p>
                            <p><span className='font-bold'>Sex: </span>Male | (+351) 916997710 | joaoantoniopintovieira13@gmail.com </p>
                            <p>Rua Padre Alvaro Silva Barbosa, 908, 4600-782, Amarante, Portugal </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-12 mt-9 flex'>
                <div className='w-3 h-3 bg-blue-400 rounded-full mt-2' />
                <div className='ml-2 w-screen'>
                    <p className='font-Ubuntu font-bold text-base -mb-3'>EDUCATION & FORMATION</p>
                    <hr className='h-1 bg-blue-400 w-6/12 mt-3' />
                    <div className='font-Poppins mt-4 leading-8'>
                        <p className='text-gray-600'>05/10/2020 –  R. do Curral, Margaride (Santa Eulália), Felgueiras, Portugal </p>
                        <p><span className='font-bold'>CTESP WEB DEVELOPMENT AND MOBILE DEVICES -</span> ESTG</p>
                    </div>
                    <hr className='h-1 bg-blue-400 w-6/12 mt-1' />
                    <a className='underline text-blue-600' href='https://www.ipp.pt/ensino/cursos/ctesp/estg/625'><p className='mt-6 mb-6'>https://www.ipp.pt/ensino/cursos/ctesp/estg/625</p></a>
                </div>
            </div>
            <div className='ml-12 flex'>
                <div className='w-3 h-3 bg-blue-400 rounded-full mt-2' />
                <div className='ml-2 w-screen'>
                    <p className='font-Ubuntu font-bold text-base -mb-3'>LINGUISTIC COMPETENCES</p>
                    <hr className='h-1 bg-blue-400 w-6/12 mt-3' />
                    <div className='font-Poppins mt-4 leading-8'>
                        <p> Mother Language(s): <span className='font-bold'>PORTUGUESE</span></p>
                        <p>Other Language(s): <span className='font-bold'>ENGLISH & SPANISH (B1)</span></p>
                    </div>
                </div>
            </div>
            <div className='ml-12 flex mt-6'>
                <div className='w-3 h-3 bg-blue-400 rounded-full mt-2' />
                <div className='ml-2 w-screen'>
                    <p className='font-Ubuntu font-bold text-base -mb-3'>DIGITAL SKILLS</p>
                    <hr className='h-1 bg-blue-400 w-12/12 mt-3' />
                    <div className='font-Poppins mt-4 leading-8 mb-4'>
                        <p>HTML, CSS & JavaScript | SASS | TypeScript | My SQL | Node.js | Express.js | React JS & React Native | Angular | Ionic | Next.js |
                            XML , XSD Schema & Json | Basic CMS knowledge | GitHub | Figma | Tailwind | MongoDB | Visual Studio | Yarn |  </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cv;
