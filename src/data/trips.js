export const tripsData = [
  { 
    id: 'TRP-101', 
    carId: 2, // 911 Carrera S
    carName: 'Porsche 911 Carrera S', 
    date: 'April 02 – April 05, 2026', 
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    location: 'District 1, Ho Chi Minh',
    status: 'completed',
    amount: '$1,850.00',
    duration: '3 Days',
    pickupDate: '2026-04-02T10:00:00',
    returnDate: '2026-04-05T10:00:00'
  },
  { 
    id: 'TRP-102', 
    carId: 5, // Q8 e-tron
    carName: 'Audi Q8 e-tron', 
    date: 'March 15 – March 18, 2026', 
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    location: 'District 7, Ho Chi Minh',
    status: 'completed',
    amount: '$2,100.00',
    duration: '3 Days',
    pickupDate: '2026-03-15T09:00:00',
    returnDate: '2026-03-18T18:00:00'
  },
  { 
    id: 'TRP-103', 
    carId: 7, // Land Cruiser
    carName: 'Toyota Land Cruiser', 
    date: 'Feb 10 – Feb 15, 2026', 
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800',
    location: 'Phu Quoc Island',
    status: 'completed',
    amount: '$1,250.00',
    duration: '5 Days',
    pickupDate: '2026-02-10T14:00:00',
    returnDate: '2026-02-15T12:00:00'
  }
];

export const activeTrip = {
  id: 'ED-2024-889',
  carId: 1, // Maybach
  status: 'in-progress',
  pickupDate: '2024-05-15T08:00:00',
  returnDate: '2024-05-20T20:00:00',
  pickupLocation: 'Elysium Terminal, Private Wing',
  returnLocation: 'Elysium Terminal, Private Wing',
  baseRate: 1350,
  addons: 120,
  taxes: 45,
  totalPaid: 1515
};
