import React from 'react'
import Photo from './Photo'
import { links } from './data/data'

const Header = () => {
    return (
        <>
            <header className='flex justify-between py-4 px-8'>
                <section className='flex gap-4 items-center'>
                    <Photo bucketUrl='logo' width={24} height={24} isPrority alt='logo' />
                    <h3 className='font-bold'>Travlog</h3>
                </section>
                <nav>
                    {links.map(link => (
                        <button className='px-4 py-2 font-semibold text-gray-500 hover:bg-slate-200 text-sm hover:rounded-full'>{link}</button>
                    ))}
                </nav>
                <section>
                    <button className='px-6 py-2 font-semibold text-sm text-sky-950'>Login</button>
                    <button className='px-6 py-2 font-semibold bg-blue-800 text-sm rounded-full text-gray-100'>Login</button>
                </section>
            </header>
        </>
    )
}

export default Header