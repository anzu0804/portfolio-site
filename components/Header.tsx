"use client";

import { useState } from "react";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    
<header className="fixed top-0 left-0 w-full z-50 bg-[#F7F4F2]/90 backdrop-blur-sm border-b border-[#E8DED4] px-5 py-4 md:px-16 md:py-8">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <a href="#">
  
<h1 className="text-3xl md:text-5xl font-serif text-[#A67C52]">

    ANZU
  </h1>
</a>


<button
  type="button"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
  aria-expanded={isMenuOpen}
  aria-controls="mobile-navigation"
  className="md:hidden text-3xl text-[#A67C52]"
>
  {isMenuOpen ? "×" : "☰"}
</button>

        <nav className="hidden md:block" aria-label="メインナビゲーション">
          <ul className="flex gap-12 text-sm tracking-wider">
            <li><a href="#about" className="hover:text-[#A67C52] transition-colors duration-300">About</a></li>
            <li><a href="#works" className="hover:text-[#A67C52] transition-colors duration-300">Works</a></li>
            <li><a href="#skills" className="hover:text-[#A67C52] transition-colors duration-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-[#A67C52] transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>



{isMenuOpen && (
  <nav
    id="mobile-navigation"
    aria-label="スマホ用ナビゲーション"
    className="md:hidden absolute top-full left-0 w-full bg-[#F7F4F2] border-b border-[#E8DED4] shadow-md"
  >
    <ul className="flex flex-col items-center gap-6 py-8">
      {[
        { label: "About", href: "#about" },
        { label: "Works", href: "#works" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
      ].map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-[#A67C52] hover:opacity-70 transition"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)}


      </div>
    </header>
  );
}