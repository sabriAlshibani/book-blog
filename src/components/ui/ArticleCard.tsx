interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  readingTime?: string;
  href: string;
}

export default function ArticleCard({ title, description, date, readingTime, href }: ArticleCardProps) {
  return (
    <a href={href} className="block border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow transition">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        {date} • {readingTime}
      </div>
    </a>
  );
}
