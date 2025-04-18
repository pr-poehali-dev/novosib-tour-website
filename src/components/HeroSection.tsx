import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <div className="relative min-h-[500px] flex items-center hero-pattern">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Открывайте мир с туристическим агентством НовосибТур
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Официальное турагентство в Новосибирске. Организуем незабываемые путешествия по всей России и миру.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg">Подобрать тур</Button>
            <Button size="lg" variant="outline">Спецпредложения</Button>
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
