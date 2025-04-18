import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export interface TourProps {
  id: string;
  title: string;
  image: string;
  location: string;
  duration: string;
  price: number;
}

const TourCard = ({ title, image, location, duration, price }: TourProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-2 pb-2">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-1" />
          <span>{duration}</span>
        </div>
        <div className="text-lg font-bold text-nsktour-primary">
          от {price.toLocaleString()} ₽
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
