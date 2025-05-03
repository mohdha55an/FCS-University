import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Study Material", path: "/study" },
    { id: 3, name: "Results", path: "/results" },
    { id: 4, name: "Gallery", path: "/gallery" },
    { id: 5, name: "About Us", path: "/about" },
  ];

  const [open, setOpen] = useState(false);

  const linkClass = "text-gray-700 hover:text-blue-600 transition duration-200";
  const activeLink = "text-blue-600 font-semibold";

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-1 flex sm:justify-around  justify-between items-center">
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-20 rounded-lg hover:scale-95 transition-transform duration-200"
          />
        </NavLink>

        <ul className="hidden sm:flex gap-6 items-center font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `${linkClass} ${activeLink}` : linkClass
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="sm:hidden focus:outline-none text-gray-700"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden bg-orange-200 text-center rounded-lg mx-1 px-6 py-4 shadow-md">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? `${linkClass} ${activeLink}` : linkClass
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
