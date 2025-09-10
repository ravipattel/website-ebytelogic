'use client';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { useState } from "react";
import {
  FaTwitter,
  FaPhoneSquareAlt, FaRegClock, FaSearch,
  FaLinkedinIn,
  FaYoutube,
  FaGoogle
} from "react-icons/fa";
import { IoMdMail, IoMdMenu, IoMdClose, IoLogoGithub } from "react-icons/io";

import Button from "@/src/components/Button";

import LogoPng from '@/src/assets/images/logo.png';
import AndroidIconPng from '@/src/assets/images/icons/androidIcon.png';
import FrameworkIconPng from '@/src/assets/images/icons/frameworkIcon.png';
import LinuxIconPng from '@/src/assets/images/icons/linuxIcon.png';
import SdkIconPng from '@/src/assets/images/icons/sdk.png';
import SoftwareIconPng from '@/src/assets/images/icons/softwareIcon.png';
import QaIconPng from '@/src/assets/images/icons/qaIcon.png';

interface MenuItem {
  label: string;
  path: string;
  icon?: StaticImageData;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: "Home", path: "/" },
  // { label: "Preview", path: "/preview" },
  {
    label: "Our Company",
    path: "#",
    subItems: [
      { label: "About Us", path: "/about" },
      { label: "Blogs", path: "/blogs" },
      { label: "FAQs", path: "/faqs" },
    ],
  },
  {
    label: "Services",
    path: "/services",
    subItems: [
      { icon: SoftwareIconPng, label: "Embedded App Development", path: "/services/embedded-software" },
      { icon: LinuxIconPng, label: "Linux BSPs & Hardware Bring-Up", path: "/services/linux-bsp-android" },
      { icon: FrameworkIconPng, label: "Multimedia & Streaming Frameworks", path: "/services/multimedia-framework" },
      { icon: AndroidIconPng, label: "IoT & Cloud Integration", path: "/services/iot-integration" },
      { icon: QaIconPng, label: "Embedded QA & Test Automation", path: "/services/qa-validation" },
      { icon: SdkIconPng, label: "AV Protocol & Codec Engineering", path: "/services/av-protocol" },
    ],
  },
  {
    label: "Our Work",
    path: "#",
    subItems: [
      { label: "Industry", path: "/industries" },
      { label: "Case-Study", path: "/case-study" },
    ],
  },
  { label: "Contact Us", path: "/contact-us" },
];

const socialLinks = [
  { Icon: FaLinkedinIn, href: "https://in.linkedin.com/company/ebytelogic" },
  { Icon: FaGoogle, href: "https://www.google.com/search?q=ebytelogic&oq=ebytelogic&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg8MgYIAhBFGDwyCggDEAAYgAQYogQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDQ2OTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setExpandedMenu(prev => (prev === label ? null : label));
  };

  return (
    <>
      <nav className="bg-[#243559] py-1.5">
        <div className="max-w-[1400px] mx-auto text-sm px-4 py-2 flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-wrap gap-4 text-xs md:text-sm">
            <a href="mailto:Contact@ebytelogic.com" className="flex items-center gap-1 text-[#CCCCCC]">
              <IoMdMail className="text-white" /> Contact@ebytelogic.com
            </a>
            <a href="tel:+919033223700" className="flex items-center gap-1 text-[#CCCCCC]">
              <FaPhoneSquareAlt className="text-white" /> +91 90332 23700
            </a>
            <div className="flex items-center gap-1 text-[#CCCCCC] cursor-pointer">
              <FaRegClock className="text-white" /> Mon - Fri: 10:00 - 18:00
            </div>
          </div>
          <div className="flex gap-2">
            {socialLinks.map(({ Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                className="bg-primary hover:bg-[#205ed1] transition-all duration-200 h-6 w-6 flex items-center justify-center rounded-sm"
              >
                <Icon className="text-white text-sm" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <header className="sticky top-0 left-0 z-[99999] bg-white/90">
        <div className="py-2 shadow-lg relative z-50">
          <div className="max-w-[1400px] mx-auto px-3 flex justify-between items-center">
            <Link
              href={'/'} >
              <Image src={LogoPng} alt="Logo" width={200} height={35} className="md:w-56 md:h-14" />
            </Link>
            <nav className="hidden md:block relative">
              <ul className="flex flex-wrap items-center gap-3 lg:gap-6">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative group cursor-pointer flex flex-col items-start group-item"
                  >
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.path}
                        className={`relative text-sm lg:text-base font-medium flex items-center
    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:w-0 after:transition-all after:duration-300
    hover:after:w-full
 ${item.path === '/'
                            ? pathname === '/'
                              ? 'text-primary'
                              : 'text-[#444444]'
                            : pathname.startsWith(item.path)
                              ? 'text-primary'
                              : 'text-[#444444]'
                          }
    hover:text-primary`}
                      >
                        {item.label}
                      </Link>
                    </div>
                    {item.subItems && (
                      <ul className={`p-4 space-y-3 absolute top-16 -left-10 w-56 bg-white shadow-xl border-t-4 border-primary opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:top-10 transition-all duration-700 ease-in-out z-50 rounded-md`}>
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="relative group/services">
                            <Link
                              href={subItem.path}
                              className="text-sm text-gray-700 hover:text-primary transition-all flex gap-2 items-center"
                            >
                              {'icon' in subItem && subItem.icon && (
                                <Image src={subItem.icon} alt={subItem.label} height={20} width={20} />
                              )}
                              {subItem.label}
                            </Link>
                            {subItem.subItems && (
                              <ul className="absolute left-52 top-0 ml-2 w-72 bg-white shadow-lg border-t-4 border-primary opacity-0 group-hover/services:opacity-100 invisible group-hover/services:visible transition-all duration-300 ease-in-out rounded-md p-4 space-y-3 z-50">
                                {subItem.subItems.map((childItem, childIndex) => (
                                  <li key={childIndex}>
                                    <Link
                                      href={childItem.path}
                                      className="text-sm text-gray-700 hover:text-primary transition-all flex items-center gap-2"
                                    >
                                      {'icon' in childItem && childItem.icon && (
                                        <Image src={childItem.icon} alt={childItem.label} height={20} width={20} />
                                      )}
                                      {childItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <Button onClick={() => router.push('/contact-us')} variant="default">Get In Thouch</Button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(true)} className="text-2xl text-gray-800">
                <IoMdMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-[100000] p-5 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-6">
          <Image src={LogoPng} alt="Logo" width={120} height={40} className="w-[120px] h-10" />
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-700">
            <IoMdClose />
          </button>
        </div>
        <ul className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className="w-full text-left text-[#243559] font-medium text-base flex justify-between items-center py-2"
                  >
                    {item.label}
                    <span className="text-xl">{expandedMenu === item.label ? '−' : '+'}</span>
                  </button>
                  {expandedMenu === item.label && (
                    <ul className="ml-3 mt-1 space-y-2 border-l-2 border-gray-200 pl-3">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.path}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 text-sm block py-1 hover:text-primary"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#243559] font-medium text-base block py-2"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-4 items-center">
          <Button onClick={() => router.push('/contact-us')} variant="default">Get In Thouch</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
