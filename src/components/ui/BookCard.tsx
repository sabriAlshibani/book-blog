interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  alt: string;
  href: string;
}

export default function BookCard({ title, author, cover, alt, href }: BookCardProps) {
  return (
    <a href={href} className="block rounded-lg overflow-hidden shadow hover:shadow-md bg-white dark:bg-gray-900">
      <img src={cover} alt={alt} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">by {author}</p>
      </div>
    </a>
  );
}
