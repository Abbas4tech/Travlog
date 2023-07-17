import React from 'react'
import Photo from './Photo'
import { links } from './data/data'
import Button from './Button'
import BagIcon from '@/Icons/bag'

const Header = () => {
    return (
        <>
            <header className='flex justify-between py-4 px-4 lg:px-8'>
                <section className='flex gap-4 items-center'>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 stroke-current md:h-6 md:w-6 inline-block md:hidden"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    <Photo bucketUrl='logo' width={24} height={24} isPrority alt='logo' />
                    <h3 className='font-extrabold'>Travlog</h3>
                </section>
                <nav className='lgap-4 hidden md:flex'>
                    {links.map(link => (
                        <Button key={link} classes={['px-4', 'py-2', 'font-semibold', 'text-gray-500', 'hover:bg-slate-200', 'text-sm', 'hover:rounded-full']}>{link}</Button>
                    ))}
                </nav>
                <section className='md:flex hidden'>
                    <button className='px-6 py-2 font-semibold text-sm text-sky-950'>Login</button>
                    <Button classes={['px-6', 'py-2', 'font-semibold', 'bg-blue-800', 'text-sm', 'rounded-full', 'text-gray-100', "hover:scale-110", "ease-in-out", "transition-all", "hover:shadow-md", "hover:shadow-gray-400"
                    ]}>Sign Up</Button>
                </section>

            </header >
        </>
    )
}

export default Header