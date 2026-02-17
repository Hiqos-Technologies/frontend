"use client";

import { useEffect, useState } from "react";

import { Bubbles } from 'lucide-react';
import { Button } from "./ui/button"
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Support", href: "#" },
];




  return (
    <nav className={`fixed z-1000 top-0 left-0 right-0 flex justify-between items-center p-4 sm:px-16 md:px-10 lg:px-20 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 w-11/12 mx-auto rounded-md mt-4'
        : 'bg-transparent border-none'
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
        <Bubbles className='cursor-pointer md:hidden' size={20} color='#e80500'/>
      </div>
    </nav>
  );
}
