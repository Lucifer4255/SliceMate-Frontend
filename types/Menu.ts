export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'pizza' | 'sides' | 'drinks' | 'desserts';
    tags: string[];
    popular?: boolean;
    vegetarian?: boolean;
    spicy?: boolean;
  }
  
  export interface MenuCategory {
    id: string;
    name: string;
    items: MenuItem[];
  }