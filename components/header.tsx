
'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Menu() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className="bg-[#252B73]">
            <div className="w-full max-w-[1230px] mx-auto text-white">
                <nav className={`hidden md:flex justify-end bg-[#252B73] text-sm py-2 px-4 transition-opacity ${isSticky ? 'opacity-0' : 'opacity-100'}`}>
                    <Link href="#" className="px-3">PANALOBET REGISTER</Link>
                    <span>|</span>
                    <Link href="#" className="px-3">PANALOBET LOGIN</Link>
                    <span>|</span>
                    <Link href="#" className="px-3">PANALOBET DEPOSIT</Link>
                    <span>|</span>
                    <Link href="#" className="px-3">PANALOBET WITHDRAWAL</Link>
                    <span>|</span>
                    <Link href="#" className="px-3">DOWNLOAD PANALOBET APP</Link>
                </nav>
            </div>
            <div className={`bg-[#3E5295] transition-all ${isSticky ? 'shadow-lg' : ''}`}>
                <div className="w-full max-w-[1230px] mx-auto text-white">
                    <div className="flex justify-between items-center p-2 md:py-2 md:px-[22px]">
                        <Image src="/img/PANALOBET-LOGO.webp" alt="PANALOBET" width={120} height={40} />
                        <div className="hidden md:flex gap-4">
                            <button className="bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] px-4 py-2 rounded shadow-md">REGISTER</button>
                            <button className="bg-[linear-gradient(135deg,#1f2460_0%,#005fbe_50%,#1f2460_100%)] px-4 py-2 rounded shadow-md">LOGIN</button>
                        </div>
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1230px] mx-auto text-white">
                <nav className={`bg-[#252B73] md:flex justify-center py-2 ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="#" className="flex items-center gap-2">
                            <span className="emoji">🖥</span> PANALOBET
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <span className="emoji">🎰</span> SLOTS
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <span className="emoji">🎥</span> LIVE
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <span className="emoji">🃏</span> CARDS
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <span className="emoji">🎣</span> FISHING
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <span className="emoji">⚽</span> SPORTS
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <span className="emoji">🎟️</span> LOTTERY
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <span className="emoji">🎉</span> PROMOTIONS
                        </Link>
                        <Link href="#" className="flex items-center gap-2">
                            <span className="emoji">📰</span> NEWS
                        </Link>
                    </div>
                </nav>
            </div>

        </header>
    )
}