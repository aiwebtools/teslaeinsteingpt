import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Atom, ExternalLink, HelpCircle, AlertCircle, Wrench, Menu, X } from "lucide-react";

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 w-full">
      <nav className="container mx-auto px-4 py-3 max-w-7xl">
        {/* Top bar: Logo + Hamburger */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <Zap className="w-6 h-6 text-purple-500" />
              <Atom className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-left">
              <h1 className="text-sm sm:text-base font-bold tracking-tight leading-tight">
                <span className="text-purple-500 font-extrabold drop-shadow-[0_0_0.3rem_#9333ea70]">NIKOLA TESLA GPT</span>
                <span className="text-white/90 font-bold mx-1">&</span>
                <span className="text-blue-500 font-extrabold drop-shadow-[0_0_0.3rem_#3b82f670]">EINSTEIN GPT</span>
              </h1>
              <a 
                href={AIWEBTOOLS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-xs text-gray-400 hover:text-white transition-colors"
              >
                Presented by AiWebTools.Ai
              </a>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="secondary" size="sm" className="bg-purple-600 hover:bg-purple-700 text-white border-none text-xs" asChild>
              <a href="https://chatgpt.com/g/g-srijCvGOl-nikola-teslagpt" target="_blank" rel="noopener noreferrer">
                <Zap className="w-3 h-3" />
                Tesla GPT
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
            <Button variant="secondary" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none text-xs" asChild>
              <a href="https://chatgpt.com/g/g-67ad4fee897c8191b525da37ebe26bb5-albert-einstein-gpt" target="_blank" rel="noopener noreferrer">
                <Atom className="w-3 h-3" />
                Einstein GPT
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs" asChild>
              <a href="#faq">
                <HelpCircle className="w-3 h-3" />
                FAQ
              </a>
            </Button>
            <Button variant="outline" size="sm" className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs" asChild>
              <a href="#disclaimer">
                <AlertCircle className="w-3 h-3" />
                Info
              </a>
            </Button>
            <Button variant="outline" size="sm" className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs" asChild>
              <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer">
                <Wrench className="w-3 h-3" />
                More AI Tools
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white hover:text-purple-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 pb-2 animate-in slide-in-from-top-2 duration-200">
            <Button variant="secondary" size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white border-none text-sm justify-start" asChild>
              <a href="https://chatgpt.com/g/g-srijCvGOl-nikola-teslagpt" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <Zap className="w-4 h-4" />
                Tesla GPT
                <ExternalLink className="w-3 h-3 ml-auto" />
              </a>
            </Button>
            <Button variant="secondary" size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none text-sm justify-start" asChild>
              <a href="https://chatgpt.com/g/g-67ad4fee897c8191b525da37ebe26bb5-albert-einstein-gpt" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <Atom className="w-4 h-4" />
                Einstein GPT
                <ExternalLink className="w-3 h-3 ml-auto" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className="w-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/50 text-sm justify-start" asChild>
              <a href="#faq" onClick={closeMenu}>
                <HelpCircle className="w-4 h-4" />
                FAQ
              </a>
            </Button>
            <Button variant="outline" size="sm" className="w-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/50 text-sm justify-start" asChild>
              <a href="#disclaimer" onClick={closeMenu}>
                <AlertCircle className="w-4 h-4" />
                Info
              </a>
            </Button>
            <Button variant="outline" size="sm" className="w-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/50 text-sm justify-start" asChild>
              <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <Wrench className="w-4 h-4" />
                More AI Tools
                <ExternalLink className="w-3 h-3 ml-auto" />
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
