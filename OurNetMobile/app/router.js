import { Button, ScrollView, StatusBar, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons } from "./shared/constants";

import Home from "./home";
import Agenda from "./screens/agenda";
import Sport from "./screens/sport";
import Economy from "./screens/economy";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const home = "Ana Sayfa";
const agenda = "Gündem";
const sport = "Spor";
const economy = "Ekonomi";

const MyRouter = () => {
  return (
    <SafeAreaProvider style={{ paddingBottom: 2 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === home) {
              iconName = focused ? icons.home : icons.homeOutline;
            } else if (route.name === agenda) {
              iconName = focused ? icons.agenda : icons.agendaOutline;
            } else if (route.name === sport) {
              iconName = focused ? icons.sport : icons.sportOutline;
            } else if (route.name === economy) {
              iconName = focused ? icons.economy : icons.economyOutline;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.webBlue,
          tabBarInactiveTintColor: COLORS.gray,
        })}
      >
        <Tab.Screen name={home} component={Home} />
        <Tab.Screen
          name={agenda}
          component={Agenda}
          options={{ headerShown: true }}
        />
        <Tab.Screen
          name={sport}
          component={Sport}
          options={{ headerShown: true }}
        />
        <Tab.Screen
          name={economy}
          component={Economy}
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default MyRouter;
