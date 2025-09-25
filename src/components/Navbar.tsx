import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-light tracking-wide text-foreground">
              Bowl Collection
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.home')}
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.products')}
            </a>
            <a href="#collections" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.collections')}
            </a>
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="text-muted-foreground hover:text-foreground"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language.toUpperCase()}
            </Button>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              {t('nav.cta')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a 
                href="#products" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.products')}
              </a>
              <a 
                href="#collections" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.collections')}
              </a>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                  {t('nav.cta')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};