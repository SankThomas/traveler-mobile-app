import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globals } from "../styles/globals";

export default function Settings({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.container}
      >
        <View style={styles.header}>
          <Text style={globals.heading}>Settings</Text>
        </View>

        <View style={styles.profile}>
          <Image
            source={require("../images/profile.png")}
            style={styles.profileImg}
          />
          <Text style={styles.heading}>Thomas Sankara</Text>
        </View>

        <View style={styles.settings}>
          <Text style={styles.text}>General</Text>
          <Text style={styles.text}>Advanced</Text>
          <Text style={styles.text}>Profile Settings</Text>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("Homepage")}
          >
            Back to Homepage
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
    marginTop: 40,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  heading: {
    color: "#141230",
    fontWeight: "800",
    fontSize: 20,
  },
  settings: {
    marginTop: 32,
  },
  text: {
    color: "#14123070",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 30,
    marginBottom: 16,
  },
});
