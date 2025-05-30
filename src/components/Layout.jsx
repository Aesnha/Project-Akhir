
import { Outlet } from "react-router-dom";
import { useState } from "react";
export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-10 bg-[#1e2e4f] shadow-md">
        <nav className="container flex items-center justify-between mx-auto p-6">
          <div className="text-white text-lg font-bold font-[montserrat]">
            <h1 className="text-2xl font-bold text-[#D9E1F1]">COOL.In</h1>
          </div>
          {/* Hamburger menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="text-[#D9E1F1] focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Desktop nav */}
          <ul className="hidden md:flex space-x-4 text-[#D9E1F1]">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/aboutus">About</a>
            </li>
          </ul>
        </nav>
        {/* Mobile nav */}
        <MobileNav open={open} setOpen={setOpen} />
      </header>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <footer className="w-full bg-white p-4 font-[montserrat] text-center text-[#192338]">
        <p>© 2025 COOL.In Futuristic Tumblr</p>
      </footer>
    </div>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div className={`md:hidden transition-all duration-300 ${open ? "block" : "hidden"}`}>
      <ul className="flex flex-col bg-[#1e2e4f] text-[#D9E1F1] px-4 pb-4 space-y-2">
        <li>
          <a href="/" onClick={() => setOpen(false)}>Home</a>
        </li>
        <li>
          <a href="/product" onClick={() => setOpen(false)}>Product</a>
        </li>
        <li>
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        </li>
        <li>
          <a href="/aboutus" onClick={() => setOpen(false)}>About</a>
        </li>
      </ul>
    </div>
  );
}
