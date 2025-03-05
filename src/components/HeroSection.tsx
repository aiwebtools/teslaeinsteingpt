
import { motion } from "framer-motion";
import { Zap, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import ElectricParticles from "./ElectricParticles";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <ElectricParticles />
      <div className="absolute inset-0 bg-grid-white/10 bg-grid [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Zap className="w-20 h-20 text-purple-500" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Nikola Tesla GPT
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Unleash the power of scientific discovery with the visionary mind of Nikola Tesla. 
            Experience breakthrough innovations and explore the frontiers of technology.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <a href="https://chatgpt.com/g/g-srijCvGOl-nikola-teslagpt">
                Start Inventing
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#how-it-works">Learn More</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
