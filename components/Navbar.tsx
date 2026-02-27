"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "./ui/button"
import Image from "next/image";
import Link from "next/link";
import { Menu } from 'lucide-react';
import gsap from "gsap";
import { useSidebar } from "./SidebarContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openSidebar } = useSidebar();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar drop-in animation on page load
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
];




  return (
    <nav ref={navRef} className={`fixed  z-1000 top-0 overflow-hidden left-0 right-0 flex justify-between items-center p-4 sm:px-16 md:px-10 lg:px-20 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 w-11/12 mx-auto rounded-md mt-4'
        : 'bg-transparent border-none border-4  '
    }`}>
      <div>
        <Image src={isScrolled ? "/Logo.png" : "/logo12.png"} alt={"Hiqos-Logo"} width={80} height={80}/>
      </div>

      <div className="flex items-center gap-6 max-md:hidden">
        {navLinks.map((item) => (
          <Link key={item.name}
            href={item.href}
            className={`relative group font-dm-sans font-semibold max-md-hidden ${isScrolled ? "text-[#333]" : "text-white"}`}>
            {item.name}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-(--secondary) transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
            
      </div>

      <div className="flex items-center gap-2">

        <Button className='cursor-pointer max-md:hidden  font-bold text-base' variant={isScrolled ? "default" : "default"} size={"lg"}>
          <Link href="/contact">
        Contact
          </Link>
        </Button>
        <button
          className="p-2 hamburger rounded bg-white/90 cursor-pointer backdrop-blur-md shadow-lg md:hidden"
          onClick={openSidebar}
        >
          <Menu className='cursor-pointer' size={20} color='#e80500'/>
        </button>
      </div>
    </nav>
  );
}
