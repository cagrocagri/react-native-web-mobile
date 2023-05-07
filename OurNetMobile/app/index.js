import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/home" />;
}

// import * as React from "react";
// import { SafeAreaView } from "react-native";
// import { Stack, useRouter } from "expo-router";
// import { COLORS, icons } from "../app/shared/constants";
// import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";

// import styles from "../styles/index_styles";
// import { ScrollView } from "react-native-gesture-handler";
// import HomeScreen from "./home";

// const App = () => {
//   const router = useRouter();
//   return (
//     <SafeAreaView style={styles.mainContainer}>
//       <Stack.Screen
//         options={{
//           title: "OURNET",
//           headerStyle: {
//             backgroundColor: COLORS.webBlue,
//           },
//           headerTintColor: COLORS.creamWhite,
//           headerTitleStyle: {
//             fontWeight: "bold",
//           },
//           headerTitleAlign: "center",
//           // headerLeft: () => (
//           //   <ScreenHeaderBtn iconUrl={icons.menu} dimension="80%" />
//           // ),
//           headerLeft: () => (
//             <ScreenHeaderBtn iconUrl={icons.logo} dimension="100%" />
//           ),
//         }}
//       />

//       <ScrollView style={{ backgroundColor: COLORS.creamWhite }}>
//         <HomeScreen />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;
