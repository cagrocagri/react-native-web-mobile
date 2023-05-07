import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import linkingconfiguration from "../linkingconfiguration";
import MyRouter from "./router";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    RobotoBold: require("../app/shared/assets/fonts/Roboto/Roboto-Bold.ttf"),
    RobotoRegular: require("../app/shared/assets/fonts/Roboto/Roboto-Regular.ttf"),
    RobotoLight: require("../app/shared/assets/fonts/Roboto/Roboto-Light.ttf"),
    RobotoMedium: require("../app/shared/assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <NavigationContainer linking={linkingconfiguration} independent={true}>
      <MyRouter />
    </NavigationContainer>
  );
};

export default Layout;
