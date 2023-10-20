"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="vehi mart logo"
            width={150}
            height={25}
            className="object-contain"
          />
        </Link>
        <div className="sm:hidden">
          {isOpen ? (
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineMenu
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
        <div className={`sm:flex flex-grow items-center gap-[4vw] ${isOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex items-center gap-[4vw]">
            <li>
              <Link className="hover:text-red-500 font-semibold" href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-500 font-semibold" href="#">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-500 font-semibold" href="#">
                Career
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-500 font-semibold" href="#">
                Categories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="px-5 py-2 bg-transparent hover:bg-[#FD0507] font-semibold hover:text-white border border-[#FD0507] hover:border-transparent rounded">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
