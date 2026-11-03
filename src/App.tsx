import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/common/Navbar';
import { CartDrawer } from './components/shop/CartDrawer';
import { ProductCard } from './components/shop/ProductCard';
import { PRODUCTS } from './data/mockProducts';

function ShopContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Footwear', 'Apparel', 'Equipment', 'Accessories'];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
            High-Performance Sports Gear
          </h1>
          <p className="text-zinc-500 mt-1">
            Engineered footwear, apparel, and training equipment built for athletes.
          </p>

          <div className="flex gap-2 overflow-x-auto mt-6 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <ShopContent />
    </CartProvider>
  );
}