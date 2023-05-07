import * as React from "react";
import { TITLES, URLS, COLORS, SHADOWS } from "../app/shared/constants";

import { SafeAreaView, ScrollView, View, Text, StatusBar } from "react-native";

import styles from "../styles/index_styles";
import MyHeader from "../components/home/header/Header";
import PageContent from "../components/PageContent";
import { Content } from "../components";
import TopContentCard from "../components/common/cards/content/TopContentCard";

const startLimit = 0;
const endLimit = 4;

const title = "Deneme";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MyHeader
        url={URLS.mainScreenUrls.mainUrls.lastNews}
        marqueeTitle={"SON DAKİKA"}
        bgColor={COLORS.red}
        color={COLORS.white}
      />

      <SafeAreaView style={[styles.container]}>
        <View style={[styles.topNewsContainer, SHADOWS.medium]}>
          <View style={styles.listContainer}>
            <Text
              style={[
                styles.topNewsTitle,
                { color: "red", textAlign: "center" },
              ]}
            >
              Öne Çıkan Haberler
            </Text>
            <Text
              style={[
                styles.topNewsTitleBar,
                {
                  backgroundColor: "red",
                  alignSelf: "center",
                  width: "85%",
                },
              ]}
            ></Text>
            <Content
              Card={TopContentCard}
              category={title}
              color={COLORS.webBlue}
              startLimit={startLimit}
              endLimit={endLimit}
              url={URLS.pageUrls.agendaScreen.topNewsUrl}
            />
          </View>
        </View>

        <PageContent
          title={TITLES.newsTitle.agenda}
          categoryColor={COLORS.black}
          bgColor={COLORS.black}
          bgHighlightColor={COLORS.gray}
          startLimitSlider={startLimit}
          endLimitSlider={endLimit}
          sliderURL={URLS.mainScreenUrls.mainUrls.agenda}
          subURL={URLS.mainScreenUrls.subUrls.agenda}
        />

        <PageContent
          title={TITLES.newsTitle.sport}
          categoryColor={COLORS.green}
          bgColor={COLORS.green}
          bgHighlightColor={COLORS.blue}
          startLimitSlider={startLimit}
          endLimitSlider={endLimit}
          sliderURL={URLS.mainScreenUrls.mainUrls.sport}
          subURL={URLS.mainScreenUrls.subUrls.sport}
        />

        <PageContent
          title={TITLES.newsTitle.economy}
          categoryColor={COLORS.darkBlue}
          bgColor={COLORS.blue}
          bgHighlightColor={COLORS.darkBlue}
          startLimitSlider={startLimit}
          endLimitSlider={endLimit}
          sliderURL={URLS.mainScreenUrls.mainUrls.economy}
          subURL={URLS.mainScreenUrls.subUrls.economy}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default Home;
