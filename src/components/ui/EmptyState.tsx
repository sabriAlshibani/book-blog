interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400 py-10">
      <p>{message}</p>
    </div>
  );
}
