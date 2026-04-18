import { Accommodation } from '../models/accommodation.model';

export const ACCOMMODATIONS: Accommodation[] = [
  // AN Royal Stays - For Women
  {
    id: 1,
    name: 'AN Royal Stays',
    for: 'For Women',
    locationShort: 'Hunasamaranahalli, North Bangalore',
    address:
      'Bhavapritha Building, 1st Cross Rd, near Apple Hight App, Hunasamaranahalli, Bengaluru, Karnataka 562157, India',

    about:
      `AN Royal Stays is a premier hospitality destination in North Bengaluru, founded on a legacy of genuine care and professional service. 
      We bridge the gap between high-end hotel luxury and the comfort of a private home.
      Whether you are looking for a safe Ladies PG near Sir MVIT or a peaceful transit stay near Kempegowda International Airport (KIAL),
      our property is designed to help you thrive.`,

    rooms: [
      { type: 'Private Room', price: 14000 },
      { type: 'Two Sharing', price: 7500 },
      { type: 'Three Sharing', price: 6000 },
    ],

    amenities: [
      'Parking',
      'Power Backup',
      'House Keeping',
      'Drinking Water',
      'Almirah',
      'Security',
      'Reception',
      'WiFi',
      'Bed Sheet',
      'Pillow',
      'Bathroom',
      'Refrigerator',
      'CCTV',
      'Lift',
      'Washing Machine',
    ],

    nearbyPlaces: [
      'Kempegowda International Airport',
      'Sir MVIT (1.4 km)',
      'SVCE (2.3 km)',
      'Sai Vidya Institute',
      'Manyata Tech Park',
      'IBM Bhartiya City',
      'Rank Tech & Interone Tech (Walking Distance)',
      'Mall of Asia',
      'Nandi Hills',
    ],

    foodIncluded: true,
    image: 'assets/images/an_royal_stays/AN-Royal-Stays-nightlife.webp',
    whatsappNumber: '918904054317',
    gallery: [
      'assets/images/an_royal_stays/AN-Royal-Reception.webp',
      'assets/images/an_royal_stays/AN-Royal-RecreationArea.webp',
      'assets/images/an_royal_stays/AN-Royal-Stays.webp',
      'assets/images/an_royal_stays/AN-Royal-Stays-nightlife.webp',
      'assets/images/an_royal_stays/AN-Royal-WaitingArea.webp',
      'assets/images/an_royal_stays/AN-Royal-DinningArea.webp',
      'assets/images/an_royal_stays/AN-Royal-dinninghall.webp',
      'assets/images/an_royal_stays/AN-Royal-DinningHallArea.webp',
      'assets/images/an_royal_stays/AN-Royal-Entrance.webp',
      'assets/images/an_royal_stays/AN-Royal-IndoorGames.webp',
      'assets/images/an_royal_stays/AN-Royal-Lift.webp',
      'assets/images/an_royal_stays/AN-Royal-lobby.webp',
    ],
  },
  // 2️⃣ AN Royal PG & INN
  {
    id: 2,
    name: 'AN Royal PG & INN',
    for: 'For Professionals & Transit Stay',
    locationShort: 'North Bangalore (Near Airport)',
    address: 'Address to be updated',

    about:
      `AN Royal PG & INN offers a comfortable blend of PG living and inn-style accommodation.
      Ideal for corporate professionals and guests in transit, the property provides peaceful stays with easy access to the airport and major tech hubs.`,

    rooms: [
      { type: 'Private Room', price: 15000 },
      { type: 'Two Sharing', price: 9000 },
      { type: 'Three Sharing', price: 7500 },
    ],

    amenities: [
      'Parking',
      'Power Backup',
      'House Keeping',
      'Drinking Water',
      'TV',
      'Almirah',
      'Security',
      'Reception',
      'WiFi',
      'Bed Sheet',
      'Pillow',
      'Bathroom',
      'Refrigerator',
      'CCTV',
      'Lift',
      'Washing Machine',
    ],

    nearbyPlaces: [
      'Kempegowda International Airport',
      'Mall of Asia',
      'Nandi Hills',
      'Foxconn Company',
      'Rank Tech & Interone Tech (Walking Distance)',
      'IBM Bhartiya City (15 mins)',
      'Manyata Tech Park',
      'Sir MVIT (1.4 km)',
      'SVCE (2.3 km)',
      'Sai Vidya Institute',
    ],

    foodIncluded: true,
    image: 'assets/images/an-royal-inn.webp',
    whatsappNumber: '918861910937',
    gallery: [],
  },

  // 3️⃣ AN Royal PG – For Men
  {
    id: 3,
    name: 'AN Royal PG',
    for: 'For Men',
    locationShort: 'North Bangalore',
    address: 'Address to be updated',

    about:
      `AN Royal PG for Men is designed for working professionals seeking a secure,
      well-maintained, and comfortable living space. The property focuses on cleanliness,
      essential amenities, and selected food highlights.`,

    rooms: [
      { type: 'Private Room', price: 17000 },
      { type: 'Two Sharing', price: 10000 },
    ],

    amenities: [
      'Parking',
      'Power Backup',
      'House Keeping',
      'Drinking Water',
      'Almirah',
      'Security',
      'Reception',
      'WiFi',
      'Bed Sheet',
      'Pillow',
      'Bathroom',
      'Refrigerator',
      'CCTV',
      'Lift',
      'Washing Machine',
    ],

    nearbyPlaces: [
      'Kempegowda International Airport',
      'Mall of Asia',
      'Nandi Hills',
      'Foxconn Company',
      'Rank Tech & Interone Tech (Walking Distance)',
      'IBM Bhartiya City (15 mins)',
      'Manyata Tech Park',
      'Sir MVIT (1.4 km)',
      'SVCE (2.3 km)',
      'Sai Vidya Institute',
    ],

    foodIncluded: true,
    image: 'assets/images/an-royal-pg-men.webp',
    whatsappNumber: '918880272244',
    gallery: [],
  },

  {
    id: 4,
    name: 'AN Royal Urban PG',
    for: 'For Men',
    locationShort: 'North Bangalore',
    address: 'Address to be updated',

    about:
      `AN Royal Urban Men's PG.
      \n Looking for a budget-friendly accomadation without compromising on quality? AN Royal Urban PG in Hunasamaranahalli offers 
      the perfect stay for students and professionals. Located strategically near Kempegowda International Airport, it ensures a quick, stress-free commute for travellers and airport employees.`,

    rooms: [
      { type: 'Private Room', price: 13000 },
      { type: 'Two Sharing', price: 7500 },
      { type: 'Three Sharing', price: 6000 },
      { type: 'Four Sharing', price: 5500 },
    ],

    amenities: [
      'Parking',
      'Power Backup',
      'House Keeping',
      'Drinking Water',
      'Almirah',
      'Security',
      'Reception',
      'WiFi',
      'Bed Sheet',
      'Pillow',
      'Bathroom',
      'Refrigerator',
      'CCTV',
      'Lift',
      'Washing Machine',
    ],

    nearbyPlaces: [
      'Kempegowda International Airport',
      'Mall of Asia',
      'Nandi Hills',
      'Foxconn Company',
      'Rank Tech & Interone Tech (Walking Distance)',
      'IBM Bhartiya City (15 mins)',
      'Manyata Tech Park',
      'Sir MVIT (1.4 km)',
      'SVCE (2.3 km)',
      'Sai Vidya Institute',
    ],

    foodIncluded: true,
    image: 'assets/images/an-royal-pg-men.webp',
    whatsappNumber: '918088347951',
    gallery: [],
  },

  {
    id: 5,
    name: 'AN Royal Premium PG',
    for: 'For Women',
    locationShort: 'North Bangalore',
    address: 'Address to be updated',

    about:
      `AN Royal Premium PG for Women.\n Experience a blend of luxury,safety, and convenience at AN Royal Premium PG for Women. Specifically curated for 
      students and working professionals, our accomodation in Hunasamaranahalli provides a sophisticated living environment with 
      a "home away from home" feel. 
      \n Located perfectly near Kempegowda International Airport, it is the premier choice for frequent travelers and aviation professionals seeking a seamless commute.`,

    rooms: [
      { type: 'Private Room', price: 16000 },
      { type: 'Two Sharing', price: 8500 },
      { type: 'Three Sharing', price: 7400 },
      { type: 'Four Sharing', price: 6300 },
    ],

    amenities: [
      'Parking',
      'Power Backup',
      'House Keeping',
      'Drinking Water',
      'Almirah',
      'Security',
      'Reception',
      'WiFi',
      'Bed Sheet',
      'Pillow',
      'Bathroom',
      'Refrigerator',
      'CCTV',
      'Lift',
      'Washing Machine',
    ],

    nearbyPlaces: [
      'Kempegowda International Airport',
      'Mall of Asia',
      'Nandi Hills',
      'Foxconn Company',
      'Rank Tech & Interone Tech (Walking Distance)',
      'IBM Bhartiya City (15 mins)',
      'Manyata Tech Park',
      'Sir MVIT (1.4 km)',
      'SVCE (2.3 km)',
      'Sai Vidya Institute',
    ],

    foodIncluded: true,
    image: 'assets/images/an-royal-pg-men.webp',
    whatsappNumber: '918088347951',
    gallery: [],
  }
];
