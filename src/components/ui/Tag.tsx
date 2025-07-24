interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-indigo-800 dark:text-indigo-100">
      {text}
    </span>
  );
}
