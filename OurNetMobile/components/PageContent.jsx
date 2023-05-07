import { View } from "react-native";
import { TopNewsSlider } from ".";
import Content from "./home/content/Content";
import { COLORS } from "../app/shared/constants";
import ContentCard from "./common/cards/content/ContentCard";

const PageContent = ({
  title,
  categoryColor,
  startLimitSlider,
  endLimitSlider,
  startLimitSub = startLimitSlider || 0,
  endLimitSub = endLimitSlider || 0,
  sliderURL,
  subURL,
  textColors = COLORS.white,
  textHighlightColor = COLORS.lightWhite,
  bgColor,
  bgHighlightColor,
}) => {
  return (
    <View>
      <TopNewsSlider
        title={title}
        category={title}
        startLimit={startLimitSlider}
        endLimit={endLimitSlider}
        url={sliderURL}
        textColors={textColors}
        textHighlightColor={textHighlightColor}
        bgColor={bgColor}
        bgHighlightColor={bgHighlightColor}
      />
      <Content
        Card={ContentCard}
        category={title}
        color={categoryColor}
        startLimit={startLimitSub}
        endLimit={endLimitSub}
        url={subURL}
      />
    </View>
  );
};

export default PageContent;
