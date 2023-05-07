import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { TITLES, URLS, SHADOWS, COLORS, icons } from "../app/shared/constants";
import CustomButton from "../components/Button";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";

import { Stack } from "expo-router";

import Feed from "../app/shared/hook/fetch";
import { contentRoot, renderItem } from "../components/RenderFeed";

import NewsContainer from "../components/NewsContainer";
import { SafeAreaView, ScrollView, View, Text, Button } from "react-native";

import styles from "../styles/index_styles";

const agenda = TITLES.newsTitle.agenda;
const sport = TITLES.newsTitle.sport;
const economy = TITLES.newsTitle.economy;

const startLimit = 0;
const limit = 4;
const topNewsLimit = 8;

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "OURNET",
          headerStyle: {
            backgroundColor: COLORS.webBlue,
          },
          headerTintColor: COLORS.creamWhite,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          // headerLeft: () => (
          //   <ScreenHeaderBtn iconUrl={icons.menu} dimension="80%" />
          // ),
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.logo} dimension="100%" />
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.container, SHADOWS.small2]}>
            <View style={[styles.topNewsContainer, SHADOWS.small2]}>
              <View style={styles.listContainer}>
                <Text
                  style={[
                    styles.topNewsTitle,
                    { color: "red", textAlign: "center" },
                  ]}
                >
                  Son Dakika Haberleri
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
                <Feed
                  url={URLS.mainScreenUrls.topNewsUrls.mobile.lastNews}
                  startNumber={startLimit}
                  limitNumber={5}
                  contentRoot={contentRoot}
                  contentScope={renderItem.listScope}
                />
              </View>
            </View>

            <NewsContainer
              title={agenda}
              url={URLS.mainScreenUrls.mainUrls.agenda}
              startNumber={startLimit}
              limitNumber={limit}
              contentRoot={contentRoot}
              contentScope={renderItem.scope}
              topNewsUrl={URLS.mainScreenUrls.topNewsUrls.mobile.agenda}
              topNewsStartNumber={startLimit}
              topNewsLimitNumber={topNewsLimit}
              topNewsContentRoot={contentRoot}
              topNewsContentScope={renderItem.listScope}
              getAll="yes"
            />

            <NewsContainer
              title={sport}
              url={URLS.mainScreenUrls.mainUrls.sport}
              startNumber={startLimit}
              limitNumber={limit}
              contentRoot={contentRoot}
              contentScope={renderItem.scope}
              topNewsUrl={URLS.mainScreenUrls.topNewsUrls.mobile.sport}
              topNewsStartNumber={startLimit}
              topNewsLimitNumber={topNewsLimit}
              topNewsContentRoot={contentRoot}
              topNewsContentScope={renderItem.listScope}
              getAll="yes"
            />

            <NewsContainer
              title={economy}
              url={URLS.mainScreenUrls.mainUrls.economy}
              startNumber={startLimit}
              limitNumber={limit}
              contentRoot={contentRoot}
              contentScope={renderItem.scope}
              topNewsUrl={URLS.mainScreenUrls.topNewsUrls.mobile.economy}
              topNewsStartNumber={startLimit}
              topNewsLimitNumber={topNewsLimit}
              topNewsContentRoot={contentRoot}
              topNewsContentScope={renderItem.listScope}
              getAll="yes"
            />

            <View style={styles.footerContainer}>
              <CustomButton theme="primary" label="Fotoğraf Seç" />
              <CustomButton label="Bunu mu? Seçeceksin!" />
              <Button
                title="Detaylara Git"
                onPress={() =>
                  navigation.navigate("Detaylar", {
                    itemId: 86,
                    otherParam: "anything you want here",
                  })
                }
              />
            </View>

            <StatusBar style="auto" />
          </View>
          {/* <MyHeader
            searchText={searchQuery}
            setSearchText={setSearchQuery}
            handleClick={() => {
              if (searchQuery) {
                router.push(`/search/${searchQuery}`);
              }
            }}
          />
          <TopNewsSlider />
          <Content /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
