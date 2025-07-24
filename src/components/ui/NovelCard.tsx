interface NovelCardProps {
  title: string;
  genre: string;
  image: string;
  alt: string;
  href: string;
}

export default function NovelCard({ title, genre, image, alt, href }: NovelCardProps) {
  return (
    <a href={href} className="group block rounded-lg overflow-hidden shadow hover:shadow-md bg-white dark:bg-gray-900">
      <img src={image} alt={alt} className="w-full h-60 object-cover transition group-hover:scale-105 duration-300" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-indigo-500 mt-1">{genre}</p>
      </div>
    </a>
  );
}
