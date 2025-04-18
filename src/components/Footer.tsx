import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">НовосибТур</h3>
            <p className="mb-4">Официальное турагентство в Новосибирске. Мы помогаем нашим клиентам открывать мир и создавать незабываемые впечатления.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-nsktour-secondary">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-nsktour-secondary">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-nsktour-secondary">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>г. Новосибирск, ул. Красный проспект, 15</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+7 (383) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@novsibtour.ru</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-nsktour-secondary">Главная</Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-nsktour-secondary">Туры</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-nsktour-secondary">О нас</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-nsktour-secondary">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} НовосибТур. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
