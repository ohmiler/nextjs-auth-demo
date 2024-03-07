"use client"

import React from 'react'
import Link from 'next/link'
import NextLogo from '../../../public/next.svg'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

function Navbar({ session }) {
  return (
    <nav className='flex justify-between items-center shadow-md p-5'>
        <div>
            <Link href="/">
                <Image src={NextLogo} width={100} height={100} alt='nextjs logo' /> 
            </Link>
        </div>
        <ul className='flex space-x-4'>
            {!session ? (
                <>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/register">Register</Link></li>
                </>
            ) : (
                <>
                    <li><Link href="/welcome" className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Profile</Link></li>
                    <li><a onClick={() => signOut()} className='bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Logout</a></li>
                </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar
