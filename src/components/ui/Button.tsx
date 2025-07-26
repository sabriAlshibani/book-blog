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
  const baseStyles = 'rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-gray-900 text-white hover:scale-105 active:scale-95',
    secondary: 'bg-gray-200 text-gray-800 hover:scale-105 active:scale-95',
    outline: 'border-2 border-blue-600 text-blue-600 hover:scale-105 active:scale-95'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    href ?
      (<a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </a>) :
      (<button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>)
  );
}