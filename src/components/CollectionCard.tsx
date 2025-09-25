import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  items: number;
}

export const CollectionCard = ({ title, description, image, items }: CollectionCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="group overflow-hidden border-0 bg-card shadow-none hover:shadow-lg transition-all duration-300 animate-scale-in">
      <CardContent className="p-0">
        {/* Collection Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-lg mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-sm font-medium">{items} productos</span>
          </div>
        </div>

        {/* Collection Info */}
        <div className="space-y-4">
          <div>
            <h3 className="heading-secondary !text-2xl mb-2">{title}</h3>
            <p className="text-elegant">{description}</p>
          </div>

          <Button 
            variant="outline" 
            className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Explorar Colección
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};