import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Stack } from "expo-router";
import { Text, TouchableOpacity, View, StatusBar } from "react-native";
import { COLORS, icons, FONT, URLS } from "../../../app/shared/constants";
import ScreenHeaderBtn from "../../common/header/ScreenHeaderBtn";

import styles from "./header.style";
import Content from "../content/Content";
import MarqueeTextCard from "../../common/cards/content/MarqueeContentCard";

const MyHeader = ({ color, url, bgColor, marqueeTitle }) => {
  const navigation = useNavigation();

  return (
    <View style={{ margin: 0, padding: 0 }}>
      {/* <Stack.Screen
        options={{
          title: "Ana Sayfa",
          headerStyle: {
            backgroundColor: COLORS.webBlue,
          },
          headerTintColor: COLORS.creamWhite,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",

          headerRight: () => (
            <Text
              style={{
                marginHorizontal: 15,
                fontFamily: FONT.roboto.bold,
                color: COLORS.white,
              }}
            >
              FastNews
            </Text>
            // <ScreenHeaderBtn
            //   handlePress={() => navigation.navigate("Gündem")}
            //   iconUrl={icons.logo}
            //   dimension="80%"
            // />
          ),
          // headerRight: () => (
          //   <ScreenHeaderBtn iconUrl={icons.logo} dimension="80%" />
          // ),
        }}
      /> */}
      <Stack.Screen
        options={{
          header: () => (
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: bgColor,
                }}
              >
                <Content
                  Card={MarqueeTextCard}
                  marqueeTitle={marqueeTitle}
                  color={color}
                  startLimit={0}
                  endLimit={1}
                  url={url}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </View>
  );
};

export default MyHeader;
