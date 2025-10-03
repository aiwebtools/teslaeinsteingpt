
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Button variant="link" className="text-gray-200 hover:text-white" asChild>
                <a href="https://chatgpt.com/g/g-srijCvGOl-nikola-teslagpt">
                  Speak to Nikola Tesla
                </a>
              </Button>
              <Button variant="link" className="text-gray-200 hover:text-white" asChild>
                <a href="https://chatgpt.com/g/g-67ad4fee897c8191b525da37ebe26bb5-albert-einstein-gpt">
                  Speak to Albert Einstein GPT
                </a>
              </Button>
              <Button variant="link" className="text-gray-200 hover:text-white" asChild>
                <a href="https://alanwattsgpt.lovable.app/">
                  Speak to Alan Watts GPT
                </a>
              </Button>
              <Button variant="link" className="text-gray-200 hover:text-white" asChild>
                <a href="#faq">FAQ</a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <div className="flex flex-col gap-2">
              <Button variant="link" className="text-gray-200 hover:text-white" asChild>
                <a href="https://openai.com/policies/privacy-policy/">Privacy Policy</a>
              </Button>
              <Button variant="link" className="text-gray-200 hover:text-white" asChild>
                <a href="https://aiwebtools.ai/terms-of-services">Terms of Service</a>
              </Button>
              <Button variant="link" className="text-gray-200 hover:text-white" asChild>
                <a href="#disclaimer">Disclaimer</a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:4758008096" className="text-gray-200 hover:text-white transition-colors">
                (475) 800-8096
              </a>
              <a href="mailto:Contact@ai-webtools.com" className="text-gray-200 hover:text-white transition-colors">
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
          <a href="https://www.aiwebtools.ai" className="text-gray-200 hover:text-white transition-colors">
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
          <Button className="rounded-full bg-purple-600 hover:bg-purple-700" asChild>
            <a href="https://www.ai-webtools.com">More AI Tools</a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
