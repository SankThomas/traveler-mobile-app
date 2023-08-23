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

export default function Homepage({ navigation }) {
  const [cards] = useState(data);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={globals.heading}>Welcome</Text>
            <Pressable onPress={() => navigation.navigate("Settings")}>
              <Feather name="bell" size={24} color="#141230" />
            </Pressable>
          </View>

          <View style={styles.cards}>
            {cards.map((card, index) => (
              <Pressable
                onPress={() => navigation.navigate("Destination", card)}
                key={index}
                style={styles.card}
              >
                <Image source={{ uri: card.image }} style={styles.image} />

                <View style={styles.cardHeading}>
                  <Text style={styles.heading}>{card.title}</Text>
                  <Text style={styles.text}>{card.stars}</Text>
                </View>

                <View style={styles.cardBottom}>
                  <Text style={styles.text}>Kenya</Text>
                  <Entypo name="star" size={24} color="#FFCE31" />
                </View>
              </Pressable>
            ))}
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
    width: 280,
    height: 280,
    borderRadius: 16,
  },
  cards: {
    alignItems: "center",
    marginTop: 20,
    gap: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
  },
  heading: {
    color: "#141230",
    fontWeight: "800",
    fontSize: 22,
  },
  cardHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  text: {
    color: "#14123070",
    fontSize: 16,
    fontWeight: "400",
  },
});
