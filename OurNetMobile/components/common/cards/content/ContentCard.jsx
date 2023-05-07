import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../app/shared/utils";

import styles from "./contentcard.style";
import { images } from "../../../../app/shared/constants";

const ContentCard = ({ color, category, item, handleCardPress }) => {
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
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={
            checkImageURL(
              item.enclosures[0] && item.enclosures && item.enclosures[0].url
            )
              ? { uri: item.enclosures[0].url }
              : images.placeholderFastNewsImage
          }
          resizeMode="cover"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={[styles.categoryName, { color: color }]}>{category}</Text>
        <Text numberOfLines={3} style={styles.titleName}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.pubTitle}>
          {pubDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContentCard;
