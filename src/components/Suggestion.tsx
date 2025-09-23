import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { globalCards } from "@/src/views/blogs/Global";

type BlogSuggestionsProps = {
    currentSlug: string;
    maxSuggestions?: number;
};

function getBlogSuggestions(currentSlug: string, maxSuggestions = 3) {
    const currentCard = globalCards.find(card => card.id === currentSlug);
    if (!currentCard) return [];

    // Combine relevant fields and tokenize into keywords
    const currentHighlights = currentCard.highlights ?? [];
    const currentCategory = currentCard.category ?? "";
    const currentTitle = currentCard.title ?? "";

    const keywords = [
        ...currentHighlights.join(" ").toLowerCase().split(/\W+/),
        ...currentCategory.toLowerCase().split(/\W+/),
        ...currentTitle.toLowerCase().split(/\W+/),
    ].filter(word => word.length > 2); // Remove very short/trivial words

    const uniqueKeywords = [...new Set(keywords)];

    const scored = globalCards
        .filter(card => card.id !== currentSlug)
        .map(card => {
            const cardHighlights = card.highlights ?? [];
            const cardCategory = card.category ?? "";
            const cardTitle = card.title ?? "";

            const cardText = `${cardHighlights.join(" ")} ${cardCategory} ${cardTitle}`.toLowerCase();

            const score = uniqueKeywords.reduce(
                (acc, word) => (cardText.includes(word) ? acc + 1 : acc),
                0
            );

            return { ...card, score, category: cardCategory };
        })
        .filter(card => card.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, maxSuggestions);

    return scored;
}


const BlogSuggestions: React.FC<BlogSuggestionsProps> = ({ currentSlug, maxSuggestions = 3 }) => {
    const router = useRouter();
    const suggestions = getBlogSuggestions(currentSlug, maxSuggestions);

    if (suggestions.length === 0) return null;

    return (
        <section className="pt-8 pb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center text-[#243559]">
                You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {suggestions.map(card => (
                    <div
                        key={card.id}
                        className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                        onClick={() => router.push(`/blogs/${card.id}`)}
                    >
                        <div className="overflow-hidden rounded-md mb-4">
                            <Image
                                src={card.image}
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

                        <p className="text-sm text-gray-600 mb-4">{card.highlights?.join(", ")}</p>

                        <button
                            onClick={() => router.push(`/blogs/${card.id}`)}
                            className="inline-block text-white bg-primary hover:bg-blue-700 transition-all duration-300 px-4 py-2 rounded-md text-sm font-semibold"
                            aria-label={`Read more about ${card.title}`}
                        >
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSuggestions;