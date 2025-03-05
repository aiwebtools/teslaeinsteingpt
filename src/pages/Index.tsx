
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import EinsteinSection from "@/components/EinsteinSection";

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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
