import {
  View,
  Text,
  StyleSheet,
  Image,
  PixelRatio,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globals } from "../styles/globals";

export default function Landing({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../images/landing.png")}
          style={styles.landingImage}
        />

        <View style={styles.textContainer}>
          <Text style={[globals.heading, styles.heading]}>
            Travel anywhere in the world
          </Text>
          <Text style={[globals.text, styles.text]}>
            Increasing impression interested expression he my at. Respect
            invited request charmed me warrant to.
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Homepage")}
            style={styles.buttonContainer}
          >
            <Text style={styles.button}>Skip</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  landingImage: {
    height: PixelRatio.getPixelSizeForLayoutSize(200),
    width: "100%",
    marginBottom: 16,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  textContainer: {
    padding: 24,
  },
  heading: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
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
