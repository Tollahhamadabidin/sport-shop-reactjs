import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <aside className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
        <div className="p-4 border-b border-zinc-200 flex items-center justify-between">
          <h2 className="text-lg font-bold text-zinc-900">Your Shopping Cart</h2>
          <button onClick={onClose} className="p-1 hover:bg-zinc-100 rounded-md cursor-pointer">
            <X className="w-5 h-5 text-zinc-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-zinc-500">Your cart is empty.</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-zinc-100 pb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-zinc-900">{item.name}</h4>
                  <p className="text-sm font-semibold text-zinc-700">${item.price.toFixed(2)}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 border border-zinc-300 rounded hover:bg-zinc-100 cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-semibold px-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 border border-zinc-300 rounded hover:bg-zinc-100 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-red-500 hover:text-red-700 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t border-zinc-200 bg-zinc-50 space-y-3">
            <div className="flex justify-between font-bold text-base">
              <span>Order Subtotal:</span>
              <span className="text-zinc-900">${cartTotal.toFixed(2)}</span>
            </div>
            <button
              onClick={() => alert('Proceeding to checkout...')}
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 rounded-lg transition cursor-pointer"
            >
              Checkout Now
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};