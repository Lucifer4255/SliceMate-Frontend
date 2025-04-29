import React from 'react';
import { menuCategories } from 'data/Menu';
import { PizzaCard } from 'components/Menu/PizzaCard';

export default function Menu() {
  return (
    <div className="space-y-8">
      {menuCategories.map((category) => (
        <div key={category.id}>
          <h2 className="text-3xl font-bold text-pizza-dark mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item) => (
              <PizzaCard key={item.id} pizza={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}