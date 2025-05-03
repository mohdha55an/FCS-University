import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-sm text-gray-300">
            Our university is committed to excellence in education, research,
            and community engagement.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <i href="/about" className="hover:underline">
                About Us
              </i>
            </li>
            <li>
              <i href="/admissions" className="hover:underline">
                Admissions
              </i>
            </li>
            <li>
              <i href="/departments" className="hover:underline">
                Departments
              </i>
            </li>
            <li>
              <i href="/contact" className="hover:underline">
                Contact
              </i>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-300">
            FCS University
            <br />
            Hyderabad, T.S, 500006
            <br />
            Email: fcs@university.com
            <br />
            Phone: +91 9xxxxxxxxx
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <Link to={"/"} className="hover:text-blue-400">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:text-blue-400">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:text-blue-400">
                <Linkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} FCS University . All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
