import React from 'react'
import Photo from './Photo'
import Button from './Button'


const Subscribe = () => {
    return (
        <section className='container mx-auto p-6 relative'>
            <Photo bucketUrl='subscribe' width={75} height={75} alt='showcase-dots' classes={["absolute", "top-0", "left-0", "z-10"]} />
            <article className='bg-off-white rounded-3xl flex flex-col justify-center items-center p-12 min-h-[12rem]'>
                <div className='text-pink tracking-widest leading-10 font-semibold uppercase'>Subscribe to our newsletter</div>
                <div className='text--black my-2 text-center text-3xl font-bold leading-10'>
                    Prepare yourself & let’s explore the beauty of the world
                </div>
                <div className='flex flex-col md:flex-row mt-4 gap-4 items-center'>
                    <input type="text" placeholder='Email' className='min-w-[20rem] max-w-[90%] h-14 py-1 text-sm font-semibold text-opaque-black rounded-lg outline-none px-4 border-yellow-50 border-2' />
                    <Button classes={["bg-schbang-blue", "rounded-full", "text-sm", "px-6", "py-3", "text-white", "text-center", "hover:scale-110", "ease-in-out", "transition-all", "hover:shadow-md", "hover:shadow-gray-400"]} >Subscribe</Button>
                </div>
            </article>
        </section>
    )
}

export default Subscribe