import { useEffect, useState } from "react";
import RssParser from "react-native-rss-parser";

// sayfanın yenilenme sıklığı süresi
const refreshperSeconds = 120000; // saniye cinsinden

const Feed = ({
  url,
  limit,
  refreshInterval = refreshperSeconds,
  renderFeedItem,
  renderFeed,
}) => {
  const [feedItems, setFeedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        console.log(response);
        const xmlText = await response.text();
        const feed = await RssParser.parse(xmlText);
        console.log(feed);
        setFeedItems(feed.items.slice(0, limit));
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
    return <p className="text-center text-primary">Yükleniyor...</p>;
  };

  const renderError = () => {
    return <p className="text-center text-primary">Hata: {error}</p>;
  };

  const renderContent = () => {
    if (isLoading) {
      return renderLoading();
    } else if (error) {
      return renderError();
    } else {
      return renderFeed(feedItems, renderFeedItem);
    }
  };
  return <>{renderContent()}</>;
};

export default Feed;
