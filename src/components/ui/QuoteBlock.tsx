interface QuoteBlockProps {
  text: string;
  author?: string;
}

export default function QuoteBlock({ text, author }: QuoteBlockProps) {
  return (
    <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-800 dark:text-gray-200 my-6">
      <p>“{text}”</p>
      {author && (
        <cite className="block mt-2 text-sm text-gray-500 dark:text-gray-400">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}
