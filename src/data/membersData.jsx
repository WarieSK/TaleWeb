const membersData = [
    {
      id: 1,
      name: "Peter Karpinský",
      role: "Scénarista a Režisér",
      image: "/JA.jpg",
      bio: "Peter Karpinský je nielen spisovateľ, ale aj významný divadelný tvorca, ktorý sa venuje režii a organizovaniu divadelných projektov. Je zakladateľom a lídrom Divadla teatrálnej skratky (DTS), ktoré je známe svojimi inscenáciami s regionálnymi a historickými témami."
    },
    {
      id: 2,
      name: "Martin (Šaľo) Jakubčo",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Talentovaná režisérka, ktorá prináša do divadla inovácie a kreativitu."
    },
    {
      id: 3,
      name: "Adam Kollár",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Odborník na scénografiu, ktorý sa stará o vizuálnu stránku predstavení."
    },
    {
      id: 4,
      name: "Nina Kollárová",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Tvorí jedinečné kostýmy pre každé predstavenie."
    },
    {
      id: 5,
      name: "Jana (Bigi) Konkoľová",
      role: "Choreograf a Tanečník",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 6,
      name: "Zuzana (Zuza) Biganičová",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 7,
      name: "Tomáš (Bigi) Biganič",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 8,
      name: "Lukáš (Popy) Popadič",
      role: "Choreograf a Tanečník",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 9,
      name: "Katarína Melcherová",
      role: "Choreograf a Tanečník",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 10,
      name: "Lenka Melcherová",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 11,
      name: "Kristína Lazorčáková",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 12,
      name: "Daniel Lazorčák",
      role: "Herec a Hudobný Skladateľ",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 13,
      name: "Slavomír (Slavo) Dzugas",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 14,
      name: "Anna Dzugasová",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 15,
      name: "Erik Grech",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 16,
      name: "Sofia Gontkovičová",
      role: "Herec a Spevák",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 17,
      name: "Mariana (Marianka) Ondrejová",
      role: "Herec a Spevák",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 18,
      name: "Daniel Vrábeľ",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 19,
      name: "Monika Timočková",
      role: "Herec a Spevák",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 20,
      name: "Františka (Fráňa) Sarnecká",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 21,
      name: "Barbora Plutová",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 22,
      name: "Jakub Pluta",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 23,
      name: "Mária (Mery) Hollaarová",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 24,
      name: "Sára Mária Hollaarová",
      role: "Herec a Spevák",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 25,
      name: "Daniela Tomková",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 26,
      name: "Klaudia Šprochová",
      role: "Herec a Tanečník",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 27,
      name: "Katarína Filičková",
      role: "Herec a Spevák",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
    {
      id: 28,
      name: "Adam (Štefi) Štefunko",
      role: "Herec",
      image: "/JA.jpg",
      bio: "Zodpovedný za hudobný sprievod a atmosféru predstavení."
    },
  ];
  
  export default membersData;
