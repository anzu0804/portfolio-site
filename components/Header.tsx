export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F7F4F2]/90 backdrop-blur-sm border-b border-[#E8DED4] px-16 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <a href="#">
  <h1 className="text-5xl font-serif text-[#A67C52]">
    ANZU
  </h1>
</a>

        <nav>
          <ul className="flex gap-12 text-sm tracking-wider">
            <li><a href="#about" className="hover:text-[#A67C52] transition-colors duration-300">About</a></li>
            <li><a href="#works" className="hover:text-[#A67C52] transition-colors duration-300">Works</a></li>
            <li><a href="#skills" className="hover:text-[#A67C52] transition-colors duration-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-[#A67C52] transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}