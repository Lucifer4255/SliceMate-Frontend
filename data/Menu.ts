import { type MenuItem, type MenuCategory } from 'types/Menu';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Supreme',
    description: 'Fresh mozzarella, basil, cherry tomatoes, and extra virgin olive oil on our signature crust',
    price: 14.99,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
    category: 'pizza',
    tags: ['classic', 'vegetarian'],
    popular: true,
    vegetarian: true
  },
  {
    id: '2',
    name: 'Pepperoni Passion',
    description: 'Double pepperoni, extra mozzarella, and our special pizza sauce',
    price: 16.99,
    image: 'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg',
    category: 'pizza',
    tags: ['meat', 'popular'],
    popular: true
  },
  {
    id: '3',
    name: 'BBQ Chicken Deluxe',
    description: 'Grilled chicken, red onions, bell peppers, and tangy BBQ sauce',
    price: 17.99,
    image: 'https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg',
    category: 'pizza',
    tags: ['chicken', 'bbq']
  },
  {
    id: '4',
    name: 'Veggie Paradise',
    description: 'Mushrooms, bell peppers, olives, onions, and fresh tomatoes',
    price: 15.99,
    image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg',
    category: 'pizza',
    tags: ['vegetarian', 'healthy'],
    vegetarian: true
  },
  {
    id: '5',
    name: 'Spicy Supreme',
    description: 'Spicy pepperoni, jalapeños, red pepper flakes, and crushed garlic',
    price: 18.99,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
    category: 'pizza',
    tags: ['spicy', 'meat'],
    spicy: true
  },
  {
    id: '6',
    name: 'Mediterranean Dream',
    description: 'Feta cheese, olives, sun-dried tomatoes, and fresh herbs',
    price: 16.99,
    image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
    category: 'pizza',
    tags: ['vegetarian', 'mediterranean'],
    vegetarian: true
  }
];

export const menuCategories: MenuCategory[] = [
  {
    id: 'pizza',
    name: 'Pizzas',
    items: menuItems.filter(item => item.category === 'pizza')
  }
];