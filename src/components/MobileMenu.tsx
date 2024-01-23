import Hamburger from "hamburger-react";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="block lg:hidden z-50" onClick={() => setOpen(!open)}>
        <Hamburger color="#F4D41C" size={28} />
      </button>

      <div
        className={`fixed top-16 right-0 z-40 h-full w-full bg-white transition-transform duration-300 ease-in-out ${
          open ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <nav className="">
          <a
            href="#"
            className="block py-5 border-b border-t border-gray-100 px-4 text-gray-600"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-5 border-b border-gray-100 px-4 text-gray-600"
          >
            Rates
          </a>
          <a
            href="#"
            className="block py-5 border-b border-gray-100 px-4 text-gray-600"
          >
            Contract
          </a>
          <a
            href="#"
            className="block py-5 border-b border-gray-100 px-4 text-gray-600"
          >
            News
          </a>
          <div className="p-3 flex flex-col space-y-3 mt-10">
            <button className="bg-tertiary p-3 w-full rounded text-gray-600">
              REGISTER
            </button>
            <button className="border-tertiary border p-3 w-full rounded text-gray-600">
              LOGIN
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
