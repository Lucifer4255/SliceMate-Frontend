import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useNavigate } from 'react-router';

export const CartButton: React.FC = () => {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <button 
      className="relative rounded-full p-1 text-gray-700 hover:bg-gray-100 transition-colors duration-200 group"
      aria-label={`Shopping cart with ${itemCount} items`}
      onClick={() => navigate('/cart')}
    >
      <ShoppingCart className="h-6 w-6 group-hover:text-pizza-red transition-colors duration-200" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pizza-red text-xs font-medium text-white">
          {itemCount}
        </span>
      )}
    </button>
  );
};