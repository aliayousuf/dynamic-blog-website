
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

export const Footer: React.FC = () => {
  const explorateLinks = [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/#blogsList" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <footer className="flex flex-col items-center px-5 py-12 bg-blue-200 text-blue-600">
      <div className="w-full max-w-[1162px]">
        <div className="flex flex-row flex-wrap justify-between gap-10 md:gap-5 max-lg:flex-col max-lg:items-center">
          {/* Contact Section */}
          <div className="flex flex-col w-1/4 lg:w-1/3 md:w-1/2 max-lg:w-full max-lg:items-center">
          <h3 className="text-lg font-bold text-blue-600 lg:text-xl max-lg:text-center">
            Contact
            </h3>
         <p className="mt-4 text-sm lg:text-base">
            aliayousuf.izzat@gmail
          </p>
         <p className="mt-5 text-sm lg:text-base">
          +944 450 904 505
          </p>
          </div>


          {/* Links */}
          <div className="flex flex-col w-1/5 lg:w-1/4 md:w-1/2 max-lg:w-full max-lg:items-center">
           <h3 className="text-lg font-bold text-blue-600 lg:text-xl max-lg:text-center">
           Useful Links
            </h3>
            <ul className="mt-4 space-y-2 max-lg:text-center">
              {explorateLinks.map((link, index) => (
             <li key={index}>
              <Link
             href={link.href}
              className="text-sm lg:text-base hover:underline"
               >
                {link.text}
              </Link>
             </li>
                ))}
               </ul>
               </div>


          {/* Connections Section */}
          <div className="flex flex-col w-1/4 lg:w-1/3 md:w-1/2 max-lg:w-full max-lg:items-center">
            <h3 className="text-lg font-bold text-blue-600 lg:text-xl max-lg:text-center">
              Connections
            </h3>
            <div className="flex gap-4 mt-4 max-lg:justify-center">
              <Link href={"https://www.facebook.com/"}>
                <CiFacebook className="text-2xl lg:text-3xl hover:text-blue-500" />
              </Link>
              <Link href={"https://www.instagram.com/"}>
                <FaInstagram className="text-2xl lg:text-3xl hover:text-pink-500" />
              </Link>
              <Link href={"https://www.linkedin.com/"}>
                <CiLinkedin className="text-2xl lg:text-3xl hover:text-blue-700" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
