import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text } from "react-native";
import RssParser from "react-native-rss-parser";
import { COLORS } from "../../../shared/constants";

// sayfanın yenilenme sıklığı süresi
const refreshperSeconds = 300000; // saniye cinsinden

const Feed = ({
  url,
  startNumber,
  limitNumber,
  refreshInterval = refreshperSeconds,
  contentScope,
  contentRoot,
}) => {
  const [feedData, setFeedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const xmlText = await response.text();
        const feed = await RssParser.parse(xmlText);
        setFeedData(feed.items.slice(startNumber, limitNumber));
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchFeed();

    const intervalId = setInterval(fetchFeed, refreshInterval);

    return () => clearInterval(intervalId);
  }, []);

  const renderLoading = () => {
    return <ActivityIndicator size={"large"} color={COLORS.webBlue} />;
  };

  const renderError = () => {
    return <Text style={{ color: COLORS.black }}>Hata: {error}</Text>;
  };

  const renderContent = () => {
    if (isLoading) {
      return renderLoading();
    } else if (error) {
      return renderError();
    } else {
      const renderItem = contentScope;
      return contentRoot(feedData, renderItem);
    }
  };
  return <>{renderContent()}</>;
};

export default Feed;
