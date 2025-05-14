import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import logo from "../../assets/Main_Logo.svg";
import { useNavigate } from "react-router-dom";

const footerData = {
  logo: {
    src: logo,
  },
  description:
    "Empowering small business owners with Dexter’s smarter SEO solutions and real results.",
  sections: {
    company: [
      { name: "About us", path: "/about-us" },
      { name: "Careers", path: "/careers" },
      { name: "Support", path: "/support" },
      { name: "Contact", path: "/contact" },
    ],
    product: [
      { name: "Getting started", path: "/getting-started" },
      { name: "Pricing", path: "/pricing" },
      { name: "FAQ", path: "/faq" },
      { name: "Blog", path: "/blog" },
    ],
    legal: [
      { name: "Terms", path: "/terms" },
      { name: "Privacy", path: "/privacy" },
      { name: "Cookies", path: "/cookies" },
      { name: "Do not share my personal information", path: "/do-not-share" },
    ],
  },
  copyright: "© 2025 MyDexter. All rights reserved.",
  socialLinks: [
    { icon: <FaXTwitter />, alt: "Twitter", path: "/twitter" },
    { icon: <FaLinkedin />, alt: "LinkedIn", path: "/linkedin" },
    { icon: <FaFacebook />, alt: "Facebook", path: "/facebook" },
  ],
};

const Footer = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto">
      <footer className="bg-white mx-auto pt-8 pb-10 border-t border-gray-200">
        <div className="w-[90%] mx-auto md:w-full">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-4">
            {/* Logo and Description */}
            <div className="flex flex-col items-start mb-6 md:mb-0">
              <div className="flex items-center mb-4" onClick={handleHome}>
                <img
                  src={footerData.logo.src}
                  alt="Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-600 w-full md:w-3/4 text-md mt-2">
                {footerData.description}
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
              {Object.entries(footerData.sections).map(
                ([sectionName, links]) => (
                  <div key={sectionName}>
                    <h5 className="text-[#667085] font-medium mb-4 capitalize text-lg md:text-xl">
                      {sectionName}
                    </h5>
                    <ul className="space-y-2">
                      {links.map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link.path}
                            className="text-gray-600 text-sm md:text-md font-medium hover:text-gray-900"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center">
            {/* Copyright */}
            <span className="text-[#667085] text-sm md:text-md">
              {footerData.copyright}
            </span>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center sm:justify-end mt-4 sm:mt-0">
              {footerData.socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.path}
                  className="text-[#98A2B3] text-xl sm:text-2xl mx-2"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
