import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from '../assets/icons8-task-100.png'
const Footer = () => {
  return (
    <footer className="bg-black border-t text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side: Logo and company info */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <img
              src={logo}
              alt="Taskly Logo"
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <p className="text-2xl font-bold">
            Task<span className="text-teal-500">Nest</span>
          </p>
            <p className="text-sm">
              Providing solutions to your productivity problems
            </p>
          </div>

          {/* Center: Quick links */}
          <div className="w-full sm:w-1/3 text-center mb-6 sm:mb-0">
            <h3 className="font-semibold text-xl mb-3 text-teal-500">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>

              <li>
                <a href="/tasks" className="hover:text-gray-300">
                  Tasks
                </a>
              </li>
              {/* <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>

          {/* Right side: Social Media Icons */}
          <div className="w-full sm:w-1/3 text-center">
            <h3 className="font-semibold text-xl mb-3 text-teal-500">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a href="#" className=" hover:text-teal-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className=" hover:text-teal-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className=" hover:text-teal-500">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className=" hover:text-teal-500">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <p>
            Copyright © {new Date().getFullYear()} - Task Management. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
