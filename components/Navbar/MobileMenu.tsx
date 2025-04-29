import React from 'react';
import { Map, Phone, User, Gift, Clock } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 pb-3 pt-2">
        <a
          href="/menu"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-red-500 hover:bg-gray-50 hover:text-red-500"
        >
          Menu
        </a>
        <a
          href="/deals"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-red-500 hover:bg-gray-50 hover:text-red-500"
        >
          Deals
        </a>
        <a
          href="/locations"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-red-500 hover:bg-gray-50 hover:text-red-500"
        >
          Locations
        </a>
        <a
          href="/track"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-red-500 hover:bg-gray-50 hover:text-red-500"
        >
          Track Order
        </a>
        <a
          href="/rewards"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-red-500 hover:bg-gray-50 hover:text-red-500"
        >
          Rewards
        </a>
      </div>
      
      <div className="border-t border-gray-200 pb-3 pt-4">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <User className="h-6 w-6 text-gray-600" />
            </div>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">Sign In / Join</div>
            <div className="text-sm font-medium text-gray-500">Earn rewards on orders</div>
          </div>
        </div>
        <div className="mt-3 space-y-1">
          <a
            href="/find-store"
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            <Map className="mr-3 h-5 w-5 text-gray-500" />
            Find a Store
          </a>
          <a
            href="/contact"
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            <Phone className="mr-3 h-5 w-5 text-gray-500" />
            Contact Us
          </a>
          <a
            href="/rewards"
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            <Gift className="mr-3 h-5 w-5 text-gray-500" />
            Rewards Program
          </a>
          <a
            href="/hours"
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            <Clock className="mr-3 h-5 w-5 text-gray-500" />
            Store Hours
          </a>
        </div>
      </div>
    </div>
  );
};