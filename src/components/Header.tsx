
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Zap, Atom, ExternalLink, HelpCircle, AlertCircle, Wrench } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10 w-full">
      <nav className="container mx-auto px-4 py-4 max-w-7xl">
        <NavigationMenu className="max-w-full w-full justify-between">
          <NavigationMenuList className="flex flex-col sm:flex-row gap-4 w-full">
            <NavigationMenuItem className="w-full sm:w-auto">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="flex gap-1">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
                  <Atom className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                </div>
                <div className="text-left">
                  <h1 className="flex flex-col text-lg sm:text-xl font-bold tracking-tight">
                    <span className="text-purple-500 font-extrabold drop-shadow-[0_0_0.3rem_#9333ea70]">
                      NIKOLA TESLA GPT
                    </span>
                    <span className="text-white/90 text-center font-bold text-xl sm:text-2xl">
                      &
                    </span>
                    <span className="text-blue-500 font-extrabold drop-shadow-[0_0_0.3rem_#3b82f670]">
                      ALBERT EINSTEIN GPT
                    </span>
                  </h1>
                  <a 
                    href="https://www.aiwebtools.ai" 
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Presented by AiWebTools.Ai
                  </a>
                </div>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:ml-auto">
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row">
                <Button variant="secondary" size="sm" className="bg-purple-600 hover:bg-purple-700 text-white border-none text-xs sm:text-sm" asChild>
                  <a href="https://chatgpt.com/g/g-srijCvGOl-nikola-teslagpt">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                    Tesla GPT
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </Button>
                <Button variant="secondary" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none text-xs sm:text-sm" asChild>
                  <a href="https://chatgpt.com/g/g-67ad4fee897c8191b525da37ebe26bb5-albert-einstein-gpt">
                    <Atom className="w-3 h-3 sm:w-4 sm:h-4" />
                    Einstein GPT
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row">
                <Button variant="outline" size="sm" className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs sm:text-sm" asChild>
                  <a href="#faq">
                    <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    FAQ
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs sm:text-sm" asChild>
                  <a href="#disclaimer">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    Info
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs sm:text-sm" asChild>
                  <a href="https://www.aiwebtools.ai">
                    <Wrench className="w-3 h-3 sm:w-4 sm:h-4" />
                    Tools
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </Button>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Header;
