const songs = [
    {
      title: "Vynálezy objavy",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Železník",
      youtubeId: "-RHc8mwfinE"
    },
    {
      title: "Hudba",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Železník",
      youtubeId: "4isby4yOggU"
    },
    {
      title: "Hrdina",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Železník",
      youtubeId: "et3SAGOhmb8"
    },
    {
      title: "Báseň o umení",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Železník",
      youtubeId: "1d_5Gu6I18k"
    },
    {
      title: "Bije ako zvon",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Železník",
      youtubeId: "ElS63ELNP3U"
    },



    {
      title: "O kovaní",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Cesta do Kráľovstva Víl",
      youtubeId: "sxelJyiVBMc"
    },
    {
      title: "Slnovrat",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Cesta do Kráľovstva Víl",
      youtubeId: "hq18AZzfRdc"
    },
    {
      title: "Bylinková",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Cesta do Kráľovstva Víl",
      youtubeId: "RUzCz9oAEp0"
    },
    {
      title: "O krásnych bohyniach",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Cesta do Kráľovstva Víl",
      youtubeId: "jbv1R4OMRjM"
    },
    {
      title: "Záverečná",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Cesta do Kráľovstva Víl",
      youtubeId: "643TkKicqMA"
    },




    {
      title: "Varíme, varíme",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Múdry Maťko a Blázni",
      youtubeId: "RoDIIz7oSwY"
    },
    {
      title: "Aký máš dnes svet",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Múdry Maťko a Blázni",
      youtubeId: "_p8muBTbq84"
    },
    {
      title: "Radnica",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Múdry Maťko a Blázni",
      youtubeId: "fOE40v7tJqk"
    },
    {
      title: "Najmúdrejší",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Múdry Maťko a Blázni",
      youtubeId: "UkGM3sn4lLc"
    },
    {
      title: "Zostalo ticho ako po rozprávke",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Múdry Maťko a Blázni",
      youtubeId: "F_loGDVT7MA"
    },



    {
      title: "Paragrafová",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Kocúr je Kráľ!",
      youtubeId: "FBrdc3hRePU"
    },
    {
      title: "Na trhovisku",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Kocúr je Kráľ!",
      youtubeId: "6zul5cbJfs4"
    },
    {
      title: "Mačacia",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Kocúr je Kráľ!",
      youtubeId: "l3bFeCbVKz0"
    },
    {
      title: "Hej roľa",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Kocúr je Kráľ!",
      youtubeId: "NFuDZE57YZI"
    },
    {
      title: "O dôvtipe",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Kocúr je Kráľ!",
      youtubeId: "zsw5qp8hcHg"
    },


    {
      title: "O čistení",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "O Štyroch Princeznách",
      youtubeId: "GW_xus7HVb0"
    },
    {
      title: "Lúčenie so slobodu",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "O Štyroch Princeznách",
      youtubeId: "_NbPlW4U4EM"
    },
    {
      title: "O kráse",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "O Štyroch Princeznách",
      youtubeId: "9wpPs9Xtd7A"
    },
    {
      title: "O tancovaní",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "O Štyroch Princeznách",
      youtubeId: "BvQyk3iIye4"
    },
    {
      title: "O zvedavosti",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "O Štyroch Princeznách",
      youtubeId: "IcuDUgN9TOE"
    },





    {
      title: "Zlatokopky",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Dlhý, Široký a Bystrozraký",
      youtubeId: "PXwlFyjYWR8"
    },
    {
      title: "Dožinková",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Dlhý, Široký a Bystrozraký",
      youtubeId: "MXCupTvkBRY"
    },
    {
      title: "Kde mesiac svieti",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Dlhý, Široký a Bystrozraký",
      youtubeId: "kPITi04u0e8"
    },
    {
      title: "O strašení",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Dlhý, Široký a Bystrozraký",
      youtubeId: "qx6tqX-7d3Q"
    },
    {
      title: "Najkrajšia zo všetkých piesní",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Dlhý, Široký a Bystrozraký",
      youtubeId: "dWihpXEVTcE"
    },




    {
      title: "Stokrát viac dostanem",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Soľ a Láska nad Zlato",
      youtubeId: "Y8A_tACAl9Q",
    },
    {
      title: "Všetci si tam žijú v zhode",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Soľ a Láska nad Zlato",
      youtubeId: "ntOUzDqEY_k",
    },
    {
      title: "O soli",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Soľ a Láska nad Zlato",
      youtubeId: "No0ARcuPRVs",
    },
    {
      title: "To je láska",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Soľ a Láska nad Zlato",
      youtubeId: "23Km8wacsXg",
    },
    {
      title: "Soľ a láska",
      artist: "Rozprávka na hrade Ľubovňa",
      cover: "/Z-plagat.jpg",
      show: "Soľ a Láska nad Zlato",
      youtubeId: "gdWaXdnDoO8",
    },


  ];
  
  export default songs;
  
  