import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { globalCards } from "@/src/views/blogs/Global";

type BlogSuggestionsProps = {
  currentSlug: string;
  maxSuggestions?: number;
};

function getBlogSuggestions(currentSlug: string, maxSuggestions = 3) {
  const currentCard = globalCards.find(card => card.slug === currentSlug);
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
    .filter(card => card.slug !== currentSlug)
    .map(card => {
      const cardHighlights = card.highlights ?? [];
      const cardCategory = card.category ?? "";
      const cardTitle = card.title ?? "";

      const cardText = `${cardHighlights.join(" ")} ${cardCategory} ${cardTitle}`.toLowerCase();

      const score = uniqueKeywords.reduce(
        (acc, word) => (cardText.includes(word) ? acc + 1 : acc),
        0
      );

      return { ...card, score };
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
            key={card.slug}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
            onClick={() => router.push(`/blogs/${card.slug}`)}
          >
            <Image src={card.image} alt={card.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-[#2b3b4b]">{card.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{card.highlights?.join(", ")}</p>
            {/* Optionally show category */}
            <p className="text-xs text-gray-500">{card.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSuggestions;