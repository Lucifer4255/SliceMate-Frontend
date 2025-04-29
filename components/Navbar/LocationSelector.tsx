import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

export const LocationSelector: React.FC = () => {
  const [deliveryMode, setDeliveryMode] = useState<'delivery' | 'pickup'>('delivery');

  return (
    <div className="flex items-center">
      <div className="mr-2 flex items-center text-sm font-medium text-gray-700">
        <MapPin className="mr-1 h-4 w-4 text-red-500" />
        <span className="hidden lg:inline">123 Main St</span>
      </div>
      
      <div className="flex h-8 rounded-full bg-gray-100 p-1">
        <button
          onClick={() => setDeliveryMode('delivery')}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            deliveryMode === 'delivery'
              ? 'bg-red-500 text-white'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
        >
          Delivery
        </button>
        <button
          onClick={() => setDeliveryMode('pickup')}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            deliveryMode === 'pickup'
              ? 'bg-red-500 text-white'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
        >
          Pickup
        </button>
      </div>
    </div>
  );
};