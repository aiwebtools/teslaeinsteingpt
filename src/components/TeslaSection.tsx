import { motion } from "framer-motion";
import { Zap, Lightbulb, Power } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeslaSection = () => {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-8 sm:w-12 h-8 sm:h-12 text-purple-500" />
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Nikola Tesla GPT
                </h2>
              </div>
              
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                Journey through the electrifying world of innovation with the genius who powered our modern world. Explore electric motors, wireless power transmission, and the fundamentals of AC electricity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-300">Electrical Engineering Mastery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Power className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-300">Wireless Power Innovation</span>
                </div>
              </div>
              
              <Button size="sm" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700" asChild>
                <a href="https://chatgpt.com/g/g-WxzzX6eYT-tesla-gpt">
                  Start Learning Electronics
                </a>
              </Button>
            </div>
            
            <div className="flex-1 relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <div className="aspect-square rounded-full bg-gradient-to-br from-purple-500/20 via-purple-600/10 to-transparent border border-purple-500/30 p-8">
                  <Zap className="w-full h-full text-purple-500" />
                </div>
                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeslaSection;
