interface QuoteCardProps {
  quote: string;
  author?: string;
}

export default function QuoteCard({ quote, author }: QuoteCardProps) {
  return (
    <div className="border-l-4 border-indigo-500 pl-4 italic text-gray-800 dark:text-gray-200 my-4">
      <p>“{quote}”</p>
      {author && <p className="text-right text-sm text-gray-500 mt-2">— {author}</p>}
    </div>
  );
}
