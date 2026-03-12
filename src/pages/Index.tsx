
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import TeslaSection from "@/components/TeslaSection";
import EinsteinSection from "@/components/EinsteinSection";
import EinsteinVideoSection from "@/components/EinsteinVideoSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import DisclaimerDialog from "@/components/DisclaimerDialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <DisclaimerDialog />
      <Header />
      <main>
        {/* SEO-optimized hidden content for search engines */}
        <div className="sr-only">
          <h1>Free AI Tools by AIWEBTOOLS.AI - Tesla GPT & Einstein GPT</h1>
          <h2>Revolutionary AI Conversations with Historical Scientific Minds</h2>
          <p>AIWEBTOOLS.AI presents free AI tools including Tesla GPT and Einstein GPT for educational purposes. Experience breakthrough innovations in artificial intelligence conversations with Nikola Tesla and Albert Einstein AI models.</p>
          <h3>AI WEB TOOLS - Leading Provider of Free AI Technology</h3>
          <p>Discover powerful AI tools for education, physics, electrical engineering, and scientific research. Our custom GPT models provide interactive learning experiences.</p>
        </div>
        
        <HeroSection />
        <section id="video" className="py-20 px-4">
          <VideoSection />
        </section>
        <TeslaSection />
        <div className="container mx-auto">
          <hr className="border-white/10 my-20" />
        </div>
        <EinsteinSection />
        <section className="py-20 px-4 bg-black/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              Learn from Einstein - Free AI Educational Tools
            </h2>
            <EinsteinVideoSection />
          </div>
        </section>
        <section id="faq" className="py-20 px-4">
          <FAQSection />
        </section>
        <section id="disclaimer" className="py-20 px-4">
          <DisclaimerSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
