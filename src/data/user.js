export const userData = {
  profile: {
    id: 'USR-889',
    firstName: 'Alex',
    lastName: 'Harrison',
    fullName: 'Alex Harrison',
    email: 'alex.harrison@gmail.com',
    phone: '+84 098 765 4321',
    zalo: '+84 098 765 4321',
    whatsapp: '',
    avatar: null, // null for 'AH' placeholder
    membership: 'Platinum',
    points: 12450,
    joinDate: 'Jan 2024',
    verified: true,
    dob: '1990-06-15',
    gender: 'Male',
    nationality: 'Vietnamese',
    language: 'English',
    emergencyContact: {
      name: '',
      phone: ''
    },
    driverInfo: {
      licenseNumber: '••• ••• 4490',
      licenseClass: 'Class B2',
      issueDate: '2018-03-01',
      expiryDate: '2028-03-01',
      experience: '6–10 years',
      verified: true
    },
    preferences: {
      carType: 'Luxury Sedan',
      fuelType: 'Petrol',
      pickupArea: 'Hanoi',
      paymentMethod: 'Credit Card',
      insurance: 'Full Coverage (Recommended)',
      destinations: 'Da Lat, Hoi An, Phu Quoc'
    }
  },
  addresses: [
    { id: 1, type: 'Home', address: '123 Luxury Lane, District 1, HCMC', primary: true },
    { id: 2, type: 'Office', address: 'Bitexco Financial Tower, Floor 45, HCMC', primary: false }
  ],
  billing: [
    { id: 1, type: 'Visa', last4: '8845', expiry: '08/27', primary: true },
    { id: 2, type: 'Apple Pay', linked: true, primary: false }
  ],
  favorites: [1, 2, 10]
};
