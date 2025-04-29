import React from 'react';
import {type MenuItem } from 'types/Menu';
import { Flame, Leaf } from 'lucide-react';
import { useCartStore } from 'store/cartStore';

interface PizzaCardProps {
  pizza: MenuItem;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      quantity: 1,
      image: pizza.image
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <img 
        src={pizza.image} 
        alt={pizza.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-pizza-dark">{pizza.name}</h3>
          <div className="flex gap-2">
            {pizza.vegetarian && (
              <Leaf className="w-5 h-5 text-green-500" />
            )}
            {pizza.spicy && (
              <Flame className="w-5 h-5 text-pizza-red" />
            )}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{pizza.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-pizza-dark">
            ${pizza.price.toFixed(2)}
          </span>
          <button 
            className="btn-primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};