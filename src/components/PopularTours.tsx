import { ArrowRight } from "lucide-react";
import TourCard, { TourProps } from "./TourCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PopularTours = () => {
  const tours: TourProps[] = [
    {
      id: "1",
      title: "Горный Алтай: природа и панорамы",
      image: "/placeholder.svg",
      location: "Алтай",
      duration: "7 дней",
      price: 45000
    },
    {
      id: "2",
      title: "Байкальские берега",
      image: "/placeholder.svg",
      location: "Байкал",
      duration: "10 дней",
      price: 65000
    },
    {
      id: "3",
      title: "Сочи: море и горы",
      image: "/placeholder.svg",
      location: "Сочи",
      duration: "5 дней",
      price: 35000
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Популярные туры</h2>
            <p className="text-gray-600">Выбор наших путешественников</p>
          </div>
          <Link to="/tours">
            <Button variant="ghost" className="gap-2">
              Все туры <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
