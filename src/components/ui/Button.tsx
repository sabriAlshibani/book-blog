interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'rounded-2xl font-medium transition-all duration-300 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-gray-900 text-white hover:scale-105 active:scale-95',
    secondary: 'bg-gray-200 text-gray-800 hover:scale-105 active:scale-95',
    outline: 'border border-gray-200 text-gray-500 hover:scale-105 active:scale-95'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3.5 text-lg'
  };

  return href ? (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  ) : (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
