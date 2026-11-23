/**
 * TWIN VILLAS — DYNAMIC VILLA DETAILS CONTROLLER
 * Handles multi-villa rendering, switcher pills, room cards, 
 * categorized amenities, transparent rates, and live cost calculation.
 */

var VILLAS_DATA = {
   "twin-villa-93": {
      id: "twin-villa-93",
      name: "Twins Villa 93",
      badge: "Signature Pool Villa",
      badgeIcon: "fa-crown",
      rating: "4.9 (38 Reviews)",
      subtitle: "Private Swimming Pool, AC Suites, Garden Lawn & Swing",
      headlinePrice: "₹14,999",
      baseRate: 14999,
      weekendRate: 19999,
      holidayRate: 24999,
      extraGuestRate: 1200,
      maxGuests: 15,
      standardOccupancy: 10,
      specs: {
         bhk: "1 BHK Luxury",
         guests: "Up to 15 Guests",
         baths: "Ensuite Baths",
         pool: "Private Plunge Pool",
         size: "4,500 sq.ft",
         parking: "Car & Bike Private Parking"
      },
      hookText: "Planning a group escape near Imagica? 🎢<br>Discover Twins Villa 93 with an exclusive crystal-clear private pool 🏊, serene garden lawn and traditional swing.",
      locationText: "📍 Located in Khopoli Pali Road, just 1 hour 45 minutes from Mumbai and Pune in a peaceful gated community.",
      aboutVilla: "A luxury holiday villa featuring attached modern bathrooms | Private indoor swimming pool | Air-conditioned bedrooms | Car and bike private parking | Plush living lounge with Smart TV | Outdoor lawn with swing (jhula) | Covered private parking.",
      societyAmenities: "💪 Gymnasium | 🏊 Large common swimming pool | 🍽️ Restaurant with home delivery | 🏞️ Amba River Frontage | 🎥 Private mini theatre | ⛲ Landscaped common garden | 👮 Round-the-clock security.",
      nearbyAttractions: [
         "Imagica Amusement Park",
         "Ballaleshwar Ganpati Temple, Pali",
         "Devkund Waterfall",
         "Kondegaon Dam",
         "Unhere/ Uddhar Hotwater Springs"
      ],
      overview: `
         <p class="mb-3">
            <strong>Twins Villa 93</strong> is a luxury holiday sanctuary in our gated Khopoli Pali community, located just minutes from Imagica.
         </p>
         <p class="mb-3">
            Step directly from your living lounge into the <strong>private swimming pool</strong> featuring crystal-clear blue waters, decorative tile borders, and elegant ambient lighting. Enjoy quiet mornings in your private grass courtyard on the traditional garden swing (jhula) surrounded by lush privacy greenery.
         </p>
         <p class="mb-0">
            Inside, enjoy air-conditioned master bedrooms, artisan mosaic-tiled ensuite bathrooms, an open dining area, Smart LED TV entertainment, and a fully equipped hospitality beverage counter.
         </p>
      `,
      photos: [
         {
            src: "img/93 villa/IMG_1003.webp",
            thumb: "img/93 villa/IMG_1003.webp",
            title: "Private Swimming Pool",
            category: "Private Pool",
            desc: "Crystal-clear private plunge pool with decorative tiles and Twin's Villa wall signature."
         },
         {
            src: "img/93 villa/IMG_0992.webp",
            thumb: "img/93 villa/IMG_0992.webp",
            title: "Living Lounge Overlooking Pool",
            category: "Living Room",
            desc: "Spacious living room lounge with comfortable sofa seating, plush carpet, Smart LED TV and pool views."
         },
         {
            src: "img/93 villa/IMG_1036.webp",
            thumb: "img/93 villa/IMG_1036.webp",
            title: "Villa Exterior Elevation",
            category: "Exterior",
            desc: "Private gated villa entrance with modern brick-textured facade, covered parking and Twin's 93 Villa sign."
         },
         {
            src: "img/93 villa/IMG_1026.webp",
            thumb: "img/93 villa/IMG_1026.webp",
            title: "Courtyard Lawn & Garden Swing",
            category: "Outdoor Patio",
            desc: "Lush artificial turf lawn with privacy hedge wall and traditional outdoor swing (jhula)."
         },
         {
            src: "img/93 villa/IMG_0949.webp",
            thumb: "img/93 villa/IMG_0949.webp",
            title: "Master AC Bedroom",
            category: "Bedrooms",
            desc: "Cozy air-conditioned bedroom with queen bed, designer headboard, clean linens and bedside lamp."
         },
         {
            src: "img/93 villa/IMG_0984.webp",
            thumb: "img/93 villa/IMG_0984.webp",
            title: "Living Room & Plunge Pool View",
            category: "Living & Pool",
            desc: "Bright living area with large floor-to-ceiling sliding glass window opening to the private plunge pool."
         },
         {
            src: "img/93 villa/IMG_0975.webp",
            thumb: "img/93 villa/IMG_0975.webp",
            title: "Cozy Sofa Lounge & Coffee Table",
            category: "Lounge",
            desc: "Relaxing cushioned sofa setting with round wooden coffee table, soft shaggy rug and ambient lighting."
         },
         {
            src: "img/93 villa/IMG_0985.webp",
            thumb: "img/93 villa/IMG_0985.webp",
            title: "Dining Area & Kitchen Counter",
            category: "Dining",
            desc: "Dining table set with comfortable chairs, tiled splashback and kitchen sink counter."
         },
         {
            src: "img/93 villa/IMG_0972.webp",
            thumb: "img/93 villa/IMG_0972.webp",
            title: "Dining Hall & Passage",
            category: "Dining & Hallway",
            desc: "Open dining space with glass-top table, refrigerator, and doorway leading to bedroom suites."
         },
         {
            src: "img/93 villa/IMG_0956.webp",
            thumb: "img/93 villa/IMG_0956.webp",
            title: "Artisan Ensuite Bathroom",
            category: "Bathrooms",
            desc: "Contemporary bathroom featuring Spanish-style patterned tiles, modern wash basin and geyser."
         },
         {
            src: "img/93 villa/IMG_0966.webp",
            thumb: "img/93 villa/IMG_0966.webp",
            title: "Tea & Coffee Hospitality Tray",
            category: "Hospitality",
            desc: "Complimentary electric kettle station with cups, coffee, tea bags and glassware."
         }
      ],
      rooms: [
         {
            name: "Master King Bedroom Suite",
            tag: "Bedroom 1",
            image: "img/93 villa/IMG_0949.webp",
            bed: "King Bed + Extra Mattress on request",
            size: "350 sq.ft",
            view: "Lawn & Courtyard View",
            bath: "Ensuite Designer Bathroom",
            desc: "Bright, airy bedroom with plush mattress, split air conditioning, and peaceful ambiance."
         },
         {
            name: "Pool-View Living Suite",
            tag: "Living Suite",
            image: "img/93 villa/IMG_0992.webp",
            bed: "Lounge Sofa / Extra Mattresses on request",
            size: "380 sq.ft",
            view: "Private Pool View",
            bath: "Attached Bathroom",
            desc: "Airy poolside lounge with direct sliding glass view of the crystal pool and Smart TV."
         }
      ],
      basicAmenities: [
         {
            name: "Private Swimming Pool",
            icon: "fas fa-swimming-pool",
            desc: "Dedicated private plunge pool with crystal clear water, exclusively for your group."
         },
         {
            name: "All Bedrooms Air Conditioned",
            icon: "fas fa-snowflake",
            desc: "Split AC units installed for cool, refreshing comfort in bedrooms and living hall."
         },
         {
            name: "Garden Lawn & Swing",
            icon: "fas fa-couch",
            desc: "Private courtyard lawn with traditional outdoor swing (jhula) to relax with tea or coffee."
         },
         {
            name: "High-Speed Wi-Fi",
            icon: "fas fa-wifi",
            desc: "Fast optical Wi-Fi coverage across bedrooms, lounge, and poolside."
         },
         {
            name: "Smart LED TV & Lounge",
            icon: "fas fa-tv",
            desc: "Wall-mounted Smart TV with entertainment apps in the living room."
         },
         {
            name: "Car & Bike Private Parking",
            icon: "fas fa-parking",
            desc: "Dedicated safe parking space on premises for cars and two-wheelers."
         },
         {
            name: "24/7 Caretaker Hospitality",
            icon: "fas fa-user-shield",
            desc: "Dedicated on-site staff for check-in assistance and housekeeping."
         },
         {
            name: "100% Power Backup",
            icon: "fas fa-bolt",
            desc: "Generator backup ensures uninterrupted lights, fans, and entertainment."
         }
      ],
      rates: [
         {
            plan: "Weekday Stay (Mon – Thu)",
            rate: "₹14,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Weekend Stay (Fri – Sun)",
            rate: "₹19,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Peak Season / Long Weekends",
            rate: "₹24,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,500 / night"
         }
      ]
   },


   "twin-villa-30": {
      id: "twin-villa-30",
      name: "Twins Villa 30",
      badge: "Signature Pool Villa (Shivanya)",
      badgeIcon: "fa-crown",
      rating: "4.9 (42 Reviews)",
      subtitle: "Private Swimming Pool, AC Suites & Garden Courtyard Swing",
      headlinePrice: "₹14,999",
      baseRate: 14999,
      weekendRate: 19999,
      holidayRate: 24999,
      extraGuestRate: 1200,
      maxGuests: 15,
      standardOccupancy: 10,
      specs: {
         bhk: "1 BHK Luxury",
         guests: "Up to 15 Guests",
         baths: "Ensuite Baths",
         pool: "Private Plunge Pool",
         size: "4,500 sq.ft",
         parking: "Car & Bike Private Parking"
      },
      hookText: "Planning a group trip near Imagica? 🎢<br>Skip cramped hotel rooms! Our spacious Twins Villa 30 (with private pool 🏊) in a secure gated community",
      locationText: "📍 Located in Khopoli, just 1 hour 45 minutes from Mumbai and Pune, making it an ideal escape for city dwellers.",
      aboutVilla: "A spacious luxury villa featuring attached bathrooms | Private swimming pool | Air-conditioned bedrooms | Car and bike private parking | Cosy living lounge with Smart TV | Outdoor courtyard with swing (jhula) | Private parking.",
      societyAmenities: "💪 Gymnasium | 🏊 Large common swimming pool | 🍽️ Restaurant with home delivery | 🏞️ Amba River Frontage | 🎥 Private mini theatre | ⛲ Landscaped common garden and ample open space | 👮 Round-the-clock security.",
      nearbyAttractions: [
         "Imagica Amusement Park",
         "Ballaleshwar Ganpati Temple, Pali",
         "Devkund Waterfall",
         "Kondegaon Dam",
         "Unhere/ Uddhar Hotwater Springs"
      ],
      overview: `
         <p class="mb-3">
            <strong>Twins Villa 30</strong> is a premier luxury holiday villa at Twin Villas, nestled in Khopoli Pali just minutes away from Imagica.
         </p>
         <p class="mb-3">
            Step out into your private <strong>crystal-clear swimming pool</strong> designed for endless leisure and pool parties. Unwind in the spacious outdoor patio featuring a traditional garden swing (jhula), surrounded by lush foliage and quiet mountain breezes.
         </p>
         <p class="mb-0">
            Inside, enjoy air-conditioned master bedrooms, modern ensuite bathrooms with artisan tiles, a cozy living room lounge, Smart TV entertainment, and an equipped kitchen counter with tea/coffee station.
         </p>
      `,
      photos: [
         {
            src: "img/30/IMG_2297.webp",
            thumb: "img/30/IMG_2297.webp",
            title: "Private Swimming Pool",
            category: "Private Pool",
            desc: "Crystal-clear private plunge pool with serene ambiance and Twin Villas signature branding."
         },
         {
            src: "img/30/IMG_1488.webp",
            thumb: "img/30/IMG_1488.webp",
            title: "Master Bedroom Suite",
            category: "Bedrooms",
            desc: "Sunlit air-conditioned bedroom with premium king-size bed, crisp cotton linens, and plush pillows."
         },
         {
            src: "img/30/IMG_1518.webp",
            thumb: "img/30/IMG_1518.webp",
            title: "Outdoor Courtyard & Garden Swing",
            category: "Exterior & Patio",
            desc: "Private courtyard entrance with traditional porch swing (jhula) and relaxing sit-out area."
         },
         {
            src: "img/30/IMG_1512.webp",
            thumb: "img/30/IMG_1512.webp",
            title: "Living & Dining Lounge",
            category: "Living & Dining",
            desc: "Family dining table, refrigerator, mounted Smart LED TV, and split air conditioning."
         },
         {
            src: "img/30/IMG_1511.webp",
            thumb: "img/30/IMG_1511.webp",
            title: "Cozy Living Room Lounge",
            category: "Lounge",
            desc: "Comfortable cushioned sofa lounge nook with large garden-view window and warm wood flooring."
         },
         {
            src: "img/30/IMG_1497.webp",
            thumb: "img/30/IMG_1497.webp",
            title: "Modern Ensuite Bathroom",
            category: "Bathrooms",
            desc: "Contemporary bathroom suite with designer artisan tiles, ceramic wash basin, and hygienic amenities."
         },
         {
            src: "img/30/IMG_1513.webp",
            thumb: "img/30/IMG_1513.webp",
            title: "Tea & Coffee Hospitality Station",
            category: "Amenities",
            desc: "Electric kettle with tea, coffee, sugar amenities and glassware provided for guests."
         }
      ],
      rooms: [
         {
            name: "Master King Bedroom Suite",
            tag: "Bedroom 1",
            image: "img/30/IMG_1488.webp",
            bed: "King Bed + Extra Mattress on request",
            size: "350 sq.ft",
            view: "Garden & Sunlit Courtyard View",
            bath: "Ensuite Designer Bathroom",
            desc: "Bright, airy bedroom with wooden bed, plush mattress, air conditioning, and peaceful ambiance."
         },
         {
            name: "Deluxe Bedroom Suite",
            tag: "Bedroom 2",
            image: "img/30/IMG_1511.webp",
            bed: "Double Bed / Lounge Bed",
            size: "320 sq.ft",
            view: "Mountain & Society View",
            bath: "Attached Bathroom",
            desc: "Comfortable air-conditioned suite with soft ambient light, wardrobe space, and quiet surroundings."
         }
      ],
      basicAmenities: [
         {
            name: "Private Swimming Pool",
            icon: "fas fa-swimming-pool",
            desc: "Dedicated private swimming pool with crystal blue water, exclusive to your group."
         },
         {
            name: "All Bedrooms Air Conditioned",
            icon: "fas fa-snowflake",
            desc: "Split AC units installed for cool, refreshing comfort in bedrooms and living hall."
         },
         {
            name: "Outdoor Swing & Sit-out",
            icon: "fas fa-couch",
            desc: "Spacious private courtyard with a traditional garden swing (jhula) to relax with tea or coffee."
         },
         {
            name: "High-Speed Wi-Fi",
            icon: "fas fa-wifi",
            desc: "Fast optical Wi-Fi coverage across bedrooms, lounge, and poolside."
         },
         {
            name: "Smart LED TV & Music",
            icon: "fas fa-tv",
            desc: "Wall-mounted Smart TV with entertainment apps and sound setup."
         },
         {
            name: "Car & Bike Private Parking",
            icon: "fas fa-parking",
            desc: "Dedicated safe parking space on premises for cars and two-wheelers."
         },
         {
            name: "Dedicated Caretaker",
            icon: "fas fa-user-tie",
            desc: "Attentive on-site caretaker offering daily housekeeping and guest assistance."
         },
         {
            name: "100% Power Generator Backup",
            icon: "fas fa-bolt",
            desc: "Automatic generator backup ensuring uninterrupted lighting, fans, AC, and sockets."
         },
         {
            name: "Free Secure Parking",
            icon: "fas fa-car",
            desc: "Gated compound with dedicated free on-premises parking."
         }
      ],
      rates: [
         {
            plan: "Weekday Stay (Mon – Thu)",
            rate: "₹14,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Weekend Stay (Fri – Sun)",
            rate: "₹19,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Peak Season / Long Weekends",
            rate: "₹24,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,500 / night"
         }
      ]
   },

   "twin-villa-94": {
      id: "twin-villa-94",
      name: "Twins Villa 94",
      badge: "Signature Pool Villa",
      badgeIcon: "fa-crown",
      rating: "4.9 (35 Reviews)",
      subtitle: "Private Swimming Pool, AC Suites & Rooftop Terrace",
      headlinePrice: "₹14,999",
      baseRate: 14999,
      weekendRate: 19999,
      holidayRate: 24999,
      extraGuestRate: 1200,
      maxGuests: 15,
      standardOccupancy: 10,
      specs: {
         bhk: "2 BHK Luxury",
         guests: "Up to 15 Guests",
         baths: "Ensuite Baths",
         pool: "Private Plunge Pool",
         size: "4,500 sq.ft",
         parking: "Car & Bike Private Parking"
      },
      hookText: "Planning a luxury getaway near Imagica? 🎢<br>Enjoy Twins Villa 94 featuring a private crystal-clear pool 🏊, scenic rooftop terrace and serene atmosphere.",
      locationText: "📍 Located in Khopoli Pali Road, just 1 hour 45 minutes from Mumbai and Pune in our secure gated community.",
      aboutVilla: "A modern private pool villa featuring attached bathrooms | Private swimming pool | Air-conditioned bedrooms | Car and bike private parking | Cosy living lounge with Smart TV | Private rooftop terrace | Covered parking.",
      societyAmenities: "💪 Gymnasium | 🏊 Large common swimming pool | 🍽️ Restaurant with home delivery | 🏞️ Amba River Frontage | 🎥 Private mini theatre | ⛲ Landscaped common garden | 👮 Round-the-clock security.",
      nearbyAttractions: [
         "Imagica Amusement Park",
         "Ballaleshwar Ganpati Temple, Pali",
         "Devkund Waterfall",
         "Kondegaon Dam",
         "Unhere/ Uddhar Hotwater Springs"
      ],
      overview: `
         <p class="mb-3">
            <strong>Twins Villa 94</strong> is an exclusive luxury vacation home in our gated Khopoli Pali community, just minutes away from Imagica.
         </p>
         <p class="mb-3">
            Step directly outside into your <strong>crystal-clear private swimming pool</strong> complete with stainless-steel entry steps, exposed brickwork, and signature Twin's Villa wall art. Head up to your expansive private rooftop terrace to soak in mountain breezes, stargaze, and unwind with your group.
         </p>
         <p class="mb-0">
            Inside, enjoy air-conditioned master bedrooms, designer mosaic-tiled ensuite bathrooms, an open living & dining hall with solid wooden dining table, Smart LED TV entertainment, and a hospitality tea/coffee station.
         </p>
      `,
      photos: [
         {
            src: "img/94 villa/IMG_1260.webp",
            thumb: "img/94 villa/IMG_1260.webp",
            title: "Private Swimming Pool",
            category: "Private Pool",
            desc: "Crystal-clear private plunge pool with Twin's Villa wall decor, palm plant, and stainless entry ladder."
         },
         {
            src: "img/94 villa/IMG_1217.webp",
            thumb: "img/94 villa/IMG_1217.webp",
            title: "Master AC Bedroom",
            category: "Bedrooms",
            desc: "Air-conditioned master bedroom with solid wood bed, clean linens, gold drapery, and wooden flooring."
         },
         {
            src: "img/94 villa/IMG_1289.webp",
            thumb: "img/94 villa/IMG_1289.webp",
            title: "Villa Exterior Elevation",
            category: "Exterior",
            desc: "Gated villa entrance with textured modern facade, roof terrace with glass railing, and private parking."
         },
         {
            src: "img/94 villa/IMG_1249.webp",
            thumb: "img/94 villa/IMG_1249.webp",
            title: "Poolside with Brick Feature Wall",
            category: "Private Pool",
            desc: "Private swimming pool adjoining bedroom with granite steps and exposed brick wall."
         },
         {
            src: "img/94 villa/IMG_1234.webp",
            thumb: "img/94 villa/IMG_1234.webp",
            title: "Private Rooftop Terrace",
            category: "Terrace & Views",
            desc: "Expansive open-air rooftop terrace with patterned tiles and open views of the society and sky."
         },
         {
            src: "img/94 villa/IMG_1282.webp",
            thumb: "img/94 villa/IMG_1282.webp",
            title: "Living Hall & Dining Space",
            category: "Living & Dining",
            desc: "Spacious air-conditioned living room with wooden dining table, floral sofa bed, and Smart LED TV."
         },
         {
            src: "img/94 villa/IMG_1274.webp",
            thumb: "img/94 villa/IMG_1274.webp",
            title: "Dining Area & Kitchen Counter",
            category: "Dining & Kitchen",
            desc: "Solid wood dining setup with modular kitchen counter, stainless sink, and mosaic backsplash."
         },
         {
            src: "img/94 villa/IMG_1218.webp",
            thumb: "img/94 villa/IMG_1218.webp",
            title: "King Bed Suite View",
            category: "Bedrooms",
            desc: "Comfortable bedroom with plush mattress, rolled towels, bedside glass tables, and split AC."
         },
         {
            src: "img/94 villa/IMG_1221.webp",
            thumb: "img/94 villa/IMG_1221.webp",
            title: "Bedroom Wardrobe & Dressing",
            category: "Bedrooms",
            desc: "Bedroom view with full-height wooden wardrobe with mirror, side table, and warm lighting."
         },
         {
            src: "img/94 villa/IMG_1235.webp",
            thumb: "img/94 villa/IMG_1235.webp",
            title: "Artisan Ensuite Bathroom",
            category: "Bathrooms",
            desc: "Modern ensuite bathroom with European wash basin, western commode, and artisan patterned tiles."
         },
         {
            src: "img/94 villa/IMG_1268.webp",
            thumb: "img/94 villa/IMG_1268.webp",
            title: "Tea & Coffee Hospitality Station",
            category: "Hospitality",
            desc: "Electric kettle, tea bags, coffee sachets, sugar, spoons, and glassware provided for guests."
         },
         {
            src: "img/94 villa/IMG_1225.webp",
            thumb: "img/94 villa/IMG_1225.webp",
            title: "Complimentary Toiletries Kit",
            category: "Amenities",
            desc: "Branded dental kit, comb, and soaps on designer mosaic shelf."
         }
      ],
      rooms: [
         {
            name: "Master King Bedroom Suite",
            tag: "Bedroom 1",
            image: "img/94 villa/IMG_1217.webp",
            bed: "King Bed + Extra Mattress on request",
            size: "350 sq.ft",
            view: "Courtyard & Terrace View",
            bath: "Ensuite Designer Bathroom",
            desc: "Sunlit air-conditioned bedroom with solid wood king bed, crisp linens, and quiet atmosphere."
         },
         {
            name: "Poolside Living Suite",
            tag: "Living Suite",
            image: "img/94 villa/IMG_1282.webp",
            bed: "Sofa Bed / Extra Mattresses on request",
            size: "380 sq.ft",
            view: "Pool & Terrace View",
            bath: "Attached Bathroom",
            desc: "Airy poolside lounge with direct sliding glass view of the crystal pool, Smart TV and dining table."
         }
      ],
      basicAmenities: [
         {
            name: "Private Swimming Pool",
            icon: "fas fa-swimming-pool",
            desc: "Dedicated private plunge pool with crystal blue water, exclusively for your group."
         },
         {
            name: "All Bedrooms Air Conditioned",
            icon: "fas fa-snowflake",
            desc: "Split AC units installed for cool, refreshing comfort in bedrooms and living hall."
         },
         {
            name: "Private Rooftop Terrace",
            icon: "fas fa-cloud-sun",
            desc: "Open rooftop terrace with panoramic mountain and sky views."
         },
         {
            name: "High-Speed Wi-Fi",
            icon: "fas fa-wifi",
            desc: "Fast optical Wi-Fi coverage across bedrooms, lounge, and poolside."
         },
         {
            name: "Smart LED TV & Lounge",
            icon: "fas fa-tv",
            desc: "Wall-mounted Smart TV with entertainment apps in the living room."
         },
         {
            name: "Car & Bike Private Parking",
            icon: "fas fa-parking",
            desc: "Dedicated safe parking space on premises for cars and two-wheelers."
         },
         {
            name: "24/7 Caretaker Hospitality",
            icon: "fas fa-user-shield",
            desc: "Dedicated on-site staff for check-in assistance and housekeeping."
         },
         {
            name: "100% Power Backup",
            icon: "fas fa-bolt",
            desc: "Generator backup ensures uninterrupted lights, fans, and entertainment."
         }
      ],
      rates: [
         {
            plan: "Weekday Stay (Mon – Thu)",
            rate: "₹14,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Weekend Stay (Fri – Sun)",
            rate: "₹19,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Peak Season / Long Weekends",
            rate: "₹24,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,500 / night"
         }
      ]
   },

   "twin-villa-95": {
      id: "twin-villa-95",
      name: "Twins Villa 95",
      badge: "Signature Pool Villa",
      badgeIcon: "fa-crown",
      rating: "4.9 (41 Reviews)",
      subtitle: "Private Swimming Pool with Waterfall, AC Suites & Scenic Balcony",
      headlinePrice: "₹14,999",
      baseRate: 14999,
      weekendRate: 19999,
      holidayRate: 24999,
      extraGuestRate: 1200,
      maxGuests: 15,
      standardOccupancy: 10,
      specs: {
         bhk: "3 BHK Luxury",
         guests: "Up to 15 Guests",
         baths: "3 Ensuite Baths",
         pool: "Waterfall Plunge Pool",
         size: "4,500 sq.ft",
         parking: "Car & Bike Private Parking"
      },
      hookText: "Planning a luxury getaway near Imagica? 🎢<br>Discover Twins Villa 95 with an exclusive private waterfall swimming pool 🏊, grand living lounge and scenic mountain balcony.",
      locationText: "📍 Located in Khopoli Pali Road, just 1 hour 45 minutes from Mumbai and Pune in our serene gated community.",
      aboutVilla: "A luxury holiday villa featuring attached modern bathrooms | Private swimming pool with waterfall fountain | Air-conditioned bedrooms | Car and bike private parking | Grand open-plan living lounge with Smart TV | Private glass-railing balcony & rooftop terrace | Gated parking.",
      societyAmenities: "💪 Gymnasium | 🏊 Large common swimming pool | 🍽️ Restaurant with home delivery | 🏞️ Amba River Frontage | 🎥 Private mini theatre | ⛲ Landscaped common garden | 👮 Round-the-clock security.",
      nearbyAttractions: [
         "Imagica Amusement Park",
         "Ballaleshwar Ganpati Temple, Pali",
         "Devkund Waterfall",
         "Kondegaon Dam",
         "Unhere/ Uddhar Hotwater Springs"
      ],
      overview: `
         <p class="mb-3">
            <strong>Twins Villa 95</strong> is a premium holiday retreat in our gated Khopoli Pali estate, located just minutes from Imagica.
         </p>
         <p class="mb-3">
            The villa showcases an exclusive <strong>private swimming pool with a cascading stone waterfall fountain</strong>, covered terracotta terrace roof, and sunlit poolside deck. Inside, experience a magnificent grand living hall with marble flooring, plush cream sofas, a floral accent armchair, and full-length glass walls overlooking the pool.
         </p>
         <p class="mb-0">
            Enjoy air-conditioned bedrooms on both levels, modern ensuite bathrooms, an upper-floor balcony with peaceful mountain and society views, an equipped kitchenette with dining area, and 24/7 caretaker service.
         </p>
      `,
      photos: [
         {
            src: "img/95 villa/IMG_1177.webp",
            thumb: "img/95 villa/IMG_1177.webp",
            title: "Private Swimming Pool with Waterfall",
            category: "Private Pool",
            desc: "Crystal-clear private swimming pool featuring an elegant waterfall fountain, covered terrace canopy, and stone cladding."
         },
         {
            src: "img/95 villa/IMG_1076.webp",
            thumb: "img/95 villa/IMG_1076.webp",
            title: "Grand Living Hall & Pool View",
            category: "Living Room",
            desc: "Luxurious open-plan living room with plush cream sofa, floral accent armchair, marble coffee table, and direct pool views."
         },
         {
            src: "img/95 villa/IMG_1163.webp",
            thumb: "img/95 villa/IMG_1163.webp",
            title: "Villa Exterior Elevation",
            category: "Exterior",
            desc: "Two-story luxury private villa with private gated entrance, lush landscaped borders, and top-floor balcony."
         },
         {
            src: "img/95 villa/IMG_1189.webp",
            thumb: "img/95 villa/IMG_1189.webp",
            title: "Poolside Deck & Water Fountain",
            category: "Private Pool",
            desc: "Sunny plunge pool with stone statue water fountain, wooden-textured deck, and sliding glass wall to living room."
         },
         {
            src: "img/95 villa/IMG_1078.webp",
            thumb: "img/95 villa/IMG_1078.webp",
            title: "Living Lounge Facing Private Pool",
            category: "Living Room",
            desc: "Bright, spacious hall with full-height glass sliders opening out to the private pool and deck."
         },
         {
            src: "img/95 villa/IMG_1086.webp",
            thumb: "img/95 villa/IMG_1086.webp",
            title: "Sunlit Living Room & Garden View",
            category: "Living Room",
            desc: "Airy hall with large windows, comfortable lounge seating, staircase, and garden entrance."
         },
         {
            src: "img/95 villa/IMG_1092.webp",
            thumb: "img/95 villa/IMG_1092.webp",
            title: "Smart LED TV & Entertainment Lounge",
            category: "Living Room",
            desc: "Living area with wall-mounted Smart LED TV, floating media console, split air conditioning, and marble floors."
         },
         {
            src: "img/95 villa/IMG_1096.webp",
            thumb: "img/95 villa/IMG_1096.webp",
            title: "Dining Area & Modular Kitchen",
            category: "Dining & Kitchen",
            desc: "Round glass dining table with upholstered floral chairs, modular kitchen cabinets, and refrigerator."
         },
         {
            src: "img/95 villa/IMG_1049.webp",
            thumb: "img/95 villa/IMG_1049.webp",
            title: "Ground Floor Pool-View Bedroom",
            category: "Bedrooms",
            desc: "Spacious master bedroom with plush king bed, dark tufted headboard, split AC, and sliding glass door to pool."
         },
         {
            src: "img/95 villa/IMG_1051.webp",
            thumb: "img/95 villa/IMG_1051.webp",
            title: "Master King Suite Wardrobe",
            category: "Bedrooms",
            desc: "Clean white linens, rolled towels, full-length dressing mirror, bedside table, and floor-to-ceiling wardrobe."
         },
         {
            src: "img/95 villa/IMG_1052.webp",
            thumb: "img/95 villa/IMG_1052.webp",
            title: "Poolside Bedroom Sliders",
            category: "Bedrooms",
            desc: "King bedroom with direct view and access to the outdoor private plunge pool through glass sliders."
         },
         {
            src: "img/95 villa/IMG_1112.webp",
            thumb: "img/95 villa/IMG_1112.webp",
            title: "Upper Floor Deluxe AC Bedroom",
            category: "Bedrooms",
            desc: "Sunlit bedroom on upper level with king bed, rich wood wardrobe, modern artwork, and balcony access."
         },
         {
            src: "img/95 villa/IMG_1150.webp",
            thumb: "img/95 villa/IMG_1150.webp",
            title: "Golden Feature Wall Bedroom Suite",
            category: "Bedrooms",
            desc: "Elegant bedroom with textured golden feature wall, cushioned headboard, clean linens, and bedside lamp."
         },
         {
            src: "img/95 villa/IMG_1154.webp",
            thumb: "img/95 villa/IMG_1154.webp",
            title: "Upper Bedroom Balcony View",
            category: "Bedrooms",
            desc: "Bright bedroom with panoramic glass window overlooking the society greens and private balcony."
         },
         {
            src: "img/95 villa/IMG_1157.webp",
            thumb: "img/95 villa/IMG_1157.webp",
            title: "Balcony Vista & Society View",
            category: "Terrace & Views",
            desc: "Scenic bedroom balcony window framing peaceful mountain horizon and society villas."
         },
         {
            src: "img/95 villa/IMG_1124.webp",
            thumb: "img/95 villa/IMG_1124.webp",
            title: "First Floor Glass Railing Balcony",
            category: "Balcony",
            desc: "Spacious open balcony with modern glass railing, hanging decorative lamp, and lush tree views."
         },
         {
            src: "img/95 villa/IMG_1145.webp",
            thumb: "img/95 villa/IMG_1145.webp",
            title: "Rooftop Terrace with Mountain Breeze",
            category: "Terrace & Views",
            desc: "Open terrace with blue patterned tiles, stainless glass balustrade, and 360-degree open sky views."
         },
         {
            src: "img/95 villa/IMG_1055.webp",
            thumb: "img/95 villa/IMG_1055.webp",
            title: "Ground Floor Ensuite Bathroom",
            category: "Bathrooms",
            desc: "Contemporary bathroom with marble-effect ceramic tiles, vessel sink, and modern sanitary fittings."
         },
         {
            src: "img/95 villa/IMG_1125.webp",
            thumb: "img/95 villa/IMG_1125.webp",
            title: "Upper Ensuite Bathroom",
            category: "Bathrooms",
            desc: "Spacious ensuite bathroom with warm stone tiling, wall-hung toilet, vanity basin, and handheld bidet."
         }
      ],
      rooms: [
         {
            name: "Ground Floor Pool-View Master Suite",
            tag: "Bedroom 1",
            image: "img/95 villa/IMG_1049.webp",
            bed: "King Bed + Extra Mattress on request",
            size: "350 sq.ft",
            view: "Direct Pool Access View",
            bath: "Ensuite Designer Bathroom",
            desc: "Luxurious master bedroom with split AC, plush mattress, and glass sliding door opening right to the pool."
         },
         {
            name: "Upper Deluxe Balcony Suite",
            tag: "Bedroom 2",
            image: "img/95 villa/IMG_1112.webp",
            bed: "King Bed + Extra Mattress on request",
            size: "360 sq.ft",
            view: "Mountain & Balcony View",
            bath: "Attached Bathroom",
            desc: "Sunlit upper bedroom with split AC, full wardrobe, and direct glass door to the private balcony."
         },
         {
            name: "Golden Texture Bedroom Suite",
            tag: "Bedroom 3",
            image: "img/95 villa/IMG_1150.webp",
            bed: "Queen Bed",
            size: "320 sq.ft",
            view: "Society & Garden View",
            bath: "Ensuite Bathroom",
            desc: "Warm bedroom with designer golden feature wall, cushioned headboard, clean linens, and AC."
         }
      ],
      basicAmenities: [
         {
            name: "Waterfall Swimming Pool",
            icon: "fas fa-swimming-pool",
            desc: "Dedicated private plunge pool featuring an elegant stone waterfall fountain, exclusively for your group."
         },
         {
            name: "All Bedrooms Air Conditioned",
            icon: "fas fa-snowflake",
            desc: "Split AC units installed for cool, refreshing comfort in bedrooms and living hall."
         },
         {
            name: "Balcony & Rooftop Terrace",
            icon: "fas fa-cloud-sun",
            desc: "Open balcony and spacious terrace with panoramic mountain and green views."
         },
         {
            name: "High-Speed Wi-Fi",
            icon: "fas fa-wifi",
            desc: "Fast optical Wi-Fi coverage across bedrooms, lounge, and poolside."
         },
         {
            name: "Smart LED TV & Grand Hall",
            icon: "fas fa-tv",
            desc: "Wall-mounted Smart TV with entertainment apps in the spacious living room."
         },
         {
            name: "Car & Bike Private Parking",
            icon: "fas fa-parking",
            desc: "Dedicated safe parking space on premises for cars and two-wheelers."
         },
         {
            name: "24/7 Caretaker Hospitality",
            icon: "fas fa-user-shield",
            desc: "Dedicated on-site staff for check-in assistance and housekeeping."
         },
         {
            name: "100% Power Backup",
            icon: "fas fa-bolt",
            desc: "Generator backup ensures uninterrupted lights, fans, and entertainment."
         }
      ],
      rates: [
         {
            plan: "Weekday Stay (Mon – Thu)",
            rate: "₹14,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Weekend Stay (Fri – Sun)",
            rate: "₹19,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Peak Season / Long Weekends",
            rate: "₹24,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,500 / night"
         }
      ]
   },

   "twin-villa-119": {
      id: "twin-villa-119",
      name: "Twins Villa 119",
      badge: "Waterfall Pool & Swing Suite",
      badgeIcon: "fa-crown",
      rating: "4.9 (38 Reviews)",
      subtitle: "Private Indoor Plunge Pool with Waterfall, Boho Macrame Swing Suite & Park View",
      headlinePrice: "₹14,999",
      baseRate: 14999,
      weekendRate: 19999,
      holidayRate: 24999,
      extraGuestRate: 1200,
      maxGuests: 15,
      standardOccupancy: 10,
      specs: {
         bhk: "3 BHK Luxury",
         guests: "Up to 15 Guests",
         baths: "3 Ensuite Baths",
         pool: "Waterfall Plunge Pool",
         size: "4,500 sq.ft",
         parking: "Car & Bike Private Parking"
      },
      hookText: "Planning a relaxing holiday getaway near Imagica? 🎢<br>Discover Twins Villa 119 with a private waterfall plunge pool 🏊, signature boho macrame swing glasshouse suite, and serene garden park surroundings.",
      locationText: "📍 Located in Khopoli Pali Road, just 1 hour 45 minutes from Mumbai and Pune in our serene gated community.",
      aboutVilla: "A modern luxury 3 BHK villa featuring attached designer bathrooms | Private waterfall plunge pool | Air-conditioned bedrooms including glasshouse swing suite | Equipped kitchenette with dining table & refrigerator | Elegant living lounge with Smart TV | Balcony overlooking lush green surroundings | Next to children's play area | Gated parking.",
      societyAmenities: "💪 Gymnasium | 🏊 Large common swimming pool | 🍽️ Restaurant with home delivery | 🏞️ Amba River Frontage | 🎥 Private mini theatre | ⛲ Landscaped common gardens | 🛝 Children's playground | 🏏 Cricket turf & indoor games.",
      nearbyAttractions: [
         "Imagica Amusement Park",
         "Ballaleshwar Ganpati Temple, Pali",
         "Devkund Waterfall",
         "Kondegaon Dam",
         "Unhere/ Uddhar Hotwater Springs"
      ],
      overview: `
         <p class="mb-3">
            <strong>Twins Villa 119</strong> is an exclusive 3 BHK private retreat in our gated Khopoli Pali estate, designed for effortless relaxation, family holidays, and celebrations.
         </p>
         <p class="mb-3">
            The villa features a <strong>private indoor plunge pool with a natural stone waterfall cascade</strong> and poolside seating. A signature highlight is the bohemian glasshouse bedroom suite complete with an artisanal hanging macrame swing chair, warm ambient lighting, and panoramic green outlooks.
         </p>
         <p class="mb-0">
            Situated right alongside the lush landscaped children's play park, Twins Villa 119 includes air-conditioned master suites with ensuite bathrooms, a modern living room lounge with Smart TV, dining space, optical fiber Wi-Fi, 100% generator power backup, and round-the-clock caretaker hospitality.
         </p>
      `,
      photos: [
         {
            src: "img/119/IMG_1326.webp",
            thumb: "img/119/IMG_1326.webp",
            title: "Private Waterfall Plunge Pool",
            category: "Private Pool",
            desc: "Private indoor plunge pool with soothing stone waterfall fountain and poolside cafe seating."
         },
         {
            src: "img/119/IMG_1335.webp",
            thumb: "img/119/IMG_1335.webp",
            title: "Brick Wall Bedroom Suite & Wardrobe",
            category: "Bedrooms",
            desc: "Luxurious king bedroom suite with split air conditioning, ample wardrobe storage, and crisp linens."
         },
         {
            src: "img/119/IMG_1400.webp",
            thumb: "img/119/IMG_1400.webp",
            title: "Twins Villa 119 Private Entrance",
            category: "Exterior",
            desc: "Private villa entrance gate with stone boundary wall and custom Villa 119 plaque."
         },
         {
            src: "img/119/IMG_1320.webp",
            thumb: "img/119/IMG_1320.webp",
            title: "Waterfall Pool & Stone Cladding",
            category: "Private Pool",
            desc: "Ambient plunge pool with natural stone accent wall, cascading fountain and neon decor."
         },
         {
            src: "img/119/IMG_1317.webp",
            thumb: "img/119/IMG_1317.webp",
            title: "Indoor Plunge Pool Patio",
            category: "Private Pool",
            desc: "Clean, crystal-clear plunge pool water with direct patio access from the bedroom."
         },
         {
            src: "img/119/IMG_1302.webp",
            thumb: "img/119/IMG_1302.webp",
            title: "Living Hall Lounge & Smart TV",
            category: "Living Room",
            desc: "Spacious air-conditioned living lounge with plush sofa seating and wall-mounted Smart LED TV."
         },
         {
            src: "img/119/IMG_1305.webp",
            thumb: "img/119/IMG_1305.webp",
            title: "Living & Dining Space",
            category: "Living & Dining",
            desc: "Open-concept hall with comfortable sofas, dining setup, and ambient ceiling lights."
         },
         {
            src: "img/119/IMG_1309.webp",
            thumb: "img/119/IMG_1309.webp",
            title: "Lounge Coffee Table & Decor",
            category: "Living Room",
            desc: "Inviting living room interior with stylish center table and warm welcoming lighting."
         },
         {
            src: "img/119/IMG_1364.webp",
            thumb: "img/119/IMG_1364.webp",
            title: "Glasshouse Suite with Boho Macrame Swing",
            category: "Bedrooms",
            desc: "Signature glass-enclosed bedroom featuring a handcrafted bohemian hanging macrame swing chair and king bed."
         },
         {
            src: "img/119/IMG_1328.webp",
            thumb: "img/119/IMG_1328.webp",
            title: "Master Bedroom with Brick Feature Wall",
            category: "Bedrooms",
            desc: "Sophisticated AC master bedroom featuring an authentic exposed-brick accent wall and king-sized bed."
         },
         {
            src: "img/119/IMG_1338.webp",
            thumb: "img/119/IMG_1338.webp",
            title: "Master Bedroom Ambient View",
            category: "Bedrooms",
            desc: "Warm ambient lighting and serene decor in the master bedroom suite."
         },
         {
            src: "img/119/IMG_1346.webp",
            thumb: "img/119/IMG_1346.webp",
            title: "Upper Floor AC Bedroom Suite",
            category: "Bedrooms",
            desc: "Sunlit upper bedroom with split air conditioning, comfortable king mattress, and ensuite access."
         },
         {
            src: "img/119/IMG_1349.webp",
            thumb: "img/119/IMG_1349.webp",
            title: "Upper Bedroom King Bedding",
            category: "Bedrooms",
            desc: "Quiet and peaceful bedroom accommodation designed for a sound night's sleep."
         },
         {
            src: "img/119/IMG_1352.webp",
            thumb: "img/119/IMG_1352.webp",
            title: "Modern Attached Bathroom",
            category: "Bathrooms",
            desc: "Contemporary tiled bathroom with branded sanitaryware, mirror, and toiletries."
         },
         {
            src: "img/119/IMG_1355.webp",
            thumb: "img/119/IMG_1355.webp",
            title: "Ensuite Bathroom Rain Shower",
            category: "Bathrooms",
            desc: "Designer bathroom with hot water shower geyser and spotlessly clean fittings."
         },
         {
            src: "img/119/IMG_1356.webp",
            thumb: "img/119/IMG_1356.webp",
            title: "Ensuite Vanity & Mirror",
            category: "Bathrooms",
            desc: "Convenient ensuite wash basin vanity and modern plumbing fixtures."
         },
         {
            src: "img/119/IMG_1383.webp",
            thumb: "img/119/IMG_1383.webp",
            title: "Scenic Upper Terrace Balcony",
            category: "Balcony",
            desc: "Upper floor viewing balcony offering fresh country breeze and mountain vistas."
         },
         {
            src: "img/119/IMG_1389.webp",
            thumb: "img/119/IMG_1389.webp",
            title: "Children's Play Park Behind Villa",
            category: "Exterior",
            desc: "Lush green landscaped park and children's playground located right next to the villa."
         },
         {
            src: "img/119/IMG_1395.webp",
            thumb: "img/119/IMG_1395.webp",
            title: "Gated Society Paved Walkway",
            category: "Exterior",
            desc: "Wide, well-lit paved community avenue surrounding Twins Villa 119."
         }
      ],
      rooms: [
         {
            name: "Glasshouse Suite with Boho Macrame Swing",
            tag: "Bedroom 1",
            image: "img/119/IMG_1364.webp",
            bed: "King Bed + Hanging Swing Chair",
            size: "360 sq.ft",
            view: "Garden & Pool View",
            bath: "Ensuite Designer Bathroom",
            desc: "Artisanal suite featuring an indoor bohemian macrame hanging swing, floor-to-ceiling glass wall, and plush king bedding."
         },
         {
            name: "Master Suite with Exposed Brick Accent Wall",
            tag: "Bedroom 2",
            image: "img/119/IMG_1328.webp",
            bed: "King Bed + Extra Mattress on request",
            size: "350 sq.ft",
            view: "Courtyard & Mountain View",
            bath: "Ensuite Private Bathroom",
            desc: "Chic bedroom with rustic exposed brick feature wall, split AC, wardrobe, and modern attached bathroom."
         },
         {
            name: "Upper Deluxe Balcony Bedroom Suite",
            tag: "Bedroom 3",
            image: "img/119/IMG_1346.webp",
            bed: "King Bed + Extra Mattress on request",
            size: "340 sq.ft",
            view: "Scenic Terrace & Play Park View",
            bath: "Attached Bathroom",
            desc: "Airy upper-level bedroom with direct terrace access overlooking the children's play park and green horizons."
         }
      ],
      basicAmenities: [
         {
            name: "Waterfall Plunge Pool",
            icon: "fas fa-swimming-pool",
            desc: "Private indoor plunge pool with stone cascade waterfall and poolside seating."
         },
         {
            name: "Boho Macrame Swing Suite",
            icon: "fas fa-chair",
            desc: "Handcrafted bohemian hanging swing chair inside the glasshouse bedroom."
         },
         {
            name: "All Bedrooms Air Conditioned",
            icon: "fas fa-snowflake",
            desc: "High-efficiency split AC units installed in all bedrooms and living lounge."
         },
         {
            name: "Next to Children's Play Park",
            icon: "fas fa-tree",
            desc: "Green playground with slides and swings right behind the villa for kids to play."
         },
         {
            name: "High-Speed Wi-Fi",
            icon: "fas fa-wifi",
            desc: "High-speed optical fiber Wi-Fi throughout all rooms and balcony areas."
         },
         {
            name: "Smart LED TV & Hall",
            icon: "fas fa-tv",
            desc: "Wall-mounted Smart TV with entertainment apps in the spacious living hall."
         },
         {
            name: "Car & Bike Private Parking",
            icon: "fas fa-parking",
            desc: "Dedicated safe parking space on premises for cars and two-wheelers."
         },
         {
            name: "100% Power Backup & Caretaker",
            icon: "fas fa-bolt",
            desc: "Automatic generator backup and 24/7 dedicated on-site caretaker assistance."
         }
      ],
      rates: [
         {
            plan: "Weekday Stay (Mon – Thu)",
            rate: "₹14,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Weekend Stay (Fri – Sun)",
            rate: "₹19,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Peak Season / Long Weekends",
            rate: "₹24,999",
            occupancy: "Up to 10 Guests",
            extra: "₹1,500 / night"
         }
      ]
   },

   "white-house": {
      id: "white-house",
      name: "Twins Villa White House",
      badge: "Signature 3-Storey White Mansion",
      badgeIcon: "fa-gem",
      rating: "5.0 (52 Reviews)",
      subtitle: "Grand 3-Storey White Mansion, Private Lawn Swimming Pool, Double-Height Living & Panoramic Bay Windows",
      headlinePrice: "₹16,999",
      baseRate: 16999,
      weekendRate: 22999,
      holidayRate: 27999,
      extraGuestRate: 1200,
      maxGuests: 18,
      standardOccupancy: 12,
      specs: {
         bhk: "3-Storey Grand Mansion",
         guests: "Up to 18 Guests",
         baths: "4 Modern Baths",
         pool: "Private Lawn Pool",
         size: "6,500 sq.ft",
         parking: "Private Gated Driveway"
      },
      hookText: "Experience the ultimate luxury mansion getaway near Imagica! 🏰<br>Welcome to The White House at Twin Villas — an iconic 3-storey private white mansion featuring a crystal-blue pool on expansive green lawns 🏊, double-height grand hall with chandeliers, and curved panoramic glass suites.",
      locationText: "📍 Located in Khopoli Pali Road, just 1 hour 45 minutes from Mumbai and Pune in our exclusive gated community.",
      aboutVilla: "An iconic 3-storey architectural masterpiece | Sprawling private swimming pool directly set in expansive manicured lawn garden | Grand double-height living hall with designer chandelier & plush sofa seating | Curved panoramic glass bay-window master suites with mountain vistas | Luxury air-conditioned master bedrooms with ensuite bathrooms | Car and bike private parking | Multiple viewing balconies & rooftop terrace | 100% generator backup & 24/7 hospitality.",
      societyAmenities: "💪 Gymnasium | 🏊 Large common swimming pool | 🍽️ Restaurant with home delivery | 🏞️ Amba River Frontage | 🎥 Private mini theatre | ⛲ Landscaped common gardens | 🛝 Children's playground | 🏏 Cricket turf & indoor games.",
      nearbyAttractions: [
         "Imagica Amusement Park",
         "Ballaleshwar Ganpati Temple, Pali",
         "Devkund Waterfall",
         "Kondegaon Dam",
         "Unhere/ Uddhar Hotwater Springs"
      ],
      overview: `
         <p class="mb-3">
            <strong>Twins Villa White House</strong> (The White House) is our flagship architectural statement — an imposing 3-storey white mansion nestled in the rolling greenery of Khopoli Pali, just minutes from Imagica.
         </p>
         <p class="mb-3">
            Step out to your <strong>exclusive crystal-blue swimming pool</strong> set directly into an expansive private green lawn, framed by dramatic mountain horizons. Inside, marvel at the <strong>grand double-height ceiling living hall</strong> complete with a crystal chandelier, polished marble floors, and plush designer seating.
         </p>
         <p class="mb-0">
            Featuring signature curved panoramic glass bay-window suites with breathtaking forest vistas, 4 spacious air-conditioned bedrooms, modern ensuite bathrooms, an open dining area, viewing balconies on every floor, and dedicated round-the-clock caretaker hospitality.
         </p>
      `,
      photos: [
         {
            src: "img/White House/IMG_2300.webp",
            thumb: "img/White House/IMG_2300.webp",
            title: "Private Swimming Pool on Expansive Lawn",
            category: "Private Pool",
            desc: "Crystal-blue private swimming pool situated directly on the manicured green lawn garden."
         },
         {
            src: "img/White House/IMG_0828.webp",
            thumb: "img/White House/IMG_0828.webp",
            title: "Grand 3-Storey White House Mansion at Dusk",
            category: "Exterior",
            desc: "Majestic 3-storey white mansion elevation illuminated by warm architectural lighting."
         },
         {
            src: "img/White House/IMG_2301.webp",
            thumb: "img/White House/IMG_2301.webp",
            title: "Pool Waters & Mountain Backdrop",
            category: "Private Pool",
            desc: "Refreshing private pool with expansive lawn and scenic green valley backdrop."
         },
         {
            src: "img/White House/IMG_0840.webp",
            thumb: "img/White House/IMG_0840.webp",
            title: "Manicured Private Lawn Garden",
            category: "Exterior",
            desc: "Lush expansive green lawn surrounding the mansion, ideal for lawn games, evening tea, and family time."
         },
         {
            src: "img/White House/IMG_0842.webp",
            thumb: "img/White House/IMG_0842.webp",
            title: "Sprawling Green Garden Grounds",
            category: "Exterior",
            desc: "Open private lawn estate offering tranquil open skies and fresh mountain air."
         },
         {
            src: "img/White House/IMG_0915.webp",
            thumb: "img/White House/IMG_0915.webp",
            title: "Double-Height Grand Living Hall with Chandelier",
            category: "Living Room",
            desc: "Soaring double-height living hall featuring a sparkling chandelier, marble flooring, and plush sofas."
         },
         {
            src: "img/White House/IMG_0921.webp",
            thumb: "img/White House/IMG_0921.webp",
            title: "Grand Living Hall Entertainment Lounge",
            category: "Living Room",
            desc: "Spacious open-plan lounge with Smart TV entertainment and elegant architectural pillars."
         },
         {
            src: "img/White House/IMG_0908.webp",
            thumb: "img/White House/IMG_0908.webp",
            title: "Modern Kitchen Counter & Dining Station",
            category: "Dining & Kitchen",
            desc: "Equipped kitchen counter, large refrigerator, dining table, and bar counter setup."
         },
         {
            src: "img/White House/IMG_0901.webp",
            thumb: "img/White House/IMG_0901.webp",
            title: "Dining Area & Sculptural Staircase",
            category: "Dining",
            desc: "Dining space connecting seamlessly to the architectural curved staircase leading upstairs."
         },
         {
            src: "img/White House/IMG_0906.webp",
            thumb: "img/White House/IMG_0906.webp",
            title: "Marble Hallway & Architectural Stairwell",
            category: "Living Room",
            desc: "Sunlit marble hallway connecting the ground floor master suites and upper levels."
         },
         {
            src: "img/White House/IMG_0756.webp",
            thumb: "img/White House/IMG_0756.webp",
            title: "Panoramic Curved Bay Window Master Suite",
            category: "Bedrooms",
            desc: "Signature master bedroom featuring curved floor-to-ceiling glass bay windows overlooking mountain greenery."
         },
         {
            src: "img/White House/IMG_0755.webp",
            thumb: "img/White House/IMG_0755.webp",
            title: "Panoramic Bay Bedroom King Suite",
            category: "Bedrooms",
            desc: "Spacious king-sized bed facing panoramic valley windows with blackout curtains and AC."
         },
         {
            src: "img/White House/IMG_0751.webp",
            thumb: "img/White House/IMG_0751.webp",
            title: "Sunlit Panoramic Master Suite Interior",
            category: "Bedrooms",
            desc: "Bright, luxurious master suite with natural lighting and serene forest views."
         },
         {
            src: "img/White House/IMG_0752.webp",
            thumb: "img/White House/IMG_0752.webp",
            title: "Curved Glass Master Bedroom Lounge",
            category: "Bedrooms",
            desc: "Daytime view from the king bed looking out into peaceful green treetops."
         },
         {
            src: "img/White House/IMG_0772.webp",
            thumb: "img/White House/IMG_0772.webp",
            title: "First Floor Luxury Bedroom Suite",
            category: "Bedrooms",
            desc: "Upper floor bedroom with king-sized bed, split air conditioning, and balcony access."
         },
         {
            src: "img/White House/IMG_0788.webp",
            thumb: "img/White House/IMG_0788.webp",
            title: "First Floor Bedroom with Ensuite Access",
            category: "Bedrooms",
            desc: "Comfortable air-conditioned bedroom suite with attached designer bathroom."
         },
         {
            src: "img/White House/IMG_0793.webp",
            thumb: "img/White House/IMG_0793.webp",
            title: "First Floor Private Viewing Balcony",
            category: "Balcony",
            desc: "Spacious private balcony overlooking the lush private lawn and surrounding hills."
         },
         {
            src: "img/White House/IMG_0802.webp",
            thumb: "img/White House/IMG_0802.webp",
            title: "Modern Ensuite Bathroom Vanity",
            category: "Bathrooms",
            desc: "Attached bathroom with contemporary tiles, vanity wash basin, and polished mirror."
         },
         {
            src: "img/White House/IMG_0816.webp",
            thumb: "img/White House/IMG_0816.webp",
            title: "Designer Bathroom with Glass Partition",
            category: "Bathrooms",
            desc: "Sleek modern bathroom featuring a walk-in rain shower with glass enclosure."
         },
         {
            src: "img/White House/IMG_0819.webp",
            thumb: "img/White House/IMG_0819.webp",
            title: "Clean Modern Bathroom Sanitaryware",
            category: "Bathrooms",
            desc: "Immaculately maintained bathroom with continuous hot water supply."
         },
         {
            src: "img/White House/IMG_0853.webp",
            thumb: "img/White House/IMG_0853.webp",
            title: "Second Floor Panoramic Bedroom Suite",
            category: "Bedrooms",
            desc: "Top-tier bedroom suite with panoramic windows capturing expansive mountain horizons."
         },
         {
            src: "img/White House/IMG_0864.webp",
            thumb: "img/White House/IMG_0864.webp",
            title: "Upper Floor AC Bedroom Suite",
            category: "Bedrooms",
            desc: "Air-conditioned bedroom suite with plush mattress, wardrobe, and mountain breeze."
         },
         {
            src: "img/White House/IMG_0885.webp",
            thumb: "img/White House/IMG_0885.webp",
            title: "Upper Level Modern Ensuite Bathroom",
            category: "Bathrooms",
            desc: "Contemporary bathroom with modern fittings and hot water shower."
         },
         {
            src: "img/White House/IMG_0887.webp",
            thumb: "img/White House/IMG_0887.webp",
            title: "Upper Level Bathroom Vanity & Mirror",
            category: "Bathrooms",
            desc: "Neatly maintained bathroom vanity with fresh guest amenities."
         },
         {
            src: "img/White House/IMG_0894.webp",
            thumb: "img/White House/IMG_0894.webp",
            title: "Top-Floor Scenic Balcony & Open Sky View",
            category: "Balcony",
            desc: "Highest vantage point overlooking the entire lush valley and rolling hills of Khopoli."
         }
      ],
      rooms: [
         {
            name: "Panoramic Curved Bay Window Master Suite",
            tag: "Bedroom 1",
            image: "img/White House/IMG_0756.webp",
            bed: "King Bed + Day Lounge",
            size: "420 sq.ft",
            view: "Curved Valley & Forest View",
            bath: "Ensuite Luxury Bathroom",
            desc: "Signature master bedroom featuring curved floor-to-ceiling glass bay windows overlooking mountain greenery."
         },
         {
            name: "First Floor Royal Balcony Suite",
            tag: "Bedroom 2",
            image: "img/White House/IMG_0772.webp",
            bed: "King Bed + Extra Mattress on request",
            size: "380 sq.ft",
            view: "Private Balcony & Lawn View",
            bath: "Ensuite Private Bathroom",
            desc: "Grand first-floor suite with direct access to private viewing balcony, king-sized bed, and ensuite bath."
         },
         {
            name: "Second Floor Mountain View Suite",
            tag: "Bedroom 3",
            image: "img/White House/IMG_0853.webp",
            bed: "King Bed + Extra Mattress on request",
            size: "370 sq.ft",
            view: "Panoramic Mountain Horizon",
            bath: "Ensuite Modern Bathroom",
            desc: "Top-floor bedroom suite with panoramic windows capturing expansive mountain horizons and cool breezes."
         },
         {
            name: "Upper Executive AC Guest Suite",
            tag: "Bedroom 4",
            image: "img/White House/IMG_0864.webp",
            bed: "King Bed",
            size: "350 sq.ft",
            view: "Garden & Mountain View",
            bath: "Dedicated Modern Bathroom",
            desc: "Quiet air-conditioned guest bedroom suite with comfortable bedding, wardrobe, and serene natural lighting."
         }
      ],
      basicAmenities: [
         {
            name: "Private Swimming Pool on Lawn",
            icon: "fas fa-swimming-pool",
            desc: "Crystal-blue private pool set directly into the expansive manicured green lawn."
         },
         {
            name: "Double-Height Grand Living Hall",
            icon: "fas fa-archway",
            desc: "Grand chandelier, marble flooring, high ceilings, and sectional sofas."
         },
         {
            name: "Panoramic Curved Bay Windows",
            icon: "fas fa-door-open",
            desc: "Curved floor-to-ceiling glass wall capturing 180° views of mountain greenery."
         },
         {
            name: "Expansive Private Lawn Garden",
            icon: "fas fa-tree",
            desc: "Large private green garden surrounding the mansion for games, tea, and events."
         },
         {
            name: "All Bedrooms Air Conditioned",
            icon: "fas fa-snowflake",
            desc: "Split air-conditioning in all 4 bedrooms and spacious living areas."
         },
         {
            name: "High-Speed Wi-Fi Across 3 Floors",
            icon: "fas fa-wifi",
            desc: "Seamless optical fiber Wi-Fi internet available throughout all storeys."
         },
         {
            name: "Car & Bike Private Parking",
            icon: "fas fa-parking",
            desc: "Spacious private parking space on premises accommodating multiple cars and two-wheelers."
         },
         {
            name: "100% Power Backup & Caretaker",
            icon: "fas fa-bolt",
            desc: "Dedicated on-site caretaker and automatic generator power backup."
         }
      ],
      rates: [
         {
            plan: "Weekday Stay (Mon – Thu)",
            rate: "₹16,999",
            occupancy: "Up to 12 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Weekend Stay (Fri – Sun)",
            rate: "₹22,999",
            occupancy: "Up to 12 Guests",
            extra: "₹1,200 / night"
         },
         {
            plan: "Peak Season / Long Weekends",
            rate: "₹27,999",
            occupancy: "Up to 12 Guests",
            extra: "₹1,500 / night"
         }
      ]
   }

};

// Aliases for short or numeric parameters
var VILLA_ALIASES = {
   "30": "twin-villa-30",
   "villa-30": "twin-villa-30",
   "twin-villa-30": "twin-villa-30",
   "twins-villa-30": "twin-villa-30",
   "1": "twin-villa-93",
   "93": "twin-villa-93",
   "villa-93": "twin-villa-93",
   "twin-villa-93": "twin-villa-93",
   "twins-villa-93": "twin-villa-93",
   "93-villa": "twin-villa-93",
   "2": "twin-villa-30",
   "94": "twin-villa-94",
   "villa-94": "twin-villa-94",
   "twin-villa-94": "twin-villa-94",
   "twins-villa-94": "twin-villa-94",
   "94-villa": "twin-villa-94",
   "3": "twin-villa-94",
   "95": "twin-villa-95",
   "villa-95": "twin-villa-95",
   "twin-villa-95": "twin-villa-95",
   "twins-villa-95": "twin-villa-95",
   "95-villa": "twin-villa-95",
   "4": "twin-villa-95",
   // Twins Villa 119
   "119": "twin-villa-119",
   "villa-119": "twin-villa-119",
   "twin-villa-119": "twin-villa-119",
   "twins-villa-119": "twin-villa-119",
   "119-villa": "twin-villa-119",
   "5": "twin-villa-119",

   // White House
   "white-house": "white-house",
   "whitehouse": "white-house",
   "villa-white-house": "white-house",
   "the-white-house": "white-house",
   "twins-villa-white-house": "white-house",
   "twin-villa-white-house": "white-house",
   "white-house-villa": "white-house",
   "6": "white-house"
};

var currentVillaId = "twin-villa-93";
var activePhotos = [];
var currentPhotoIdx = 0;

/**
 * Initialize on page load
 */
document.addEventListener("DOMContentLoaded", function () {
   // 1. Parse URL query params
   var urlParams = new URLSearchParams(window.location.search);
   var requestedVilla = urlParams.get("villa") || urlParams.get("id");

   if (requestedVilla) {
      requestedVilla = requestedVilla.toLowerCase().trim();
      if (VILLA_ALIASES[requestedVilla]) {
         requestedVilla = VILLA_ALIASES[requestedVilla];
      }
      if (VILLAS_DATA[requestedVilla]) {
         currentVillaId = requestedVilla;
      }
   }

   // 2. Set default dates (Today + Tomorrow)
   var today = new Date();
   var tomorrow = new Date();
   tomorrow.setDate(today.getDate() + 1);

   var formatYMD = function (d) {
      var month = '' + (d.getMonth() + 1);
      var day = '' + d.getDate();
      var year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
   };

   var todayStr = formatYMD(today);
   var tomorrowStr = formatYMD(tomorrow);

   

   // 4. Render Selected Villa
   renderVilla(currentVillaId);

   // 5. Setup Lightbox Events
   setupLightboxEvents();

   // 6. Listen to popstate (browser back/forward)
   window.addEventListener("popstate", function (e) {
      var params = new URLSearchParams(window.location.search);
      var vId = params.get("villa");
      if (vId && VILLAS_DATA[vId]) {
         renderVilla(vId, false);
      }
   });
});


/**
 * Main render function for current villa
 */
function renderVilla(villaId, updateUrl) {
   var villa = VILLAS_DATA[villaId];
   if (!villa) return;

   currentVillaId = villaId;
   activePhotos = villa.photos;

   // Update URL if requested
   if (updateUrl !== false) {
      var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?villa=" + villaId;
      window.history.pushState({ villa: villaId }, "", newUrl);
   }

   // Update page title
   document.title = `${villa.name} — ${villa.badge} | Twin Villas Khopoli Pali`;


   // Breadcrumbs & Header
   var breadVillaName = document.getElementById("breadVillaName");
   if (breadVillaName) breadVillaName.textContent = villa.name;

   var vdBadge = document.getElementById("vdBadge");
   if (vdBadge) vdBadge.innerHTML = `<i class="fa-solid ${villa.badgeIcon} text-warning me-1"></i> ${villa.badge}`;

   var vdRating = document.getElementById("vdRating");
   if (vdRating) vdRating.innerHTML = `<i class="fas fa-star me-1"></i> ${villa.rating}`;

   var vdTitle = document.getElementById("vdTitle");
   if (vdTitle) vdTitle.textContent = villa.name;

   var vdSubtitle = document.getElementById("vdSubtitle");
   if (vdSubtitle) vdSubtitle.innerHTML = `<i class="fas fa-gem me-1"></i> ${villa.subtitle}`;

   // Quick Meta under Title
   var vdQuickMeta = document.getElementById("vdQuickMeta");
   if (vdQuickMeta) {
      vdQuickMeta.innerHTML = `
         <span><i class="fas fa-map-marker-alt"></i> Khopoli Pali Road, Near Imagica</span>
         <span><i class="fas fa-bed"></i> ${villa.specs.bhk}</span>
         <span><i class="fas fa-swimming-pool"></i> ${villa.specs.pool}</span>
      `;
   }

   // 1. Bento Gallery
   renderBentoGallery(villa.photos);

   // 3. The Space & Society Summary (Short & Crisp format)
   var vdHookText = document.getElementById("vdHookText");
   if (vdHookText && villa.hookText) vdHookText.innerHTML = villa.hookText;

   var vdLocationText = document.getElementById("vdLocationText");
   if (vdLocationText && villa.locationText) vdLocationText.innerHTML = villa.locationText;

   var vdAboutVillaText = document.getElementById("vdAboutVillaText");
   if (vdAboutVillaText && villa.aboutVilla) vdAboutVillaText.innerHTML = villa.aboutVilla;

   var vdSocietyAmenitiesText = document.getElementById("vdSocietyAmenitiesText");
   if (vdSocietyAmenitiesText && villa.societyAmenities) vdSocietyAmenitiesText.innerHTML = villa.societyAmenities;

   var vdNearbyAttractionsList = document.getElementById("vdNearbyAttractionsList");
   if (vdNearbyAttractionsList && villa.nearbyAttractions) {
      vdNearbyAttractionsList.innerHTML = villa.nearbyAttractions.map(function (item) {
         return `<li>${item}</li>`;
      }).join("");
   }

   // 4. Update WhatsApp booking action button
   var btnDetailsWhatsApp = document.getElementById("btnDetailsWhatsApp");
   if (btnDetailsWhatsApp) {
      var waMsg = `Hi Twin Villas, I would like to inquire about availability and rates for ${villa.name} (${villa.specs.bhk}). Please share booking details.`;
      btnDetailsWhatsApp.href = `https://wa.me/919136486153?text=${encodeURIComponent(waMsg)}`;
   }

   // 5. Basic Amenities with Descriptions
   renderAmenities(villa.basicAmenities || villa.amenitiesByCategory);



   // 7. Update Modal Villa Name
   var modalVillaName = document.getElementById("modalVillaName");
   var modalHiddenVilla = document.getElementById("modalHiddenVilla");
   if (modalVillaName) modalVillaName.textContent = villa.name;
   if (modalHiddenVilla) modalHiddenVilla.value = villa.name;
}

/**
 * Render Bento Grid for Photos (1 large + 4 small)
 */
function renderBentoGallery(photos) {
   var container = document.getElementById("vdGalleryBento");
   if (!container) return;

   var count = photos.length;
   var mainPhoto = photos[0];
   var sidePhotos = photos.slice(1, 5);

   var html = `
      <!-- Main Bento Tile -->
      <div class="vd-bento-item vd-bento-main" onclick="openDetailsLightbox(0)">
         <img src="${mainPhoto.src}" alt="${mainPhoto.title}" loading="lazy" />
         <div class="villa-card-badge"><i class="fas fa-camera"></i> Featured View</div>
      </div>
   `;

   sidePhotos.forEach(function (p, i) {
      var realIdx = i + 1;
      var isLast = (i === 3 && count > 5);
      html += `
         <div class="vd-bento-item" onclick="openDetailsLightbox(${realIdx})">
            <img src="${p.thumb}" alt="${p.title}" loading="lazy" />
            ${isLast ? `
               <div class="vd-bento-overlay">
                  <i class="fas fa-images"></i>
                  <span>+${count - 5} More Photos</span>
               </div>
            ` : ''}
         </div>
      `;
   });

   container.innerHTML = html;
}

/**
 * Render Basic Amenities Grid with Descriptions
 */
function renderAmenities(amenities) {
   var container = document.getElementById("vdAmenitiesContainer");
   if (!container) return;

   if (!amenities || amenities.length === 0) {
      container.innerHTML = "";
      return;
   }

   // If basicAmenities array format: [{ name: "...", icon: "...", desc: "..." }]
   if (amenities[0] && amenities[0].name) {
      var html = amenities.map(function (item) {
         var descText = item.desc ? `<p class="vd-amenity-desc mb-0">${item.desc}</p>` : '';
         return `
            <div class="col-12 col-md-6">
               <div class="vd-amenity-card d-flex align-items-start gap-3">
                  <div class="vd-amenity-icon-box flex-shrink-0">
                     <i class="${item.icon}"></i>
                  </div>
                  <div class="flex-grow-1">
                     <h4 class="vd-amenity-title">${item.name}</h4>
                     ${descText}
                  </div>
               </div>
            </div>
         `;
      }).join("");
      container.innerHTML = html;
      return;
   }

   // Fallback if category format is passed
   var flatItems = [];
   amenities.forEach(function (cat) {
      if (cat.items) {
         cat.items.forEach(function (it) {
            flatItems.push({ name: it, icon: cat.icon ? "fas " + cat.icon : "fas fa-check-circle", desc: "" });
         });
      }
   });
   var fallbackHtml = flatItems.slice(0, 10).map(function (item) {
      return `
         <div class="col-12 col-md-6">
            <div class="vd-amenity-card d-flex align-items-start gap-3">
               <div class="vd-amenity-icon-box flex-shrink-0">
                  <i class="${item.icon}"></i>
               </div>
               <div class="flex-grow-1">
                  <h4 class="vd-amenity-title">${item.name}</h4>
               </div>
            </div>
         </div>
      `;
   }).join("");
   container.innerHTML = fallbackHtml;
}

/**
 * Lightbox Controller for Villa Photos
 */
function openDetailsLightbox(idx) {
   var villaLightbox = document.getElementById("villaLightbox");
   if (!villaLightbox || !activePhotos || activePhotos.length === 0) return;

   if (idx < 0) idx = activePhotos.length - 1;
   if (idx >= activePhotos.length) idx = 0;
   currentPhotoIdx = idx;

   var photo = activePhotos[idx];

   var vlbMainImg = document.getElementById("vlbMainImg");
   var vlbSpinner = document.getElementById("vlbSpinner");
   var vlbCur = document.getElementById("vlbCur");
   var vlbTotal = document.getElementById("vlbTotal");
   var vlbCat = document.getElementById("vlbCat");
   var vlbTitle = document.getElementById("vlbTitle");
   var vlbDesc = document.getElementById("vlbDesc");
   var vlbFilmstrip = document.getElementById("vlbFilmstrip");

   if (vlbSpinner) vlbSpinner.classList.add("show");

   if (vlbMainImg) {
      vlbMainImg.src = photo.src;
      vlbMainImg.onload = function () {
         if (vlbSpinner) vlbSpinner.classList.remove("show");
      };
      vlbMainImg.onerror = function () {
         vlbMainImg.src = photo.thumb;
         if (vlbSpinner) vlbSpinner.classList.remove("show");
      };
   }

   if (vlbCur) vlbCur.textContent = idx + 1;
   if (vlbTotal) vlbTotal.textContent = activePhotos.length;
   if (vlbCat) vlbCat.textContent = photo.category || "Villa Photo";
   if (vlbTitle) vlbTitle.textContent = photo.title || "Twin Villas";
   if (vlbDesc) vlbDesc.textContent = photo.desc || "";

   // Render filmstrip thumbnails
   if (vlbFilmstrip) {
      vlbFilmstrip.innerHTML = activePhotos.map(function (p, i) {
         return `
            <div class="vlb-thumb ${i === idx ? 'active' : ''}" onclick="openDetailsLightbox(${i})">
               <img src="${p.thumb}" alt="${p.title}" />
            </div>
         `;
      }).join("");
   }

   villaLightbox.classList.add("open");
   document.body.style.overflow = "hidden";
}

function closeDetailsLightbox() {
   var villaLightbox = document.getElementById("villaLightbox");
   if (!villaLightbox) return;
   villaLightbox.classList.remove("open");
   document.body.style.overflow = "";
}

function setupLightboxEvents() {
   var closeBtn = document.getElementById("vlbCloseBtn");
   var prevBtn = document.getElementById("vlbPrevBtn");
   var nextBtn = document.getElementById("vlbNextBtn");
   var lightbox = document.getElementById("villaLightbox");

   if (closeBtn) closeBtn.addEventListener("click", closeDetailsLightbox);
   if (prevBtn) prevBtn.addEventListener("click", function () { openDetailsLightbox(currentPhotoIdx - 1); });
   if (nextBtn) nextBtn.addEventListener("click", function () { openDetailsLightbox(currentPhotoIdx + 1); });

   if (lightbox) {
      lightbox.addEventListener("click", function (e) {
         if (e.target === lightbox || e.target.classList.contains("vlb-stage")) {
            closeDetailsLightbox();
         }
      });
   }

   document.addEventListener("keydown", function (e) {
      var lb = document.getElementById("villaLightbox");
      if (lb && lb.classList.contains("open")) {
         if (e.key === "Escape") closeDetailsLightbox();
         else if (e.key === "ArrowLeft") openDetailsLightbox(currentPhotoIdx - 1);
         else if (e.key === "ArrowRight") openDetailsLightbox(currentPhotoIdx + 1);
      }
   });
}

/**
 * Modal Booking Enquiry Form -> WhatsApp
 */
function initModalEnquiryForm() {
   var form = document.getElementById("modalEnquiryForm");
   if (!form) return;

   form.addEventListener("submit", function (e) {
      e.preventDefault();

      var villa = VILLAS_DATA[currentVillaId] || {};
      var villaName = villa.name || (document.getElementById("modalHiddenVilla") ? document.getElementById("modalHiddenVilla").value : "Twin Villas");
      var nameInput = form.querySelector('[name="name"]');
      var phoneInput = form.querySelector('[name="phone"]');
      var checkinInput = form.querySelector('[name="checkin"]');
      var checkoutInput = form.querySelector('[name="checkout"]');
      var guestsSelect = form.querySelector('[name="guests"]');
      var messageInput = form.querySelector('[name="message"]');

      var name = nameInput ? nameInput.value.trim() : "";
      var phone = phoneInput ? phoneInput.value.trim() : "";
      var checkin = checkinInput && checkinInput.value ? checkinInput.value : "To be confirmed";
      var checkout = checkoutInput && checkoutInput.value ? checkoutInput.value : "To be confirmed";
      var guests = guestsSelect ? guestsSelect.value : "Family / Friends Group";
      var message = messageInput ? messageInput.value.trim() : "";

      if (!name || !phone) {
         alert("Please enter your Name and Phone Number.");
         return;
      }

      var lines = [
         "Hi Twin Villas, I would like to inquire about booking " + villaName + ":",
         "",
         "👤 *Guest Name:* " + name,
         "📞 *Phone / WhatsApp:* " + phone,
         "📅 *Check-in Date:* " + checkin,
         "📅 *Check-out Date:* " + checkout,
         "👥 *Estimated Guests:* " + guests
      ];

      if (message) {
         lines.push("💬 *Special Requests / Occasion:* " + message);
      }

      lines.push("");
      lines.push("Please share booking availability, rates, and confirmation details.");

      var waUrl = "https://wa.me/919136486153?text=" + encodeURIComponent(lines.join("\n"));
      window.open(waUrl, "_blank");

      // Close modal if open
      var modalEl = document.getElementById("enquiryModal");
      if (modalEl && typeof bootstrap !== "undefined") {
         var modalInstance = bootstrap.Modal.getInstance(modalEl);
         if (modalInstance) modalInstance.hide();
      }
   });
}

// Attach modal enquiry listener
if (document.readyState === "loading") {
   document.addEventListener("DOMContentLoaded", initModalEnquiryForm);
} else {
   initModalEnquiryForm();
}
