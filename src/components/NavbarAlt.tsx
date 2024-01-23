"use client";

import Image from "next/image";
import MobileMenu from "./MobileMenu";
export default function NavbarAlt() {
  return (
    <header
      id="navbar"
      className="bg-white text-gray-700 text-md font-semibold fixed top-0 left-0 right-0 z-50 flex justify-center px-5"
    >
      <div className="container">
        <nav className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a className="lg:mr-20 " href="/">
              <Image
                width={150}
                height={24}
                src="/main-logo.png"
                alt="Logo"
              ></Image>
            </a>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12 ">
              <li className="group relative pt-4 pb-4 has-child">
                <a className="hover:text-tertiary transition-all" href="/">
                  Home
                </a>
              </li>
              <li className="pt-4 pb-4">
                <a className="hover:text-tertiary transition-all" href="/">
                  Rates
                </a>
              </li>
              <li className="pt-4 pb-4">
                <a className="hover:text-tertiary transition-all" href="/">
                  Contract
                </a>
              </li>
              <li className="pt-4 pb-4">
                <a className="hover:text-tertiary transition-all" href="/">
                  News
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <a
              className="btn-accent hover-up-2 flex justify-between items-center space-x-2"
              href="/"
            >
              <img
                alt="British pound"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="rounded-full overflow-hidden object-cover w-5 h-5"
                src="https://region-api.pages.dev/flags/svg/GB.svg"
              />{" "}
              <span>English</span>
            </a>
          </div>
        </nav>
      </div>
      <MobileMenu />
    </header>
  );
}
