import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubscribeSection = () => {
  return (
    <section className="py-16 bg-nsktour-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на специальные предложения</h2>
          <p className="mb-8">
            Получайте информацию о новых турах и специальных скидках первыми
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Ваш email" 
              className="bg-white/10 text-white placeholder:text-white/60 border-white/20"
            />
            <Button variant="secondary">Подписаться</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
