
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import EinsteinSection from "@/components/EinsteinSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <EinsteinSection />
        <section id="video" className="py-20 px-4">
          <VideoSection />
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
