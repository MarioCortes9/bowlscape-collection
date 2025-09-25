import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { Footer } from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';

// Import images
import bowlSetColorful from '@/assets/bowl-set-colorful.jpg';
import bowlNatural from '@/assets/bowl-natural.jpg';
import bowlBlack from '@/assets/bowl-black.jpg';
import heroImage from '@/assets/hero-bowl.jpg';
import collectionMinimalist from '@/assets/collection-minimalist.jpg';
import collectionColorful from '@/assets/collection-colorful.jpg';
import collectionClassic from '@/assets/collection-classic.jpg';

// Products data
const products = [
  {
    id: '1',
    name: 'Sage Ceramic Bowl',
    price: '€24.99',
    originalPrice: '€29.99',
    image: heroImage,
    features: ['foodGrade', 'microwaveSafe', 'ovenSafe'],
    description: 'Bowl elegante de cerámica en tono salvia, perfecto para servir ensaladas y sopas con estilo.'
  },
  {
    id: '2',
    name: 'Natural Stone Bowl',
    price: '€19.99',
    image: bowlNatural,
    features: ['foodGrade', 'ovenSafe'],
    description: 'Bowl de piedra natural con textura artesanal, ideal para un toque rústico en tu mesa.'
  },
  {
    id: '3',
    name: 'Midnight Black Bowl',
    price: '€22.99',
    image: bowlBlack,
    features: ['foodGrade', 'microwaveSafe', 'dishwasherSafe'],
    description: 'Bowl negro elegante con acabado brillante, perfecto para presentaciones sofisticadas.'
  },
  {
    id: '4',
    name: 'Color Set Collection',
    price: '€59.99',
    originalPrice: '€69.99',
    image: bowlSetColorful,
    features: ['foodGrade', 'microwaveSafe', 'ovenSafe'],
    description: 'Set de tres bowls en colores vibrantes: azul profundo, crema y terracota.'
  }
];

// Collections data
const collections = [
  {
    title: 'Minimalista',
    description: 'Compactos y estilosos para el día a día',
    image: collectionMinimalist,
    items: 8
  },
  {
    title: 'Coloridos',
    description: 'Vibrantes tonos para mesas alegres',
    image: collectionColorful,
    items: 12
  },
  {
    title: 'Clásicos',
    description: 'Diseños atemporales y elegantes',
    image: collectionClassic,
    items: 6
  }
];

const IndexContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section id="products" className="py-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-secondary mb-4">{t('products.title')}</h2>
            <p className="text-elegant max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 px-6 sm:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-secondary mb-4">{t('collections.title')}</h2>
            <p className="text-elegant max-w-2xl mx-auto">
              {t('collections.subtitle')}
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={collection.title} style={{ animationDelay: `${index * 0.15}s` }}>
                <CollectionCard {...collection} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;