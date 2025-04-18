import { Award, Calendar, Shield, Users } from "lucide-react";

const AboutSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-nsktour-primary" />,
      title: "Официальное агентство",
      description: "Мы являемся официальным представителем ведущих туроператоров России"
    },
    {
      icon: <Users className="w-12 h-12 text-nsktour-primary" />,
      title: "Опытные специалисты",
      description: "Наши консультанты с многолетним опытом работы в туризме"
    },
    {
      icon: <Calendar className="w-12 h-12 text-nsktour-primary" />,
      title: "Гибкий график туров",
      description: "Предлагаем туры в любое время года с удобными датами"
    },
    {
      icon: <Award className="w-12 h-12 text-nsktour-primary" />,
      title: "Гарантия качества",
      description: "Тщательно отбираем партнеров для обеспечения высокого уровня сервиса"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">О компании НовосибТур</h2>
          <p className="text-gray-600">
            Мы помогаем жителям Новосибирска и всей России открывать новые горизонты и создавать незабываемые впечатления от путешествий уже более 10 лет.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
