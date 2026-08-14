
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Fandom from "@/components/Fandom";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Fandom />
      <Contact />
    </div>
  );
};

export default Index;
