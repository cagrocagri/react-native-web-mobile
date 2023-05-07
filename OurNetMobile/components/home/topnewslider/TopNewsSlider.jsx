import React from "react";
import { useState } from "react";
import Feed from "../../../app/shared/hook/fetch";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useRouter } from "expo-router";
import TopNewsCard from "../../common/cards/topnews/TopNewsCard";
import { COLORS, SIZES } from "../../../app/shared/constants";

import styles from "./topnewsslider.style";

const TopNewsSlider = ({
  title,
  category,
  url,
  startLimit,
  endLimit,
  textColors,
  textHighlightColor,
  bgColor,
  bgHighlightColor,
}) => {
  const router = useRouter();

  const { feedData, isLoading, error } = Feed(
    ("search",
    {
      url: url,
      startNumber: startLimit,
      limitNumber: endLimit,
    })
  );

  const [selectedCategory, setSelectedCategory] = useState();

  const handleCardPress = (item) => {
    router.push(item.id);
    setSelectedCategory(item.id);
  };

  // const isLoading = false;
  // const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.webBlue} />
        ) : error ? (
          <Text>Oppps! Bir şeyler yanlış gitti!</Text>
        ) : (
          <FlatList
            data={feedData}
            renderItem={({ item }) => (
              <TopNewsCard
                item={item}
                textColor={textColors}
                textHighlightColor={textHighlightColor}
                bgColor={bgColor}
                bgHighlightColor={bgHighlightColor}
                category={category}
                key={`${item?.guid}`}
                selectedCategory={selectedCategory}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              columnGap: SIZES.medium,
            }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default TopNewsSlider;
