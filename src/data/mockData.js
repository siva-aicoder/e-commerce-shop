// data/mockData.js
// Sample product data
export const categories = [
  { id: 1, name: 'Electronics', icon: '📱', productCount: 3 },
  { id: 2, name: 'Clothing', icon: '👕', productCount: 3},
  { id: 3, name: 'Home & Kitchen', icon: '🏠', productCount: 2},
  { id: 4, name: 'Books', icon: '📚', productCount: 2},
  { id: 5, name: 'Beauty', icon: '💄', productCount: 1},
  { id: 6, name: 'Sports', icon: '⚽', productCount: 2},
  { id: 7, name: 'Toys', icon: '🧸', productCount: 2 },
 
];

export const products = [
  {
    id: 1,
    name: 'SAMSUNG Galaxy S21',
    price: 100000,
    basePrice: 100000,
    salePrice: 80000,
    oldPrice: 100000,
    category: 'Electronics',
    rating: 4.5,
    reviewCount: 124,
    image: 'https://tse4.mm.bing.net/th/id/OIP.-W4bPBDccEpoaai5WTUJagHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'The latest smartphone with advanced features including a high-resolution camera, fast processor, and long-lasting battery.',
    details: {
      material: 'Glass, Aluminum',
      color: 'Midnight Black',
      dimensions: '6.2 x 3.0 x 0.3 inches',
      weight: '6.5 oz'
    }
  },
  {
    id: 2,
    name: 'SONY HEADSET',
    price: 20000,
    oldPrice: 22000,
    category: 'Electronics',
    rating: 4.3,
    reviewCount: 87,
    image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/Headphones-primary%20tout-mobile-1534x1083?$toutMobile$&fmt=png-alpha',
    description: 'Premium wireless headphones with noise cancellation and 20-hour battery life.',
    details: {
      material: 'Plastic, Metal',
      color: 'Black',
      dimensions: '7.5 x 6.8 x 3.2 inches',
      weight: '8.8 oz'
    }
  },
  {
    id: 3,
    name: 'Cotton T-Shirt',
    price: 700,
    oldPrice: 1000,
    category: 'Clothing',
    rating: 4.2,
    reviewCount: 56,
    image: 'https://cdn.mockupnest.com/wp-content/uploads/edd/2025/01/03-Free-Floating-Oversized-T-Shirt-Mockup.jpg',
    description: '100% cotton t-shirt available in multiple colors. Comfortable and durable for everyday wear.',
    details: {
      material: 'Cotton',
      color: 'White',
      dimensions: 'Small, Medium, Large, XL',
      weight: '5 oz'
    }
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: 6000,
    oldPrice: 9000,
    category: 'Home & Kitchen',
    rating: 4.7,
    reviewCount: 203,
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dfd29772301861.641ecbe31c937.jpg',
    description: 'Programmable coffee maker with thermal carafe to keep your coffee hot for hours.',
    details: {
      material: 'Plastic, Glass',
      color: 'Black',
      dimensions: '14.2 x 7.8 x 10.5 inches',
      weight: '5.2 lbs'
    }
  },
  {
    id: 5,
    name: 'Best Selling Novel',
    price: 899,
    oldPrice: 999,
    category: 'Books',
    rating: 4.8,
    reviewCount: 312,
    image: 'https://tse4.mm.bing.net/th/id/OIP.OWox8KxSP-JnN2_plaKGEgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'The latest best-selling novel from a renowned author. A captivating story that keeps you engaged.',
    details: {
      material: 'Paper, Cardboard',
      color: 'Various',
      dimensions: '8 x 5.2 x 1.2 inches',
      weight: '12 oz'
    }
  },
  {
    id: 6,
    name: 'Face Moisturizer',
    price: 1500,
    oldPrice: 2000,
    category: 'Beauty',
    rating: 4.4,
    reviewCount: 98,
    image: 'https://m.media-amazon.com/images/I/515zn9w7MyL._SL1500_.jpg',
    description: 'Hydrating face moisturizer with SPF 30 protection. Keeps your skin soft and protected.',
    details: {
      material: 'Cream',
      color: 'White',
      dimensions: '2.5 x 2.5 x 5 inches',
      weight: '3.5 oz'
    }
  },
  {
    id: 7,
    name: 'Yoga Mat',
    price: 999,
    oldPrice: 1299,
    category: 'Sports',
    rating: 4.6,
    reviewCount: 167,
    image: 'https://png.pngtree.com/thumb_back/fw800/background/20230525/pngtree-colorful-yoga-mats-image_2619221.jpg',
    description: 'Eco-friendly yoga mat with non-slip surface. Perfect for all types of yoga practice.',
    details: {
      material: 'TPE',
      color: 'Purple',
      dimensions: '72 x 24 x 0.2 inches',
      weight: '2.2 lbs'
    }
  },
  {
    id: 8,
    name: 'Building Blocks Set',
    price: 499,
    oldPrice: 999,
    category: 'Toys',
    rating: 4.9,
    reviewCount: 231,
    image: 'https://m.media-amazon.com/images/I/81D9vyIHXbL.jpg',
    description: 'Educational building blocks set with 250 pieces. Encourages creativity and problem-solving.',
    details: {
      material: 'Plastic',
      color: 'Multi-color',
      dimensions: '15 x 11 x 3 inches',
      weight: '3.5 lbs'
    }
  },
  {
    id: 9,
    name: 'Car Toy',
    price: 2999,
    oldPrice: 3999,
    category: 'Toys',
    rating: 4.5,
    reviewCount: 76,
    image: 'https://coolwallpapers.me/picsup/3032183-toy-car_volkswagen_volkswagen-beetle.jpg',
    description: 'Premium car toy made from sustainable materials. Safe and fun for kids of all ages.',
    details: {
      material: 'Plastic',
      color: 'Red',
      dimensions: '6 x 3 x 2 inches',
      weight: '12 oz'
    }
  },
  {
    id: 10,
    name: 'FASTTRACK SMART Watch',
    price: 1999,
    oldPrice: 2499,
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 189,
    image: 'https://wallpaperaccess.com/full/3021129.jpg',
    description: 'Feature-rich smartwatch with health monitoring, GPS, and smartphone connectivity.',
    details: {
      material: 'Aluminum, Silicone',
      color: 'Space Gray',
      dimensions: '1.7 x 1.5 x 0.4 inches',
      weight: '1.4 oz'
    }
  },
  {
    id: 11,
    name: 'Running Shoes',
    price: 4999,
    oldPrice: 6999,
    category: 'Sports',
    rating: 4.7,
    reviewCount: 214,
    image: 'https://wallpapercrafter.com/desktop/287561-running-shoe-shoe-asics-highly-functional-run.jpg',
    description: 'Lightweight running shoes with cushioning technology for maximum comfort during runs.',
    details: {
      material: 'Mesh, Rubber',
      color: 'Blue/Black',
      dimensions: 'US Sizes 7-13',
      weight: '9 oz per shoe'
    }
  },
  {
    id: 12,
    name: 'Blender',
    price: 1999,
    oldPrice: 2999,
    category: 'Home & Kitchen',
    rating: 4.3,
    reviewCount: 92,
    image: 'https://www.stayathomemum.com.au/wp-content/uploads/2023/01/home-blender-3.jpg',
    description: 'High-powered blender for smoothies, soups, and more. Easy to clean and durable.',
    details: {
      material: 'Plastic, Glass',
      color: 'Red',
      dimensions: '8.7 x 7.5 x 15.8 inches',
      weight: '7.7 lbs'
    }
  },
{
    id: 13,
    name: 'SHIRT',
    price: 1499,
    oldPrice: 1799,
    category: 'Clothing',
    rating: 4.2,
    reviewCount: 56,
    image: 'https://diners.com.pk/cdn/shop/products/AD-30103-L-PURPLE-RS-3290-01.jpg?v=1686071654',
    description: '100% cotton shirt available in multiple colors. Comfortable and durable for everyday wear.',
    details: {
      material: 'Cotton',
      color: 'White',
      dimensions: 'Small, Medium, Large, XL',
      weight: '5 oz'
    }
  },
  {
    id: 14,
    name: 'TROUSER',
    price: 2999,
    oldPrice: 3999,
    category: 'Clothing',
    rating: 4.2,
    reviewCount: 56,
    image: 'https://wallpapercrafter.com/desktop8/1922629-blue-jeans-denim-denim-jeans-denim-pants-folded.jpg',
    description: '100% cotton TROUSER available in multiple colors. Comfortable and durable for everyday wear.',
    details: {
      material: 'Cotton',
      color: 'White,grey,black',
      dimensions: 'Small, Medium, Large, XL',
      weight: '5 oz'
    }
  },
 {
    id: 15,
    name: 'Novel',
    price: 499,
    oldPrice: 699,
    category: 'Books',
    rating: 4.8,
    reviewCount: 312,
    image: 'https://tse2.mm.bing.net/th/id/OIP.RMHyaUfHBg6GIyWpWdYHTgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'The latest best-selling novel from a renowned author. A captivating story that keeps you engaged.',
    details: {
      material: 'Paper, Cardboard',
      color: 'Various',
      dimensions: '8 x 5.2 x 1.2 inches',
      weight: '12 oz'
    }
  }

];

export default products;
