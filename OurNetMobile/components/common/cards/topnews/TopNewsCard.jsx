import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../app/shared/utils";

import styles from "./topnewscard.style";
import { images } from "../../../../app/shared/constants";

const PopularNewsCard = ({
  item,
  selectedCategory,
  handleCardPress,
  category,
  textColor,
  textHighlightColor,
  bgColor,
  bgHighlightColor,
}) => {
  // const date = new Date(item.published).toLocaleString("tr-TR");
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
      style={styles.container(
        selectedCategory,
        item,
        bgColor,
        bgHighlightColor
      )}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={styles.logoContainer(
          selectedCategory,
          item,
          bgColor,
          bgHighlightColor
        )}
      >
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

      <View style={styles.infoContainer}>
        <Text style={styles.categoryName(selectedCategory, item)}>
          {category}
        </Text>
      </View>
      <Text
        numberOfLines={3}
        style={styles.newsTitle(
          selectedCategory,
          item,
          textColor,
          textHighlightColor
        )}
      >
        {item.title}
      </Text>

      <Text
        numberOfLines={1}
        style={styles.newsPubTitle(selectedCategory, item)}
      >
        {pubDate}
      </Text>
    </TouchableOpacity>
  );
};

export default PopularNewsCard;
