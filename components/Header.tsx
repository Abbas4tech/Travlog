import React from 'react'
import Photo from './Photo'
import { links } from './data/data'
import Button from './Button'
import BagIcon from '@/Icons/bag'

const Header = () => {
    return (
        <>
            <header className='flex justify-between py-4 px-8'>
                <section className='flex gap-4 items-center'>
                    <Photo bucketUrl='logo' width={24} height={24} isPrority alt='logo' />
                    <h3 className='font-extrabold'>Travlog</h3>
                </section>
                <nav className='flex gap-4'>
                    {links.map(link => (
                        <Button classes={['px-4', 'py-2', 'font-semibold', 'text-gray-500', 'hover:bg-slate-200', 'text-sm', 'hover:rounded-full']}>{link}</Button>
                    ))}
                </nav>
                <section className='flex'>
                    <button className='px-6 py-2 font-semibold text-sm text-sky-950'>Login</button>
                    <Button classes={['px-6', 'py-2', 'font-semibold', 'bg-blue-800', 'text-sm', 'rounded-full', 'text-gray-100', "hover:scale-110", "ease-in-out", "transition-all", "hover:shadow-md", "hover:shadow-gray-400"
                    ]}>Sign Up</Button>
                </section>

            </header >
        </>
    )
}

export default Header