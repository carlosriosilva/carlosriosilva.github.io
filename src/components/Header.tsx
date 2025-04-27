
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-[#1A1F2C]">
          Carlos Silva
        </a>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/carlosriosilva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#0f172a] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#0f172a] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:carlos.silvario41@email.com"
            className="text-gray-600 hover:text-[#0f172a] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <Button
            variant="default"
            className="bg-[#0f172a] hover:bg-[##33310b] text-white"
          >
            Download CV
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
