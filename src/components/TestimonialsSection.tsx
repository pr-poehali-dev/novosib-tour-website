import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  tour: string;
  rating: number;
  text: string;
}

const Testimonial = ({ name, tour, rating, text }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={18} 
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
            />
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic">"{text}"</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">Тур: {tour}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Анна Петрова",
      tour: "Горный Алтай",
      rating: 5,
      text: "Потрясающий тур на Алтай! Прекрасная организация, внимательные гиды и захватывающие виды. Обязательно воспользуюсь услугами НовосибТур снова!"
    },
    {
      name: "Сергей Иванов",
      tour: "Байкал",
      rating: 4,
      text: "Очень доволен поездкой на Байкал. Всё было организовано на высшем уровне. Единственное - хотелось бы больше свободного времени для прогулок."
    },
    {
      name: "Мария Сидорова",
      tour: "Сочи",
      rating: 5,
      text: "Замечательный отдых в Сочи! Спасибо НовосибТур за отличную организацию, комфортное размещение и разнообразную программу."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Отзывы наших клиентов</h2>
          <p className="text-gray-600">
            Мы гордимся тем, что наши клиенты остаются довольны и возвращаются к нам снова и снова
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
