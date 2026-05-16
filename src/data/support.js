export const supportData = {
  conversations: [
    { 
      id: 1, 
      title: 'Mercedes E300 Rental Extension', 
      dept: 'Active Trip', 
      preview: 'Your extension has been confirmed.', 
      time: '2m ago', 
      status: 'resolved', 
      unread: 0 
    },
    { 
      id: 2, 
      title: 'Bluetooth Connection Guide', 
      dept: 'Vehicle Support', 
      preview: 'Try pressing the sync button for 3 sec.', 
      time: '1h ago', 
      status: 'resolved', 
      unread: 0 
    },
    { 
      id: 3, 
      title: 'Deposit Payment Confirmation', 
      dept: 'Billing', 
      preview: 'Deposit of $500 received successfully.', 
      time: 'Yesterday', 
      status: 'resolved', 
      unread: 0 
    },
    { 
      id: 4, 
      title: 'Roadside Support – Da Lat', 
      dept: 'Emergency', 
      preview: 'Team arrived. Issue resolved.', 
      time: '3 days ago', 
      status: 'resolved', 
      unread: 0 
    },
    { 
      id: 5, 
      title: 'New Booking Inquiry – BMW M8', 
      dept: 'Sales', 
      preview: 'Vehicle is available for your dates.', 
      time: '5 days ago', 
      status: 'resolved', 
      unread: 0 
    },
  ],
  messages: {
    1: [
      { id: 1, from: 'agent', time: '10:30 AM', text: "Hello Alex, I'm Minh. I've received your request for the Mercedes E300 extension." },
      { id: 2, from: 'user', time: '10:31 AM', text: "Yes, I need it for 2 more days. Can you help?" },
      { id: 3, from: 'agent', time: '10:32 AM', text: "Confirmed! Your extension is processed. New return date: May 17th." }
    ],
    2: [
      { id: 1, from: 'agent', time: '09:00 AM', text: "Hi! Having trouble with Bluetooth?" },
      { id: 2, from: 'user', time: '09:05 AM', text: "Yes, it won't pair with my iPhone 15." },
      { id: 3, from: 'agent', time: '09:06 AM', text: "Please try resetting the car's infotainment system by holding the power button." }
    ]
  }
};
