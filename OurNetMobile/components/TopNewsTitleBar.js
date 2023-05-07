import { View, Text } from "react-native";

import styles from "../styles/index_styles";

const TopNewsTitleBar = ({ title }) => {
  return (
    <View>
      <Text style={styles.topNewsTitle}>Son {title} Haberleri</Text>
      <Text style={styles.topNewsTitleBar}></Text>
    </View>
  );
};

export default TopNewsTitleBar;
