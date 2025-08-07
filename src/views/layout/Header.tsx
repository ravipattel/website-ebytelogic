'use client';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { useState } from "react";
import {
  FaTwitter,
  FaPhoneSquareAlt, FaRegClock, FaSearch,
  FaLinkedinIn,
  FaYoutube
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
      {
        label: "Services",
        path: "/services",
        subItems: [
          { icon: SoftwareIconPng, label: "Embedded Software", path: "/services/0" },
          { icon: LinuxIconPng, label: "Linux BSP & Android", path: "/services/1" },
          { icon: FrameworkIconPng, label: "Multimedia Framework", path: "/services/2" },
          { icon: AndroidIconPng, label: "Mobile App Development", path: "/services/3" },
          { icon: QaIconPng, label: "QA & Validation", path: "/services/4" },
          { icon: SdkIconPng, label: "Middleware SDK", path: "/services/5" },
        ],
      },
      { label: "Blogs", path: "/blogs" },
      { label: "FAQs", path: "/faqs" },
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


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-[#243559] py-1.5">
        <div className="max-w-[1400px] mx-auto text-sm px-6 py-2 flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-wrap gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-1 text-[#CCCCCC] cursor-pointer">
              <IoMdMail className="text-white" /> connect@ebyteLogic.com
            </div>
            <div className="flex items-center gap-1 text-[#CCCCCC] cursor-pointer">
              <FaPhoneSquareAlt className="text-white" /> +91-9876543210
            </div>
            <div className="flex items-center gap-1 text-[#CCCCCC] cursor-pointer">
              <FaRegClock className="text-white" /> Mon - Fri: 10:00 - 18:00
            </div>
          </div>
          <div className="flex gap-2">
            {[FaLinkedinIn, FaTwitter, IoLogoGithub, FaYoutube].map((Icon, i) => (
              <div key={i} className="bg-primary hover:bg-[#205ed1] transition-all duration-200 h-6 w-6 flex items-center justify-center rounded-sm cursor-pointer">
                <Icon className="text-white text-sm" />
              </div>
            ))}
          </div>
        </div>
      </nav>
      <header className="sticky top-0 left-0 z-[99999] bg-white/90">
        <div className="px-6 py-4 shadow-lg  relative z-50">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <Link
              href={'/'} >
              <Image src={LogoPng} alt="Logo" width={200} height={45} className="md:w-56 md:h-15" />
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
                      <ul className="p-4 space-y-3 absolute top-20 -left-10 w-56 bg-white shadow-xl border-t-4 border-primary opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:top-14 transition-all duration-300 ease-in-out z-50 rounded-md">
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
                              <ul className="absolute left-52 top-0 ml-2 w-64 bg-white shadow-lg border-t-4 border-primary opacity-0 group-hover/services:opacity-100 invisible group-hover/services:visible transition-all duration-300 ease-in-out rounded-md p-4 space-y-3 z-50">
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
              <button className="text-black text-lg"><FaSearch /></button>
              <Button onClick={() => router.push('/contact-us')} variant="default">It Consultant</Button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(true)} className="text-2xl text-gray-800">
                <IoMdMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-[1000] p-5 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-6">
          <Image src={LogoPng} alt="Logo" width={120} height={40} className="w-[120px] h-10" />
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-700">
            <IoMdClose />
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {["Home", "About Us", "Blogs", "FAQs", "Contact Us"].map((label, idx) => (
            <li
              key={idx}
              className="text-[#444444] text-base font-medium cursor-pointer flex items-center gap-1"
            >
              {label}
              {["Home", "About Us", "Blogs", "FAQs", "Contact Us"].includes(label)}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-4 items-center">
          <button className="text-black text-lg"><FaSearch /></button>
          <Button onClick={() => router.push('/contact-us')} variant="default">It Consultant</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
