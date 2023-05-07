import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../app/shared/constants";

const styles = StyleSheet.create({
  container: (selectedCategory, item, bgColor, bgHighlightColor) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedCategory === item.id ? bgHighlightColor : bgColor,
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.black,
  }),
  logoContainer: (selectedCategory, item, bgColor, bgHighlightColor) => ({
    width: 200,
    height: 150,
    backgroundColor: selectedCategory === item.id ? bgHighlightColor : bgColor,
    borderRadius: SIZES.medium,
  }),
  logoImage: {
    borderRadius: SIZES.xSmall,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  newsTitle: (selectedCategory, item, textColor, textHighlightColor) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.roboto.regular,
    color: selectedCategory === item.id ? textHighlightColor : textColor,
    marginTop: SIZES.small / 1.5,
  }),
  newsPubTitle: (selectedCategory, item) => ({
    fontSize: SIZES.xSmall,
    fontFamily: FONT.roboto.bold,
    color: selectedCategory === item.id ? COLORS.creamWhite : COLORS.white,
    marginTop: SIZES.small / 1.5,
    bottom: 5,
    left: 25,
    position: "absolute",
  }),
  infoContainer: {
    marginTop: SIZES.large,
  },
  categoryName: (selectedCategory, item) => ({
    fontSize: SIZES.small,
    fontFamily: FONT.roboto.regular,
    color: selectedCategory === item.id ? COLORS.creamWhite : COLORS.white,
    position: "absolute",
    textTransform: "uppercase",
    bottom: 0,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedCategory) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedCategory === item.id ? COLORS.white : COLORS.gray2,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
