export default function Footer() {
  return (
    <footer className="bg-[#2B2118] text-white px-16 py-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-3xl font-serif text-[#D8C4B0]">
          <a href="#top">ANZU</a>
        </h2>

        <nav className="flex gap-10 text-sm text-white/60">
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="text-sm text-white/40">
          © 2026 ANZU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}