import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StatusBar } from "expo-status-bar";

// screens
import Homepage from "./screens/Homepage";
import Landing from "./screens/Landing";
import Destination from "./screens/Destination";
import Settings from "./screens/Settings";

import { Ionicons } from "@expo/vector-icons";

const BottomTabs = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <BottomTabs.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === "Homepage") {
    //       iconName = focused ? (
    //         <Ionicons name="home-outline" size={24} color="black" />
    //       ) : (
    //         <Ionicons name="home-sharp" size={24} color="black" />
    //       );
    //     } else if (route.name === "Settings") {
    //       iconName = focused ? (
    //         <Ionicons name="md-settings-outline" size={24} color="black" />
    //       ) : (
    //         <Ionicons name="md-settings" size={24} color="black" />
    //       );
    //     }

    //     return <Ionicons name={iconName} size={size} color={color} />;
    //   },
    //   tabBarActiveTintColor: "tomato",
    //   tabBarInactiveTintColor: "gray",
    // })}
    >
      <BottomTabs.Screen name="Home" component={Homepage} />
      <BottomTabs.Screen name="Settings" component={Settings} />
    </BottomTabs.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Destination" component={Destination} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
