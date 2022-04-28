import Image from "next/image";
import {useState} from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen]  = useState(false);
  return (
    <header>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/images/logo.svg"
            objectFit="contain"
            width="100px"
            height="100px"
            alt="logo"
          />
          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-6">
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link" href="#">
              Product
            </a>
            <a className="nav-link" href="#">
              About Us
            </a>
            <a className="nav-link" href="#">
              Careers
            </a>
            <a className="nav-link" href="#">
              Community
            </a>
          </div>
          {/* button */}
          <a
            href="#"
            className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight transition duration-300 ease-out"
          >
            Get Started
          </a>
          {/* hamburger icon */}
          <button
            id="menu-btn"
            onClick={() => setIsMenuOpen(open => !open)}
            className={`${
              isMenuOpen && "open"
            } hamburger block md:hidden focus:outline-none`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* mobile menu */}
        <div className={`md:hidden ${!isMenuOpen && 'hidden'}`}>
          <div className="z-10 absolute flex flex-col items-center py-8 mt-2 space-y-6 font-bold bg-white drop-shadow-md left-6 right-6 sm:w-auto sm:self-center">
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
