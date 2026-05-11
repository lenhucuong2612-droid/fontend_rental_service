const genericCars = [5, 6, 7, 8, 9, 10, 11, 12].map(id => ({
  id,
  name: id === 5 ? 'Q8 e-tron' : id === 6 ? 'LX 600' : id === 7 ? 'Land Cruiser' : id === 8 ? 'Palisade' : id === 9 ? 'Carnival' : id === 10 ? 'Taycan' : id === 11 ? 'Camry Hybrid' : 'Tucson',
  brand: id === 5 ? 'Audi' : id === 6 ? 'Lexus' : id === 7 ? 'Toyota' : id === 8 ? 'Hyundai' : id === 9 ? 'Kia' : id === 10 ? 'Porsche' : id === 11 ? 'Toyota' : 'Hyundai',
  year: 2024,
  description: 'A premium vehicle offering excellence in performance and luxury. Perfect for those who appreciate the finer things in life.',
  image: id === 5 ? 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1200&auto=format&fit=crop' : 
         id === 6 ? 'https://images.unsplash.com/photo-1596767623910-14e4b52ff169?q=80&w=1200&auto=format&fit=crop' : 
         'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1200&auto=format&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596767623910-14e4b52ff169?q=80&w=1200&auto=format&fit=crop'
  ],
  price: id * 20 + 100,
  seats: id > 5 && id < 10 ? 7 : 5,
  transmission: 'Automatic',
  fuelType: id === 5 || id === 10 ? 'Electric' : 'Gasoline',
  engine: id === 5 ? 'Electric Dual Motor' : '3.5L V6',
  odometer: '10,000 km',
  colorExterior: 'Premium Silver',
  colorInterior: 'Black Leather',
  luggage: '2 Large Bags',
  features: ['Leather Seats', 'Navigation', 'Backup Camera', 'Apple CarPlay'],
  rating: 4.6,
  rentals: 45,
  available: true
}));

export const carsData = [
  {
    id: 1,
    name: 'S-Class Maybach',
    brand: 'Mercedes',
    year: 2024,
    description: 'The S-Class Maybach represents the absolute pinnacle of luxury and advanced technology. Designed for those who demand nothing but the best, it offers an unmatched level of comfort and prestige.',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555505019-8c3f4c19e309?q=80&w=1200&auto=format&fit=crop'
    ],
    price: 450,
    seats: 4,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    engine: '4.0L V8 Biturbo',
    odometer: '1,200 km',
    colorExterior: 'Obsidian Black',
    colorInterior: 'Macchiato Beige',
    luggage: '2 Large Bags',
    features: ['Leather Seats', 'Massage Seats', 'Rear Entertainment', 'Burmester 4D Sound', 'Panoramic Roof'],
    rating: 4.9,
    rentals: 124,
    available: true
  },
  {
    id: 2,
    name: '911 Carrera S',
    brand: 'Porsche',
    year: 2024,
    description: 'Iconic sports car delivering thrilling performance. The 911 Carrera S combines timeless design with cutting-edge engineering for a pure driving experience.',
    image: 'https://images.unsplash.com/photo-1503376760356-cb4506bef040?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503376760356-cb4506bef040?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop'
    ],
    price: 380,
    seats: 4,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '3.0L Flat-6 Twin-Turbo',
    odometer: '5,600 km',
    colorExterior: 'Guards Red',
    colorInterior: 'Black Leather',
    luggage: '1 Small Bag',
    features: ['Sport Chrono', 'Leather Seats', 'Bose Audio', 'PASM Suspension'],
    rating: 4.8,
    rentals: 89,
    available: true
  },
  {
    id: 3,
    name: 'Model S Plaid',
    brand: 'Tesla',
    year: 2024,
    description: 'Unmatched acceleration in an elegant electric sedan. The Model S Plaid is the quickest accelerating car in production today, offering supercar performance with five-passenger comfort.',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?q=80&w=1200&auto=format&fit=crop'
    ],
    price: 299,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Electric',
    engine: 'Tri-Motor AWD',
    odometer: '3,100 km',
    colorExterior: 'Ultra Red',
    colorInterior: 'White Vegan Leather',
    luggage: '3 Bags',
    features: ['Autopilot', 'Glass Roof', 'Gaming Computer', 'Plaid Performance'],
    rating: 5.0,
    rentals: 210,
    available: true
  },
  {
    id: 4,
    name: '7 Series',
    brand: 'BMW',
    year: 2024,
    description: 'Executive sedan with an imposing presence and unparalleled comfort. The BMW 7 Series redefines the luxury segment with innovative technology and high-quality materials.',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1200&auto=format&fit=crop'
    ],
    price: 320,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '3.0L Inline-6',
    odometer: '8,400 km',
    colorExterior: 'Mineral White',
    colorInterior: 'Cognac Merino Leather',
    luggage: '2 Bags',
    features: ['Theater Screen', 'Executive Lounge', 'Driving Assistant Professional'],
    rating: 4.7,
    rentals: 65,
    available: true
  },
  ...genericCars
];
