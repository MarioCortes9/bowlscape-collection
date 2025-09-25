import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Productos',
    'nav.collections': 'Colecciones',
    'nav.cta': 'Comprar ahora',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Bowl Collection',
    'hero.subtitle': 'Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.',
    'hero.cta': 'Explorar Colección',
    
    // Products
    'products.title': 'Nuestros Productos',
    'products.subtitle': 'Bowls diseñados para realzar cada experiencia culinaria',
    'products.viewDetails': 'Ver detalles',
    'products.startFrom': 'Desde',
    
    // Features
    'features.foodGrade': 'Food grade',
    'features.microwaveSafe': 'Microwave safe',
    'features.ovenSafe': 'Oven safe',
    'features.dishwasherSafe': 'Apto lavavajillas',
    
    // Collections
    'collections.title': 'Nuestras Colecciones',
    'collections.subtitle': 'Descubre bowls organizados por estilo y función',
    'collections.minimalist': 'Minimalista',
    'collections.minimalistDesc': 'Compactos y estilosos para el día a día',
    'collections.colorful': 'Coloridos',
    'collections.colorfulDesc': 'Vibrantes tonos para mesas alegres',
    'collections.classic': 'Clásicos',
    'collections.classicDesc': 'Diseños atemporales y elegantes',
    
    // Promo
    'promo.weekend': 'Fin de semana especial',
    'promo.discount': 'disfruta 15% de descuento',
    
    // Footer
    'footer.contact': 'Contacto',
    'footer.email': 'info@bowlcollection.com',
    'footer.phone': '+34 123 456 789',
    'footer.address': 'Madrid, España',
    'footer.followUs': 'Síguenos',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.collections': 'Collections',
    'nav.cta': 'Shop now',
    'nav.contact': 'Get in touch',
    
    // Hero
    'hero.title': 'Bowl Collection',
    'hero.subtitle': 'Explore our elegant bowls that blend style and practicality, perfect for enhancing any dining experience.',
    'hero.cta': 'Explore Collection',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Bowls designed to enhance every culinary experience',
    'products.viewDetails': 'View details',
    'products.startFrom': 'Start from',
    
    // Features
    'features.foodGrade': 'Food grade',
    'features.microwaveSafe': 'Microwave safe',
    'features.ovenSafe': 'Oven safe',
    'features.dishwasherSafe': 'Dishwasher safe',
    
    // Collections
    'collections.title': 'Our Collections',
    'collections.subtitle': 'Discover bowls organized by style and function',
    'collections.minimalist': 'Minimalist',
    'collections.minimalistDesc': 'Compact and stylish for everyday use',
    'collections.colorful': 'Colorful',
    'collections.colorfulDesc': 'Vibrant tones for cheerful tables',
    'collections.classic': 'Classic',
    'collections.classicDesc': 'Timeless and elegant designs',
    
    // Promo
    'promo.weekend': 'Special weekend',
    'promo.discount': 'enjoy 15% off',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.email': 'info@bowlcollection.com',
    'footer.phone': '+34 123 456 789',
    'footer.address': 'Madrid, Spain',
    'footer.followUs': 'Follow us',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};