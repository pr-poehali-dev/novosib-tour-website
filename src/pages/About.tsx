import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Award, Check, MapPin, Users } from "lucide-react";

const About = () => {
  const stats = [
    { value: "10+", label: "лет опыта" },
    { value: "5000+", label: "довольных клиентов" },
    { value: "100+", label: "направлений" },
    { value: "24/7", label: "поддержка" }
  ];

  const advantages = [
    { 
      icon: <Check className="text-nsktour-primary" />,
      text: "Официальные договоры с ведущими туроператорами" 
    },
    { 
      icon: <Check className="text-nsktour-primary" />,
      text: "Гарантия лучшей цены на все туры" 
    },
    { 
      icon: <Check className="text-nsktour-primary" />,
      text: "Возможность бронирования без предоплаты" 
    },
    { 
      icon: <Check className="text-nsktour-primary" />,
      text: "Индивидуальный подход к каждому клиенту" 
    },
    { 
      icon: <Check className="text-nsktour-primary" />,
      text: "Постоянная связь во время путешествия" 
    },
    { 
      icon: <Check className="text-nsktour-primary" />,
      text: "Страхование всех туристов" 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Заголовок страницы */}
        <div className="bg-nsktour-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">О компании НовосибТур</h1>
            <p className="mt-4 max-w-3xl">
              Туристическое агентство с многолетним опытом работы, специализирующееся на организации путешествий по России и миру
            </p>
          </div>
        </div>

        {/* История компании */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">Наша история</h2>
                <p className="mb-4 text-gray-700">
                  Компания НовосибТур была основана в 2013 году группой энтузиастов и профессионалов в области туризма. Начав как небольшое агентство в Новосибирске, мы быстро завоевали доверие клиентов благодаря качественному сервису и индивидуальному подходу.
                </p>
                <p className="mb-4 text-gray-700">
                  За десять лет работы мы выросли в полноценное туристическое агентство, заключили партнерские соглашения с ведущими туроператорами России и мира, и помогли тысячам клиентов осуществить свои мечты о путешествиях.
                </p>
                <p className="text-gray-700">
                  Сегодня НовосибТур – это команда профессионалов, которые любят путешествовать сами и помогают организовать идеальный отдых своим клиентам.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-nsktour-primary mb-1">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <div className="mr-3 mt-1">{advantage.icon}</div>
                  <p className="text-gray-700">{advantage.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Компоненты из главной страницы */}
        <AboutSection />

        {/* Контактная информация */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Контактная информация</h2>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">Адрес офиса</h3>
                    <div className="flex items-start">
                      <MapPin className="mr-2 text-nsktour-primary shrink-0 mt-1" size={18} />
                      <span>г. Новосибирск, ул. Красный проспект, 15, офис 203</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                    <p>Пн-Пт: 9:00 - 19:00</p>
                    <p>Сб: 10:00 - 17:00</p>
                    <p>Вс: выходной</p>
                  </div>
                </div>
                
                <div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">Телефоны</h3>
                    <p>+7 (383) 123-45-67 (многоканальный)</p>
                    <p>+7 (383) 123-45-68</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p>info@novsibtour.ru</p>
                    <p>booking@novsibtour.ru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
