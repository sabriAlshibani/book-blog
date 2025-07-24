interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md">
      {icon && <div className="mb-3 text-indigo-600 text-3xl">{icon}</div>}
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </div>
  );
}
