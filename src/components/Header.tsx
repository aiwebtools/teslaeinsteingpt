
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Zap, Atom } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <NavigationMenu className="max-w-full w-full justify-between">
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <Zap className="w-8 h-8 text-purple-500" />
                  <Atom className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-left">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Nikola Tesla GPT & Albert Einstein GPT
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
            <NavigationMenuItem className="flex gap-4 ml-auto">
              <Button variant="ghost" asChild>
                <a href="https://chatgpt.com/g/g-srijCvGOl-nikola-teslagpt">
                  Speak to Nikola Tesla
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="https://chatgpt.com/g/g-67ad4fee897c8191b525da37ebe26bb5-albert-einstein-gpt">
                  Speak to Albert Einstein GPT
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#faq">FAQ</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#disclaimer">Disclaimer</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="https://www.aiwebtools.ai">More AI Tools</a>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;

