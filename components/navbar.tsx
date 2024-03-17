'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faClose
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const [toggle, setToggle] = useState<boolean>(false);

    const handleOnToggle = (e: any) => {
        setToggle(!toggle)
    }

    return (
        <header className="bg-white md:py-8 md:px-24 py-3">
            <nav className="flex justify-between items-center w-[98%]  mx-auto">
                <div className='flex'>
                    <div className='px-5'>
                        <Image width={10} height={10} className="w-24 cursor-pointer" src="/logo.svg" alt="..." />
                    </div>
                    <div
                        className={`duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${toggle ? 'top-[8%]' : 'top-[-100%]'} md:w-auto w-full flex justify-center items-center px-5`}>
                        <ul className="flex md:flex-row flex-col md:items-center gap-8">
                            <Link className='text-gray-500 font-medium text-sm hover:font-bold' href={''}>For Clients</Link>
                            <Link className='text-gray-500 font-medium text-sm hover:font-bold' href={''}>For Advisors</Link>
                            <Link className='text-gray-500 font-medium text-sm hover:font-bold' href={''}>Resources</Link>
                            <Link className='text-gray-500 font-medium text-sm hover:font-bold' href={''}>Company</Link>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <button className='text-gray-600 font-semibold px-3 py-1'>Log in</button>
                    <button className='bg-black text-white px-3 py-1 rounded-lg'>Get Started</button>
                    <div className='text-2xl cursor-pointer md:hidden'>
                        <FontAwesomeIcon icon={toggle ? faClose : faBars} className='' onClick={handleOnToggle} />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar