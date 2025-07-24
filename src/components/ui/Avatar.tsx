interface AvatarProps {
  name: string;
  image: string;
}

export default function Avatar({ name, image }: AvatarProps) {
  return (
    <div className="flex items-center gap-3">
      <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
      <span className="text-sm font-medium text-gray-800 dark:text-white">{name}</span>
    </div>
  );
}
