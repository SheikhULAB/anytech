import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#001F4D] text-white">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">ANYTECH</div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-cyan-400">
          <Link href="#">
            <span className="hover:text-white cursor-pointer">Our Solutions</span>
          </Link>
          <Link href="#">
            <span className="hover:text-white cursor-pointer">AnyCaaS</span>
          </Link>
          <Link href="#">
            <span className="hover:text-white cursor-pointer">AnyBaaS</span>
          </Link>
          <Link href="#">
            <span className="hover:text-white cursor-pointer">AnyPaaS</span>
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#001A3D] text-center py-3 text-sm text-gray-400">
        <p>
          ©2023 <span className="text-blue-400">All rights reserved.</span> Any Technology Pte Ltd.
        </p>
        <Link href="#">
          <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
