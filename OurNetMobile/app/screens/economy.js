import { View, ScrollView } from "react-native";
import PageContent from "../../components/PageContent";
import { TITLES, COLORS, URLS } from "../shared/constants";

import styles from "../../styles/index_styles.js";
import MyHeader from "../../components/home/header/Header";

const startLimit = 0;
const endLimit = 20;
const title = TITLES.newsTitle.economy;

const Economy = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MyHeader
        url={URLS.pageUrls.economyScreen.topNewsUrl}
        marqueeTitle={title.toUpperCase()}
        bgColor={COLORS.blue}
        color={COLORS.white}
      />
      <View style={styles.container}>
        <PageContent
          title={title}
          categoryColor={COLORS.darkBlue}
          bgColor={COLORS.blue}
          bgHighlightColor={COLORS.darkBlue}
          startLimitSlider={startLimit}
          endLimitSlider={endLimit}
          sliderURL={URLS.pageUrls.economyScreen.swiperUrl}
          subURL={URLS.pageUrls.economyScreen.heroUrl}
        />
      </View>
    </ScrollView>
  );
};
export default Economy;
