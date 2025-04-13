import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import React, { useState, useEffect } from "react";
import TabTwoScreen from "./two";

export default function TabOneScreen() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // <TabThreeScreen data="shivam" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RealTime Clock</Text>
      <Text style={styles.clock}>{currentTime.toLocaleTimeString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  clock: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
