import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Направление</label>
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="Любое направление" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Любое направление</SelectItem>
              <SelectItem value="altay">Алтай</SelectItem>
              <SelectItem value="baikal">Байкал</SelectItem>
              <SelectItem value="sochi">Сочи</SelectItem>
              <SelectItem value="crimea">Крым</SelectItem>
              <SelectItem value="kamchatka">Камчатка</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Даты</label>
          <Input type="date" />
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Бюджет</label>
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="Любой бюджет" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Любой бюджет</SelectItem>
              <SelectItem value="low">до 30 000 ₽</SelectItem>
              <SelectItem value="medium">30 000 - 70 000 ₽</SelectItem>
              <SelectItem value="high">от 70 000 ₽</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button className="w-full gap-2">
            <Search size={18} />
            Найти тур
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
