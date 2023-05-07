import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../app/shared/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    shadowColor: COLORS.black,
  },
  logoContainer: {
    width: 90,
    height: 90,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    borderRadius: SIZES.xSmall,
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginHorizontal: SIZES.medium,
  },
  categoryName: {
    flex: 1,
    fontSize: SIZES.medium,
    fontFamily: FONT.roboto.bold,
    color: "green",
    textTransform: "uppercase",
  },
  titleName: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.roboto.regular,
    color: COLORS.primary,
    marginTop: 1,
    textTransform: "capitalize",
  },
  pubTitle: {
    flex: 1 / 3,
    fontSize: SIZES.small,
    fontFamily: FONT.roboto.regular,
    color: COLORS.gray2,
    marginTop: 3,
  },
});

export default styles;
