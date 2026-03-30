// src/familyData.js

export const familyConfig = {
    surname: "गौतम परिवार", // Aapne Gautam kaha tha, toh yahan change kar diya
    motto: "Sada Sahayate - Hamesha Ek Saath",
    heroImage: "/family2.jpg" // Ek hi image rakhi hai duplicate hatane ke liye
};

export const members = [
    {
        id: 1,
        name: "Hanuman Prasad",
        role: "Kakka (Head)",
        image: "/hanuman.png",
        bio: "इनके मार्गदर्शन में परिवार आगे बढ़ रहा है।"
    },
    {
        id: 2,
        name: "Priya",
        role: "घर की बड़ी बिटिया",
        image: "/priya.png",
        bio: "परिवार की शान और खुशियों का ख्याल रखने में मदद करती हैं।"
    },
    {
        id: 3,
        name: "Rajendra Prasad",
        role: "मार्गदर्शक",
        image: "/rajendra.png",
        bio: "परिवार की नींव मजबूत करने में मदद करते हैं।"
    },
    {
        id: 4,
        name: "Sunita Mishra",
        role: "परिवार की धुरी",
        image: "/sunita.png",
        bio: "ममता और स्नेह से पूरे परिवार को जोड़कर रखती हैं।"
    },
    {
        id: 5,
        name: "Vidya Mishra",
        role: "परिवार की धुरी",
        image: "/vidya.png",
        bio: "घर की खुशहाली और अनुशासन का आधार हैं।"
    },
    {
        id: 6,
        name: "Rajan Mishra",
        role: "मार्गदर्शक",
        image: "/rajan.png",
        bio: "परिवार को एक साथ रखने में महत्वपूर्ण भूमिका निभाते हैं।"
    },
    {
        id: 7,
        name: "Manisha Mishra",
        role: "घर की बड़ी बहू",
        image: "/manisha.png",
        bio: "परिवार की परंपराओं और खुशियों का ख्याल रखती हैं।"
    },
    {
        id: 8,
        name: "Saket Mishra",
        role: "सॉफ्टवेयर इंजीनियर", // Aapka profession add kar diya
        image: "/saket.png",
        bio: "परिवार के डिजिटल कार्यों और प्रगति में सहायता करते हैं।"
    },
    {
        id: 9,
        name: "Riya Mishra",
        role: "मझली बहू",
        image: "/riya.png",
        bio: "परिवार की खुशियों में सहयोग और साथ निभाती हैं।"
    },
    {
        id: 10,
        name: "Abhishek Mishra",
        role: "कार्यकर्ता",
        image: "/abhishek.png",
        bio: "परिवार के हर छोटे-बड़े कार्यों में बढ़-चढ़कर हिस्सा लेते हैं।"
    },
    {
        id: 11,
        name: "Rishabh Mishra",
        role: "कार्यकर्ता",
        image: "/rishabh.png",
        bio: "उत्साह के साथ परिवार की मदद के लिए हमेशा तैयार रहते हैं।"
    },
    {
        id: 12,
        name: "Pranjali",
        role: "Child",
        image: "/pranjali.png",
        bio: "परिवार की प्यारी सी बच्ची।"
    },
    {
        id: 13,
        name: "Angel",
        role: "Child",
        image: "/angel.png",
        bio: "घर की नन्हीं परी और खुशियों की वजह।"
    },
    {
        id: 14,
        name: "Navya",
        role: "Child",
        image: "/navya.png",
        bio: "अपनी मासूमियत से सबका मन मोह लेती हैं।"
    },
    {
        id: 15,
        name: "Arohi",
        role: "Child",
        image: "/arohi.png",
        bio: "परिवार की सबसे लाड़ली और चंचल बच्ची।"
    }
];

export const events = [
  { id: 1, description: "तिलक", date: "गुरूवार 30 अप्रैल" },
  { id: 2, description: "मण्‍डपाच्‍छादन", date: "शुक्रवार 1 मई" },
  { id: 3, description: "मातृकापूजन", date: "शनिवार 2 मई" },
  { id: 4, description: "हल्‍दी / मेंहदी", date: "शनिवार 2 मई" },
  { id: 5, description: "बारात / पाणिग्रहण", date: "रविवार 3 मई" },
  { id: 6, description: "वधु प्रवेश", date: "सोमवार 4 मई 2026" }
];

export const memories = [
  // --- PHOTOS ---
  { 
    id: 1, 
    type: "photo", // Batata hai ki ye photo hai
    category: "Wedding Card",
    title: "Rashu Ki Shadi", 
    image: "/shadi.png", // Photo ka path
    description: "rashu ki shadi ke khushiyon bhare pal, jise humesha yaad rakha jayega." 
  },
  { 
    id: 2, 
    type: "photo", 
    title: "Birthday Celebration", 
    image: "/gallery2.jpg", 
    category: "Birthday", 
    description: "घर पर मनाया गया खुशियों भरा जन्मदिन।" 
  },
  
  // --- VIDEOS ---
  { 
    id: 3, 
    type: "video", // Batata hai ki ye video hai
    title: "Holi Dance", 
    image: "/holi_thumb.jpg", // Video ki Thumbnail Photo (Zaroori hai)
    videoUrl: "/holi_dance.mp4", // Video file ka path (MP4)
    category: "Festival", 
    description: "होली के रंग, परिवार के संग — मस्ती और डांस।" 
  },
  { 
    id: 4, 
    type: "video", 
    title: "Rashu ki Shadi - Teaser", 
    image: "/shadi_thumb.jpg", // Video Thumbnail
    videoUrl: "/videos/teaser.mp4", // Video Path
    category: "Wedding", 
    description: "आने वाले मंगल उत्सव की एक झलक।" 
  }
];