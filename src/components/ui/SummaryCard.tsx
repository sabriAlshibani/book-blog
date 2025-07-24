interface SummaryCardProps {
  title: string;
  snippet: string;
  href: string;
}

export default function SummaryCard({ title, snippet, href }: SummaryCardProps) {
  return (
    <a href={href} className="block border rounded-lg p-4 bg-white dark:bg-gray-800 hover:shadow">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{snippet}</p>
    </a>
  );
}
