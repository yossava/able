"use client";

import Image from "next/image";
export default function NavbarAlt() {
  return (
    <header
      id="navbar"
      className="bg-white text-gray-700 text-lg fixed top-0 left-0 right-0 z-50 flex justify-center"
    >
      <div className="container bg-transparent container">
        <nav className="bg-transparent flex justify-between items-center py-2">
          <div className="flex items-center">
            <a
              className="text-xl font-semibold leading-none bg-white/80 rounded mr-5 p-3 "
              href="/"
            >
              <Image
                width={200}
                height={24}
                src="/main-logo.png"
                alt="Logo"
              ></Image>
            </a>
            <ul className="hidden  lg:flex lg:items-center lg:w-auto lg:space-x-12 ">
              <li className="group relative pt-4 pb-4 has-child">
                <a
                  className="font-semibold hover:text-yellow-500 transition-all"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="pt-4 pb-4">
                <a
                  className="font-semibold hover:text-yellow-500 transition-all"
                  href="/"
                >
                  Rates
                </a>
              </li>
              <li className="pt-4 pb-4">
                <a
                  className="font-semibold hover:text-yellow-500 transition-all"
                  href="/"
                >
                  Contract
                </a>
              </li>
              <li className="pt-4 pb-4">
                <a
                  className="font-semibold hover:text-yellow-500 transition-all"
                  href="/"
                >
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
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
