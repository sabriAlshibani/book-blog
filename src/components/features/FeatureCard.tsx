interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
      <div className="mb-4 flex justify-center">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
