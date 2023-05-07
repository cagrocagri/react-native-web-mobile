import { TITLES, URLS } from "../../../../shared/constants";
import PageLayout from "../../../components/pagelayout/js/pagelayout";

function SportScreen() {
  return (
    <PageLayout
      title={TITLES.newsTitle.sport}
      heroUrl={URLS.pageUrls.sportScreen.heroUrl}
      swiperUrl={URLS.pageUrls.sportScreen.swiperUrl}
      topNewsUrl={URLS.pageUrls.sportScreen.topNewsUrl}
      subNewsUrl={URLS.pageUrls.sportScreen.heroUrl}
    />
  );
}

export default SportScreen;
