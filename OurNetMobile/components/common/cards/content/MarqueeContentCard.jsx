import React, { useState } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { COLORS, FONT } from "../../../../app/shared/constants";
import MarqueeText from "react-native-marquee";
import styles from "./contentcard.style";
import { View, Text } from "react-native";

const MarqueeTextCard = ({ color, item, marqueTitle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 0,
        margin: 0,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <Text
        style={{
          marginHorizontal: 15,
          margin: 0,
          padding: 0,
          fontSize: 15,
          fontFamily: FONT.roboto.bold,
          color: COLORS.white,
        }}
      >
        {marqueTitle}
      </Text>

      <MarqueeText
        style={{
          margin: 0,
          padding: 0,
          marginTop: 0,
          paddingTop: 0,
          fontSize: 15,
          color: color,
          padding: 5,
          width: "100%",
        }}
        speed={0.25}
        marqueeOnStart={true}
        loop={true}
        delay={1000}
        consecutive={true}
      >
        <Text>{item.title}</Text>
      </MarqueeText>
    </View>
  );
};

export default MarqueeTextCard;
