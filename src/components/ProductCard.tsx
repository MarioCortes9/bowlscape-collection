import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  description: string;
}

export const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  features, 
  description 
}: ProductCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="group overflow-hidden border-0 bg-card shadow-none hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-muted rounded-lg mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {originalPrice && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              15% OFF
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {features.map((feature) => (
              <Badge
                key={feature}
                variant="secondary"
                className="text-xs bg-secondary/60 text-secondary-foreground hover:bg-secondary/80"
              >
                {t(`features.${feature}` as any) || feature}
              </Badge>
            ))}
          </div>

          {/* Name and Description */}
          <div>
            <h3 className="text-xl font-light text-foreground mb-2">{name}</h3>
            <p className="text-elegant text-sm leading-relaxed">{description}</p>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-light text-foreground">{price}</span>
              {originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {originalPrice}
                </span>
              )}
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              {t('products.viewDetails')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};