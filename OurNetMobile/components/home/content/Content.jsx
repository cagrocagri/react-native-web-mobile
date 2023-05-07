import React from "react";
import { useState } from "react";
import Feed from "../../../app/shared/hook/fetch";
import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../../../app/shared/constants";

import styles from "./content.style";

const Content = ({
  Card,
  category,
  color,
  url,
  startLimit,
  endLimit,
  marqueeTitle,
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

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Oppps! Bir şeyler yanlış gitti!</Text>
        ) : (
          feedData?.map((item, index) => (
            <Card
              item={item}
              marqueTitle={marqueeTitle}
              category={category}
              color={color}
              key={`content-${item.id || index}`}
              selectedCategory={selectedCategory}
              handleCardPress={handleCardPress}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Content;
