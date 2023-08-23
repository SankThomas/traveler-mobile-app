import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { globals } from "../styles/globals";
import { data } from "../data/data";
import { Entypo } from "@expo/vector-icons";

export default function Destination({ route, navigation }) {
  const [cards] = useState(data);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={globals.heading}>{route.params.title}</Text>
            <Pressable onPress={() => navigation.navigate("Settings")}> 
             <Feather 
               name="bell" 
               size={24} 
               color="#141230" 
             /> 
 </Pressable>
          </View>

          <View style={styles.destinationContainer}>
            <Image source={{ uri: route.params.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.heading}>Located in Kenya</Text>
              <Entypo name="star" size={24} color="#FFCE31" />
            </View>

            <Text style={[globals.text, styles.text]}>{route.params.desc}</Text>

            <Pressable
              onPress={() => navigation.navigate("Homepage")}
              style={styles.buttonContainer}
            >
              <Text style={styles.button}>Reserve</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 16,
  },
  destinationContainer: {
    padding: 24,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
  },
  heading: {
    color: "#141230",
    fontWeight: "800",
    fontSize: 20,
  },
  text: {
    marginTop: 16,
    marginBottom: 24,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  button: {
    backgroundColor: "#141230",
    color: "#ffffff",
    fontSize: 16,
    paddingVertical: 16,
    width: "90%",
    borderRadius: 32,
    textAlign: "center",
  },
});
