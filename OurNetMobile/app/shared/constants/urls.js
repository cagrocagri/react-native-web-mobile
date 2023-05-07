const URLS = {
  mainScreenUrls: {
    swiperUrl: "https://www.mynet.com/",
    mainUrls: {
      agenda: "https://www.sabah.com.tr/rss/gundem.xml",
      sport: "https://www.aspor.com.tr/rss/anasayfa.xml",
      economy: "https://www.sabah.com.tr/rss/ekonomi.xml",
      lastNews: "https://www.ahaber.com.tr/rss/son24saat.xml",
    },
    subUrls: {
      agenda: "https://www.ahaber.com.tr/rss/gundem.xml",
      sport: "https://www.fotomac.com.tr/rss/anasayfa.xml",
      economy: "https://www.ahaber.com.tr/rss/ekonomi.xml",
    },
    topNewsUrls: {
      mobile: {
        lastNews: "https://www.mynet.com/haber/rss/sondakika",
        agenda: "https://www.mynet.com/haber/rss/kategori/guncel/",
        sport: "https://www.mynet.com/spor/rss",
        economy: "https://www.ahaber.com.tr/rss/galeri/ekonomi.xml",
      },
      agenda: "",
      sport: "http://localhost:8080/https://www.ntv.com.tr/spor.rss",
      economy:
        "http://localhost:8080/https://uzmanpara.milliyet.com.tr/haber_rss/",
    },
  },
  pageUrls: {
    agendaScreen: {
      heroUrl: "https://www.sabah.com.tr/rss/gundem.xml",
      swiperUrl: "https://www.ahaber.com.tr/rss/gundem.xml",
      subNewsUrl: "https://www.haberturk.com/rss/kategori/gundem.xml",
      topNewsUrl: "https://www.mynet.com/haber/rss/kategori/guncel/",
    },
    sportScreen: {
      heroUrl: "https://www.aspor.com.tr/rss/anasayfa.xml",
      swiperUrl: "https://www.fotomac.com.tr/rss/anasayfa.xml",
      subNewsUrl: "https://www.sabah.com.tr/rss/spor.xml",
      topNewsUrl: "https://www.mynet.com/spor/rss",
    },
    economyScreen: {
      heroUrl: "https://www.sabah.com.tr/rss/ekonomi.xml",
      swiperUrl: "https://www.ahaber.com.tr/rss/ekonomi.xml",
      subNewsUrl: "https://finans.mynet.com/haber/rss/gununozeti/",
      topNewsUrl: "https://www.ahaber.com.tr/rss/galeri/ekonomi.xml",
    },
  },
};

export { URLS };
