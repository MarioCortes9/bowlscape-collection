import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-bowl.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 gradient-soft">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Promo Badge */}
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth">
              {t('promo.weekend')}, {t('promo.discount')}
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="heading-primary">
                {t('hero.title')}
              </h1>
              <p className="text-elegant max-w-lg">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {['foodGrade', 'microwaveSafe', 'ovenSafe'].map((feature) => (
                <Badge
                  key={feature}
                  variant="secondary"
                  className="bg-secondary/60 text-secondary-foreground"
                >
                  {t(`features.${feature}` as any)}
                </Badge>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                {t('hero.cta')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg transition-smooth"
              >
                {t('nav.contact')}
              </Button>
            </div>

            {/* Price Display */}
            <div className="pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">{t('products.startFrom')}</span>
                <span className="text-3xl font-light text-foreground">€19.99</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-square relative overflow-hidden rounded-3xl bg-primary/5">
              <img
                src={heroImage}
                alt="Bowl Collection Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10" />
            </div>
            
            {/* Floating Features */}
            <div className="absolute -top-4 -right-4 bg-card shadow-lg rounded-2xl p-4 animate-slide-up">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-semibold">✓</span>
                </div>
                <p className="text-sm text-foreground font-medium">High quality bowl</p>
                <p className="text-xs text-muted-foreground">for every dish</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card shadow-lg rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <div className="text-2xl font-light text-foreground">€20.99</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-xs text-muted-foreground">Stainless</span>
                  <span className="w-2 h-2 bg-muted rounded-full"></span>
                  <span className="text-xs text-muted-foreground">Ceramic</span>
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-xs text-muted-foreground">Wood</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};