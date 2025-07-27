import { ArrowUp } from 'lucide-react';

interface ScrollTopProps {
  scrolled: boolean;
  onClick: () => void;
}

export default function ScrollTop({ scrolled, onClick }: ScrollTopProps) {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 z-50 p-3 rounded-full 
        bg-primary text-white shadow-lg 
        transition-opacity duration-300
        ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
