import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// screens
import Homepage from "./screens/Homepage";
import Landing from "./screens/Landing";
import Destination from "./screens/Destination";
import Settings from "./screens/Settings";

const BottomTabs = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Homepage" component={Homepage} />
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
