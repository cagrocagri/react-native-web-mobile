import { TITLES, URLS } from "../../../../shared/constants";
import PageLayout from "../../../components/pagelayout/js/pagelayout";

function EconomyScreen() {
  return (
    <PageLayout
      title={TITLES.newsTitle.economy}
      heroUrl={URLS.pageUrls.economyScreen.heroUrl}
      swiperUrl={URLS.pageUrls.economyScreen.swiperUrl}
      topNewsUrl={URLS.pageUrls.economyScreen.topNewsUrl}
      subNewsUrl={URLS.pageUrls.economyScreen.subNewsUrl}
    />
  );
}

export default EconomyScreen;
