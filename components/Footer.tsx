import Link from "next/link";

const Footer = () => {
  const navItems = ["Our Solutions", "AnyCaaS", "AnyBaaS", "AnyPaaS"];

  return (
    <footer className="bg-gradient-to-t from-[#001F4D] to-[#001A3D] text-white">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center border-b border-blue-900">
        {/* Logo & Branding */}
        <div className="text-3xl font-bold tracking-widest mb-8 md:mb-0">
          ANYTECH
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <Link href="#">
                <span className="text-cyan-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  {item}
                </span>
              </Link>
              {index < navItems.length - 1 && (
                <span className="mx-2 text-cyan-400">|</span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400">All rights reserved.</span> Any Technology Pte Ltd.
        </p>
        <Link href="#">
          <span className="text-blue-400 hover:underline cursor-pointer">
            Privacy Policy
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
