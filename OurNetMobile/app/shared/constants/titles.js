const agenda = "Gündem";
const sport = "Spor";
const economy = "Ekonomi";
const messageStart = "Son";
const messageEnd = "Haberleri";

const TITLES = {
  webName: "FastNews",
  newsTitle: {
    agenda,
    sport,
    economy,
  },
  topNews: {
    agenda: `${messageStart} ${agenda} ${messageEnd}`,
    sport: `${messageStart} ${sport} ${messageEnd}`,
    economy: `${messageStart} ${economy} ${messageEnd}`,
  },
};

export { TITLES };
