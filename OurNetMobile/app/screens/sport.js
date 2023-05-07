import { View, ScrollView } from "react-native";
import PageContent from "../../components/PageContent";
import { TITLES, COLORS, URLS, icons } from "../shared/constants";

import styles from "../../styles/index_styles.js";
import MyHeader from "../../components/home/header/Header";

const startLimit = 0;
const endLimit = 20;

const title = TITLES.newsTitle.sport;

const Sport = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MyHeader
        url={URLS.pageUrls.sportScreen.topNewsUrl}
        marqueeTitle={title.toUpperCase()}
        bgColor={COLORS.green}
        color={COLORS.white}
      />
      <View style={styles.container}>
        <PageContent
          title={title}
          categoryColor={COLORS.green}
          bgColor={COLORS.green}
          bgHighlightColor={COLORS.blue}
          startLimitSlider={startLimit}
          endLimitSlider={endLimit}
          sliderURL={URLS.pageUrls.sportScreen.swiperUrl}
          subURL={URLS.pageUrls.sportScreen.subNewsUrl}
        />
      </View>
    </ScrollView>
  );
};
export default Sport;
