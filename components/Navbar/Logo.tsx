import React from 'react';
import { Pizza } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center space-x-2">
      <Pizza className="h-8 w-8 text-red-500" />
      <span className="text-xl font-bold tracking-tight text-gray-900">
        <span className="text-red-500">Slice</span>Mate
      </span>
    </a>
  );
};