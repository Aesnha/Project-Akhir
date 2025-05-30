
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="w-full min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10 bg-[#1e2e4f] shadow-md">
        <nav className=" flex items-center justify-between mx-auto p-4">
          <div className="text-white text-lg font-bold font-mono">
            <h1 className="text-2xl font-bold text-[#D9E1F1]">COOL.IN</h1>
          </div>
          <ul className="flex space-x-4 text-[#D9E1F1]">
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
      </header>

      <main className="h-screen">
        <Outlet />
      </main>

      <footer className="bottom-0 w-full bg-white p-4">
        <p>© 2025 MyWebsite</p>
      </footer>
    </div>
  );
}
