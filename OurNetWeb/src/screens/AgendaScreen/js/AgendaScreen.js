import { TITLES, URLS } from "../../../../shared/constants";
import PageLayout from "../../../components/pagelayout/js/pagelayout";

function AgendaScreen() {
  return (
    <PageLayout
      title={TITLES.newsTitle.agenda}
      heroUrl={URLS.pageUrls.agendaScreen.heroUrl}
      swiperUrl={URLS.pageUrls.agendaScreen.swiperUrl}
      topNewsUrl={URLS.pageUrls.agendaScreen.topNewsUrl}
      subNewsUrl={URLS.pageUrls.agendaScreen.subNewsUrl}
    />
  );
}

export default AgendaScreen;
