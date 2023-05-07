import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./contentcard.style";
import { COLORS, FONT } from "../../../../app/shared/constants";

const TopContentCard = ({ color, category, item, handleCardPress }) => {
  const pubDate = new Date(item.published).toLocaleString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Istanbul",
  });

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { margin: 0, padding: 0, shadowColor: COLORS.white },
      ]}
      onPress={() => handleCardPress(item)}
    >
      <View style={[styles.textContainer, { margin: 0, padding: 0 }]}>
        <Text
          numberOfLines={1}
          style={[
            styles.titleName,
            { color: color, fontFamily: FONT.roboto.bold },
          ]}
        >
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.pubTitle}>
          {pubDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopContentCard;
