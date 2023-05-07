import { ScrollView, SafeAreaView } from "react-native";
import PageContent from "../../components/PageContent";
import { TITLES, COLORS, URLS } from "../shared/constants";

import styles from "../../styles/index_styles.js";
import MyHeader from "../../components/home/header/Header";

const startLimit = 0;
const endLimit = 20;

const title = TITLES.newsTitle.agenda;

const Agenda = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MyHeader
        url={URLS.pageUrls.agendaScreen.topNewsUrl}
        marqueeTitle={title.toUpperCase()}
        bgColor={COLORS.black}
        color={COLORS.white}
      />
      <SafeAreaView style={styles.container}>
        <PageContent
          title={title}
          categoryColor={COLORS.black}
          bgColor={COLORS.black}
          bgHighlightColor={COLORS.gray}
          startLimitSlider={startLimit}
          endLimitSlider={endLimit}
          sliderURL={URLS.pageUrls.agendaScreen.swiperUrl}
          subURL={URLS.pageUrls.agendaScreen.heroUrl}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
export default Agenda;
