import { MdOutlineBusinessCenter } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-3 pt-5 grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 md:justify-center">
        <div className="flex gap-6 justify-center items-center">
          <Link to="/" className="cool-link">
            Home
          </Link>
          <Link to="/policies" className="cool-link">
            Policies
          </Link>
          <Link to="/about" className="cool-link">
            About
          </Link>
          <Link to="/contact" className="cool-link">
            Contact
          </Link>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center pt-2">
            <p className="titleT text-2xl flex justify-center items-center">
              {" "}
              <MdOutlineBusinessCenter /> INSURAMART
            </p>
            <p className="text-md text-gray-300 pt-[1rem] pb-[1rem]">
              "Browse. Compare. Insure."
            </p>
          </div>

          <div className="flex gap-5 py-2 justify-center items-center">
            <FaFacebook
              className="cursor-pointer hover:text-[#2D68C4] duration-200 ease"
              size={22}
            />
            <FaTwitter
              className="cursor-pointer hover:text-[#1DA1F2] duration-200 ease"
              size={22}
            />
            <FaYoutube
              className="cursor-pointer hover:text-[#FF0000] duration-200 ease"
              size={22}
            />
            <AiFillInstagram
              className="cursor-pointer hover:text-[#C13584] duration-200 ease"
              size={22}
            />
            <AiFillMail
              className="cursor-pointer hover:text-[#D44638] duration-200 ease"
              size={22}
            />
          </div>
        </div>

        <div className="flex flex-col pt-3 justify-center items-center">
          <p className="text-sm">
            Designed and Developed by{" "}
            <span className="text-[#EAB308] font-bold">Team Nexus</span>
          </p>
          <p className="text-sm"> &copy;Copyright, All rights reserved.</p>
        </div>

        <div></div>
      </div>
    </>
  );
};
