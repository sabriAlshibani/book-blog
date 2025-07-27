  export const handleScroll = (setIsScrolled:(scrolled:boolean) => void,
setSectionActive:(id:string) => void
) => {
    setIsScrolled(window.scrollY > 50);

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // offset from top
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setSectionActive(`#${section.id}`);
      }
    });
  };

   export const toggleMenu = (e:React.MouseEvent<HTMLButtonElement>,setIsMenuOpen:(isOpen:boolean) => void,open:boolean) => {
    setIsMenuOpen(!open);
  };

    export const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  