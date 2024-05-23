"use client"
import { Button } from '/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import { BellDot, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
    const { user, isLoaded } = useUser();
    return (
        <div className="p-4 bg-white flex justify-between items-center">
            <div className="hidden lg:block">
                <h1 className="lg:text-3xl font-bold">
                    Empower <span className="text-primary">Minds</span>, Share <span className="text-primary">Wisdom</span>
                </h1>
            </div>
            <div className="flex justify-center gap-3 sm:gap-2 w-full lg:w-auto">
                <div className="flex gap-1 sm:gap-2 border rounded-md p-1 sm:p-2 flex-grow">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                    <input type="text" placeholder="Search..." className="outline-none text-sm sm:text-base w-full" />
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <BellDot className="text-gray-500 h-4 w-4 sm:h-5 sm:w-5 hover:text-primary hover:cursor-pointer" />
                    {isLoaded && user ? (
                        <UserButton afterSignOutUrl="/courses" />
                    ) : (
                        <Link href="/sign-in">
                            <Button size="sm">Get Started</Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>

        
    )
}

export default Header