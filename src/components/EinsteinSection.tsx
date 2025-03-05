
import { motion } from "framer-motion";
import { Atom, Brain, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const EinsteinSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Atom className="w-12 h-12 text-blue-500" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Albert Einstein GPT
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 mb-6">
                Explore the mysteries of space, time, and relativity with the mind that revolutionized physics. Dive deep into quantum mechanics, gravitational waves, and the fabric of reality itself.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-300">Quantum Physics Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-300">Advanced Physics Education</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="https://chatgpt.com/g/g-67ad4fee897c8191b525da37ebe26bb5-albert-einstein-gpt">
                  Start Learning Physics
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
                <div className="aspect-square rounded-full bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent border border-blue-500/30 p-8">
                  <Atom className="w-full h-full text-blue-500" />
                </div>
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EinsteinSection;
