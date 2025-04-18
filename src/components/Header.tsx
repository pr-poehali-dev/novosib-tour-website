import { MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-nsktour-primary">НовосибТур</span>
            </Link>
          </div>

          {/* Десктоп меню */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-nsktour-primary">Главная</Link>
            <Link to="/tours" className="text-gray-700 hover:text-nsktour-primary">Туры</Link>
            <Link to="/about" className="text-gray-700 hover:text-nsktour-primary">О нас</Link>
            <Link to="/contacts" className="text-gray-700 hover:text-nsktour-primary">Контакты</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">Новосибирск</span>
            </div>
            <Button>Заказать звонок</Button>
          </div>

          {/* Мобильное меню */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-nsktour-primary">Главная</Link>
            <Link to="/tours" className="text-gray-700 hover:text-nsktour-primary">Туры</Link>
            <Link to="/about" className="text-gray-700 hover:text-nsktour-primary">О нас</Link>
            <Link to="/contacts" className="text-gray-700 hover:text-nsktour-primary">Контакты</Link>
          </nav>
          <div className="mt-4 flex flex-col space-y-3">
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">Новосибирск</span>
            </div>
            <Button className="w-full">Заказать звонок</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
