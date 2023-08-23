import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

// screens
import Homepage from "./screens/Homepage";
import Landing from "./screens/Landing";
import Destination from "./screens/Destination";
import Settings from "./screens/Settings";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
          animation: "slide_from_bottom",
        }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Destination" component={Destination} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
