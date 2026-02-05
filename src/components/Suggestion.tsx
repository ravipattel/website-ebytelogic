"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogSuggestions = ({ suggestionsBlogs,}: { suggestionsBlogs: any[];}) => {
    const router = useRouter();
    if (!suggestionsBlogs?.length) return null;

    return (
     <section className="pt-8 pb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center text-[#243559]">
                You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {suggestionsBlogs.map(card => (
                    <div
                        key={card.slug}
                        className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                        onClick={() => router.push(`/blogs/${card.slug}`)}
                    >
                        <div className="overflow-hidden rounded-md mb-4">
                            <Image
                                src={card.cover_image}
                                width={500}
                                height={500}
                                alt={card.title}
                                className="w-full h-64 object-cover rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-[#2b3b4b] mb-2">{card.title}</h3>

                        {card.category && (
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-2">
                                {card.category}
                            </span>
                        )}
                         {card.excerpt && (
                                <p className="text-sm text-gray-500 p-3">{card.excerpt}</p>
                        )}
                        <div>
                            <button
                                onClick={() => router.push(`/blogs/${card.id}`)}
                                className="inline-block text-white bg-primary hover:bg-blue-700 transition-all duration-300 px-4 py-2 rounded-md text-sm font-semibold"
                                aria-label={`Read more about ${card.title}`}
                            >
                                Read More
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSuggestions;