import React from 'react';
import { useCartStore } from 'store/cartStore';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function Cart() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="rounded-lg bg-white p-8 shadow-md text-center">
        <h1 className="mb-6 text-3xl font-bold text-pizza-dark">Your Cart</h1>
        <p className="text-lg text-gray-700">Your cart is empty</p>
        <a href="/menu" className="btn-primary mt-4 inline-block">Browse Menu</a>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-pizza-dark">Your Cart</h1>
        <button 
          onClick={clearCart}
          className="text-gray-500 hover:text-pizza-red transition-colors"
        >
          Clear Cart
        </button>
      </div>

      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="py-6 flex items-center">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-24 h-24 object-cover rounded-lg"
            />
            
            <div className="ml-6 flex-1">
              <h3 className="text-lg font-semibold text-pizza-dark">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-pizza-red transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold text-gray-700">Total</span>
          <span className="text-2xl font-bold text-pizza-dark">
            ${total.toFixed(2)}
          </span>
        </div>
        
        <button className="w-full btn-primary py-3 text-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}