const destinations = [
  { id: 'cape-coast', name: 'Cape Coast', country: 'Ghana', category: 'Culture', image: 'https://images.unsplash.com/photo-1651860282137-a59f01d2db7b?auto=format&fit=crop&w=1200&q=85', description: 'History, sea air and a shoreline made for slow afternoons.', details: 'Walk the historic castle grounds, take in the Atlantic horizon, then follow the coast to small fishing villages and quiet beaches.' },
  { id: 'cape-town', name: 'Cape Town', country: 'South Africa', category: 'City', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=85', description: 'A luminous city between mountain and ocean.', details: 'Ride the cableway up Table Mountain, browse design studios, discover the Cape Winelands and end the day beside the Atlantic.' },
  { id: 'marrakech', name: 'Marrakech', country: 'Morocco', category: 'Culture', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85', description: 'Terracotta walls, spice-filled souks and hidden riads.', details: 'Let the medina lead you through tiled courtyards, artisan workshops and rooftop cafés. A day trip to the Atlas Mountains is close by.' },
  { id: 'kyoto', name: 'Kyoto', country: 'Japan', category: 'Culture', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85', description: 'Temple paths, tea houses and quiet seasonal beauty.', details: 'Visit early for tranquil shrines, wander Gion’s lantern-lit lanes and make space for a slow tea ceremony and a garden afternoon.' },
  { id: 'bali', name: 'Bali', country: 'Indonesia', category: 'Nature', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85', description: 'Lush rituals, rice terraces and restorative stays.', details: 'Balance island beaches with Ubud’s green interior, sunrise temples, local food markets and a restorative afternoon in a boutique spa.' },
  { id: 'santorini', name: 'Santorini', country: 'Greece', category: 'Beach', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85', description: 'Whitewashed villages over the Aegean blue.', details: 'Follow the caldera path from Fira to Oia, swim from volcanic beaches and linger over dinner as the sky turns soft pink at sunset.' },
  { id: 'lisbon', name: 'Lisbon', country: 'Portugal', category: 'City', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85', description: 'Golden light, tiled façades and hillside views.', details: 'Hop on a yellow tram, listen for fado after dark and save room for pastries and a wander through the old Alfama neighbourhood.' },
  { id: 'amalfi', name: 'Amalfi Coast', country: 'Italy', category: 'Beach', image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1200&q=85', description: 'Cliffside colour and Mediterranean ease.', details: 'Take the scenic coastal road, explore lemon groves, swim in clear coves and pause for long lunches above the sea.' },
  { id: 'lake-como', name: 'Lake Como', country: 'Italy', category: 'Nature', image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1200&q=85', description: 'Still water, grand villas and mountain-framed mornings.', details: 'Take the ferry between Bellagio, Varenna and Como, then slow down with a lakeside lunch or a walk through a historic villa garden.' },
  { id: 'paris', name: 'Paris', country: 'France', category: 'City', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85', description: 'Timeless streets, beautiful rituals and late dinners.', details: 'See the city from a quiet café terrace, spend an afternoon in a museum, browse a neighbourhood market and walk the Seine at dusk.' },
  { id: 'zanzibar', name: 'Zanzibar', country: 'Tanzania', category: 'Beach', image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85', description: 'Turquoise water, spice air and sun-washed Stone Town.', details: 'Pair slow beach days with the carved doors and winding lanes of Stone Town, a spice tour and a sunset sail on a traditional dhow.' },
  { id: 'dubai', name: 'Dubai', country: 'United Arab Emirates', category: 'City', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85', description: 'A skyline of bold ideas, desert light and beautiful stays.', details: 'Move between contemporary galleries, old Dubai’s souks, desert landscapes and a dinner overlooking the city lights.' },
  { id: 'london', name: 'London', country: 'United Kingdom', category: 'City', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85', description: 'Historic landmarks, neighbourhood character and a world of culture.', details: 'Build your days around grand museums, beautiful parks, market lunches and a theatre evening in one of the world’s most layered cities.' },
  { id: 'rome', name: 'Rome', country: 'Italy', category: 'Culture', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85', description: 'Ancient ruins, lively piazzas and long Roman dinners.', details: 'History lives in the open air here: make time for major monuments, intimate side streets, espresso stops and an evening passeggiata.' },
  { id: 'sydney', name: 'Sydney', country: 'Australia', category: 'City', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=85', description: 'Harbour light, iconic architecture and an outdoor way of life.', details: 'Move easily from the Opera House and harbour ferries to ocean walks, beach afternoons and lively dining neighbourhoods.' }
];

const accommodationProfiles = {
  Beach: [
    { name: 'Sea-view guesthouse', type: 'Hotel', price: 'US$70–125 / night', level: 'Budget', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=700&q=85' },
    { name: 'Boutique beach hotel', type: 'Hotel', price: 'US$155–260 / night', level: 'Comfort', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=85' },
    { name: 'Private coastal villa', type: 'Airbnb-style private stay', price: 'US$350+ / night', level: 'Luxury', image: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=700&q=85' }
  ],
  City: [
    { name: 'Central aparthotel', type: 'Hotel', price: 'US$90–145 / night', level: 'Budget', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=700&q=85' },
    { name: 'Design-led city hotel', type: 'Hotel', price: 'US$180–310 / night', level: 'Comfort', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=700&q=85' },
    { name: 'Private skyline apartment', type: 'Airbnb-style private stay', price: 'US$390+ / night', level: 'Luxury', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85' }
  ],
  Nature: [
    { name: 'Scenic guesthouse', type: 'Hotel', price: 'US$80–135 / night', level: 'Budget', image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=700&q=85' },
    { name: 'Lakeside boutique hotel', type: 'Hotel', price: 'US$195–335 / night', level: 'Comfort', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=700&q=85' },
    { name: 'Private villa with a view', type: 'Airbnb-style private stay', price: 'US$420+ / night', level: 'Luxury', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85' }
  ],
  Culture: [
    { name: 'Characterful guesthouse', type: 'Hotel', price: 'US$75–130 / night', level: 'Budget', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=700&q=85' },
    { name: 'Heritage boutique hotel', type: 'Hotel', price: 'US$170–295 / night', level: 'Comfort', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=85' },
    { name: 'Private heritage home', type: 'Airbnb-style private stay', price: 'US$370+ / night', level: 'Luxury', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85' }
  ]
};

function getAccommodationOptions(destination) {
  return destinationStays[destination.id] || accommodationProfiles[destination.category] || accommodationProfiles.City;
}

const destinationStays = {
  'cape-coast': [
    { name: 'Ridge Royal Hotel', type: 'Hotel · Cape Coast', price: 'Check current rate', level: 'Budget', image: 'https://pub-5bcc3edf34304d04b59dc91e1ad9d2fd.r2.dev/tortoisepath.com/uploads/2023/09/03123358/Ridge-Royal-Hotel-Cape-Coast-Ghana-Cape-Coast-Ghana-TortoisePathcom-9-jpeg.webp' },
    { name: 'Coconut Grove Beach Resort', type: 'Hotel · Elmina', price: 'Check current rate', level: 'Comfort', image: 'https://www.coupons.com.gh/attachments/177c398f6405595fb9598f6388dfd66c29ab0fc8/store/fill/1000%21/600%21/d5e84cc5f7aa2bcba7e53249dd555a7cc32be02cca1b34c34f8616f10f41/41dcf60e48b9d63c25c3a7316d2c5ffd95cd5f56.jpeg' },
    { name: 'Cape Coast private beach home', type: 'Airbnb-style private stay', price: 'Check current rate', level: 'Luxury', image: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=85' }
  ],
  london: [
    { name: 'The Resident Covent Garden', type: 'Hotel · West End', price: 'Check current rate', level: 'Budget', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85' },
    { name: 'The Hoxton, Holborn', type: 'Hotel · Holborn', price: 'Check current rate', level: 'Comfort', image: 'https://www.hotelscombined.com/himg/2e/68/b3/ice-792876-de4519-110755.jpg' },
    { name: 'The Savoy', type: 'Hotel · Strand', price: 'Check current rate', level: 'Luxury', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=85' }
  ],
  rome: [
    { name: 'Hotel Artemide', type: 'Hotel · Via Nazionale', price: 'Check current rate', level: 'Budget', image: 'https://cdn.audleytravel.com/1050/749/79/15986368-ovolo-woolloomooloo-sydney.jpg' },
    { name: 'Hotel de Russie', type: 'Hotel · Piazza del Popolo', price: 'Check current rate', level: 'Comfort', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85' },
    { name: 'Trastevere private apartment', type: 'Airbnb-style private stay', price: 'Check current rate', level: 'Luxury', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85' }
  ],
  sydney: [
    { name: 'Ovolo Woolloomooloo', type: 'Hotel · Woolloomooloo', price: 'Check current rate', level: 'Budget', image: 'https://cdn.audleytravel.com/1050/749/79/15986368-ovolo-woolloomooloo-sydney.jpg' },
    { name: 'Park Hyatt Sydney', type: 'Hotel · The Rocks', price: 'Check current rate', level: 'Comfort', image: 'https://www.hotelscombined.com/himg/2e/68/b3/ice-792876-de4519-110755.jpg' },
    { name: 'Surry Hills private terrace', type: 'Airbnb-style private stay', price: 'Check current rate', level: 'Luxury', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85' }
  ]
};

const activityProfiles = {
  Beach: ['Swim or spend an unhurried beach morning', 'Take a sunset boat or sailing trip', 'Try a local seafood restaurant', 'Explore a nearby coastal village'],
  City: ['Take a neighbourhood walking tour', 'Visit a museum, gallery, or landmark', 'Browse a food market or local cafés', 'Book a rooftop or evening city experience'],
  Nature: ['Take a scenic walk or gentle hike', 'Spend time on the water', 'Visit a garden, viewpoint, or protected landscape', 'Plan a long local lunch with a view'],
  Culture: ['Join a guided heritage walk', 'Visit a historic site or cultural landmark', 'Browse artisan shops and local markets', 'Try a traditional food or craft experience']
};

const activityImages = {
  Beach: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&w=700&q=85'],
  City: ['https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85'],
  Nature: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85'],
  Culture: ['https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=85']
};

const destinationActivities = {
  'cape-coast': ['Tour Cape Coast Castle with a local guide', 'Walk the canopy bridge at Kakum National Park', 'Watch the fishing boats return to the harbour', 'Try Fante seafood and local Ghanaian dishes'],
  'cape-town': ['Ride the cableway up Table Mountain', 'See penguins at Boulders Beach', 'Taste your way through the Cape Winelands', 'Walk through colourful Bo-Kaap'],
  marrakech: ['Explore the souks of the medina', 'Visit Jardin Majorelle', 'Enjoy a hammam or riad spa ritual', 'Take a day trip to the Atlas Mountains'],
  kyoto: ['Walk through Fushimi Inari’s torii gates', 'Join a traditional tea ceremony', 'Visit Kiyomizu-dera Temple', 'Stroll Gion at lantern-lit dusk'],
  bali: ['See the Tegallalang rice terraces', 'Visit a water temple at sunrise', 'Take a Balinese cooking class', 'Spend a restorative afternoon in Ubud'],
  santorini: ['Walk the caldera trail from Fira to Oia', 'Sail around the volcanic islands', 'Taste Santorini wines at a local winery', 'Watch sunset from Oia'],
  lisbon: ['Ride the historic Tram 28', 'Listen to fado in Alfama', 'Taste pastel de nata in Belém', 'See the city from a miradouro viewpoint'],
  amalfi: ['Drive or boat along the Amalfi Coast', 'Visit lemon groves in Sorrento', 'Swim from a quiet coastal cove', 'Explore colourful Positano'],
  'lake-como': ['Take the ferry between Bellagio and Varenna', 'Visit Villa Carlotta’s gardens', 'Cruise the lake at golden hour', 'Enjoy a lakeside aperitivo in Como'],
  paris: ['See classic art at the Louvre or Musée d’Orsay', 'Picnic along the Seine', 'Browse Montmartre’s creative streets', 'Watch Paris light up from a rooftop'],
  zanzibar: ['Wander Stone Town’s carved-door alleyways', 'Take a traditional dhow sunset sail', 'Join a spice-farm tour', 'Snorkel in clear Indian Ocean water'],
  dubai: ['Go up the Burj Khalifa', 'Browse the souks of Old Dubai', 'Take a desert safari at sunset', 'Visit the Museum of the Future'],
  london: ['See London from the Eye or a Thames cruise', 'Spend an afternoon at the British Museum', 'Explore Borough Market', 'Book a West End theatre evening'],
  rome: ['Walk through the Colosseum and Roman Forum', 'Visit the Vatican Museums', 'Toss a coin at the Trevi Fountain', 'Eat your way through Trastevere'],
  sydney: ['Tour the Sydney Opera House', 'Take a harbour ferry to Manly', 'Walk from Bondi to Coogee', 'Take a day trip to the Blue Mountains']
};

const destinationActivityImages = {
  'cape-coast': [
    'https://images.unsplash.com/photo-1651860282137-a59f01d2db7b?auto=format&fit=crop&w=700&q=85',
    'https://lp-cms-production.imgix.net/2019-06/4ff8832a8d19ea7052472571c53c6ccf-kakum-national-park.jpg?auto=format&fit=crop&w=700&q=72',
    'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=85'
  ],
  london: [
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?auto=format&fit=crop&w=700&q=85'
  ],
  rome: [
    'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=700&q=85'
  ],
  sydney: [
    'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85'
  ]
};

function getActivities(destination) {
  const category = destination.category in activityProfiles ? destination.category : 'City';
  const activities = destinationActivities[destination.id] || activityProfiles[category];
  const images = destinationActivityImages[destination.id] || activityImages[category];
  return activities.map((name, index) => ({ name, image: images[index] }));
}
