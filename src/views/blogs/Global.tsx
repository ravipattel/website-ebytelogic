"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  FaCalendarAlt,
} from "react-icons/fa";

import Button from "@/src/components/Button";

const itemsPerPage = 6;

const Global = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentCards = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-16 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4">
        <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText text-center leading-tight">
          Technology news
        </h2>
        {blogs.length ? (<div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
            {currentCards.map((card, index) => (
              <div
                key={index}
                onClick={() => router.push(`/blogs/${card.slug}`)}
                className="cursor-pointer max-w-[436px] mx-auto w-full bg-white border border-gray-200 shadow-[rgba(0,0,0,0.1)_0px_5px_25px] flex flex-col"
              >
                <Image
                  width={500}
                  height={500}
                  src={card.cover_image}
                  alt={card.title}
                  className={`object-fill w-[436px] h-[363px]`}
                />
                <div className="space-y-4 text-primaryText p-7">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-primary text-sm" />
                    {/* <span className="text-sm text-[#757b82]">{new Date(card.created_at).toLocaleDateString()}</span> */}
                    <span className="text-sm text-[#757b82]">
                      {formatDate(card.created_at)}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-lg leading-normal cursor-pointer hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-10">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 text-secondary !h-[34px] !bg-[#F4F5F5] !border-[#F4F5F5] hover:!bg-primary hover:!border-primary hover:text-white transition duration-400 text-sm rounded `}
            >
              Prev
            </Button>

            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`!py-0 !px-3 border text-sm !h-[34px] rounded ${currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "!bg-[#F4F5F5] hover:!bg-primary !border-[#F4F5F5] hover:!border-primary !text-secondary hover:!text-white"
                  }`}
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 text-secondary !h-[34px] !bg-[#F4F5F5] !border-[#F4F5F5] hover:!bg-primary hover:!border-primary hover:text-white transition duration-400 text-sm rounded `}
            >
              Next
            </Button>
          </div>
        </div>
        ) :
          (
            <div className="text-center flex items-center justify-center border border-[#E2E8F0] rounded-lg py-24 mt-10">
              <h3 className="text-gray-500">
                Blogs Not Found
              </h3>
            </div>
          )}
      </div>
    </section>
  );
};

export default Global;
