import { carsData } from '../data/cars';
import { tripsData, activeTrip } from '../data/trips';
import { userData } from '../data/user';

import { supportData } from '../data/support';

// Helper to simulate network latency
const simulateNetwork = (data, delay = 800) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

export const apiService = {
  // Support API
  getConversations: async () => {
    console.log('API Call: getConversations');
    return simulateNetwork(supportData.conversations);
  },

  getMessagesByChatId: async (id) => {
    console.log(`API Call: getMessagesByChatId(${id})`);
    const messages = supportData.messages[id] || [];
    return simulateNetwork(messages);
  },

  // Cars API
  getCars: async () => {
    console.log('API Call: getCars');
    return simulateNetwork(carsData);
  },

  getCarById: async (id) => {
    console.log(`API Call: getCarById(${id})`);
    const car = carsData.find(c => c.id === parseInt(id));
    return simulateNetwork(car);
  },

  // Trips API
  getTripHistory: async () => {
    console.log('API Call: getTripHistory');
    return simulateNetwork(tripsData);
  },

  getActiveTrip: async () => {
    console.log('API Call: getActiveTrip');
    // We combine active trip with car data for convenience
    const trip = { ...activeTrip };
    const car = carsData.find(c => c.id === trip.carId);
    return simulateNetwork({ ...trip, car });
  },

  // User API
  getUserProfile: async () => {
    console.log('API Call: getUserProfile');
    return simulateNetwork(userData.profile);
  },

  getUserAddresses: async () => {
    console.log('API Call: getUserAddresses');
    return simulateNetwork(userData.addresses);
  },

  getUserBilling: async () => {
    console.log('API Call: getUserBilling');
    return simulateNetwork(userData.billing);
  },

  getUserFavorites: async () => {
    console.log('API Call: getUserFavorites');
    const favorites = carsData.filter(car => userData.favorites.includes(car.id));
    return simulateNetwork(favorites);
  }
};
