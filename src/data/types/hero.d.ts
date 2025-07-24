export interface HeroData {
  heading: string;
  highlight?: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
}