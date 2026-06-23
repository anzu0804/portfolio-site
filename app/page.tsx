import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Process from "../components/Process";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Works />
      <Process />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}