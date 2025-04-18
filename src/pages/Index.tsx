import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularTours from "@/components/PopularTours";
import SubscribeSection from "@/components/SubscribeSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PopularTours />
        <AboutSection />
        <TestimonialsSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
