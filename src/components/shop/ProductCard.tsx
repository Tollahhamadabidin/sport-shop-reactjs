import React from 'react';
import { Star, Plus } from 'lucide-react';
import type { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-zinc-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center hover:scale-105 transition duration-300"
        />
        <span className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md font-medium">
          {product.category}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold mb-1">
          <Star className="w-3.5 h-3.5 fill-amber-500" />
          <span>{product.rating}</span>
        </div>

        <h3 className="font-semibold text-zinc-900 line-clamp-1 mb-1">{product.name}</h3>
        <p className="text-sm text-zinc-500 line-clamp-2 mb-4 flex-1">{product.description}</p>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
          <span className="text-lg font-bold text-zinc-900">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 bg-zinc-900 text-white text-sm font-medium px-3.5 py-2 rounded-lg hover:bg-zinc-800 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};