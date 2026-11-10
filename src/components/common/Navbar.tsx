import React from 'react';
import { ShoppingBag, Trophy } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Navbar: React.FC<{ onOpenCart: () => void }> = ({ onOpenCart }) => {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-black tracking-wider text-xl uppercase cursor-pointer">
          <Trophy className="w-6 h-6 text-amber-400" />
          <span>sport Shop</span>
        </div>

        <button
          onClick={onOpenCart}
          className="relative p-2 rounded-full hover:bg-zinc-800 transition cursor-pointer"
        >
          <ShoppingBag className="w-6 h-6 text-zinc-200" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-500 text-zinc-950 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
