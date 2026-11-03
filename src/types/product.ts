export interface Product {
  id: string;
  name: string;
  category: 'Footwear' | 'Apparel' | 'Equipment' | 'Accessories';
  price: number;
  image: string;
  description: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}