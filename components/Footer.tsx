import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#001F4D] text-white">
      {/* Main Section */}
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Branding */}
        <div className="text-2xl font-bold">ANYTECH</div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-start space-x-6 text-cyan-400">
          {["Our Solutions", "AnyCaaS", "AnyBaaS", "AnyPaaS"].map((item, index) => (
            <Link href="#" key={index}>
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                {item}
              </span>
            </Link>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-cyan-400 hover:text-white transition-all duration-300">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-cyan-400 hover:text-white transition-all duration-300">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-cyan-400 hover:text-white transition-all duration-300">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#001A3D] text-center py-3 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} <span className="text-blue-400">All rights reserved.</span> Any Technology Pte Ltd.
        </p>
        <Link href="#">
          <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
