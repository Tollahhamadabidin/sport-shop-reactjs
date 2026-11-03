import type { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  // Footwear
  {
    id: 'prod-1',
    name: 'Pro Vapor Running Shoes',
    category: 'Footwear',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    description: 'Ultra-lightweight mesh upper with high-energy return cushioning for marathon runners.',
    rating: 4.8,
  },
  {
    id: 'prod-2',
    name: 'Court Zoom Basketball Shoes',
    category: 'Footwear',
    price: 145.0,
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&auto=format&fit=crop&q=80',
    description: 'High-top ankle protection paired with multidirectional traction grip for quick cuts.',
    rating: 4.7,
  },
  {
    id: 'prod-3',
    name: 'All-Terrain Trail Cleats',
    category: 'Footwear',
    price: 110.0,
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&auto=format&fit=crop&q=80',
    description: 'Rugged rubber lugs engineered for maximum mud traction and outdoor durability.',
    rating: 4.6,
  },

  // Apparel
  {
    id: 'prod-4',
    name: 'Thermal Compression Top',
    category: 'Apparel',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80',
    description: 'Sweat-wicking, four-way stretch compression fabric that accelerates muscle recovery.',
    rating: 4.5,
  },
  {
    id: 'prod-5',
    name: 'Dry-Fit Training Shorts',
    category: 'Apparel',
    price: 34.5,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=80',
    description: 'Lightweight performance shorts featuring zippered pockets and breathable side vents.',
    rating: 4.4,
  },
  {
    id: 'prod-6',
    name: 'Waterproof Running Windbreaker',
    category: 'Apparel',
    price: 89.0,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80',
    description: 'Shields against wind and rain while offering reflective panels for night running visibility.',
    rating: 4.9,
  },

  // Equipment
  {
    id: 'prod-7',
    name: 'Match Standard Football (Size 5)',
    category: 'Equipment',
    price: 29.5,
    image: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=600&auto=format&fit=crop&q=80',
    description: 'Thermally bonded seamless surface designed for consistent flight and low water absorption.',
    rating: 4.9,
  },
  {
    id: 'prod-8',
    name: 'Cast Iron Kettlebell (16kg)',
    category: 'Equipment',
    price: 54.0,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80',
    description: 'Solid cast iron build with a wide, smooth textured grip for swings and cross-training.',
    rating: 4.8,
  },
  {
    id: 'prod-9',
    name: 'Carbon Graphite Tennis Racket',
    category: 'Equipment',
    price: 159.0,
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&auto=format&fit=crop&q=80',
    description: 'Aerodynamic frame engineered for maximum head speed, power, and spin precision.',
    rating: 4.7,
  },

  // Accessories
  {
    id: 'prod-10',
    name: 'Grip-Tech Gym Gloves',
    category: 'Accessories',
    price: 18.0,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
    description: 'Reinforced silicone palms with integrated wrist wraps for heavy weightlifting stability.',
    rating: 4.3,
  },
  {
    id: 'prod-11',
    name: 'Insulated Sports Bottle (750ml)',
    category: 'Accessories',
    price: 22.5,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
    description: 'Double-wall vacuum stainless steel flask keeping water ice-cold for up to 24 hours.',
    rating: 4.8,
  },
  {
    id: 'prod-12',
    name: 'Speed Jump Rope with Ball Bearings',
    category: 'Accessories',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=80',
    description: 'Tangle-free steel cable with 360-degree ball bearings designed for high-intensity double-unders.',
    rating: 4.6,
  },
];