import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import React, { useState } from "react";

export default function TabTwoScreen() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState("");

  const calculateResult = () => {
    const res = parseInt(first) + parseInt(second);
    setResult(res);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Two Numbers</Text>
      <TextInput
        style={styles.input}
        value={first}
        onChangeText={setFirst}
        placeholder="Enter first number"
      ></TextInput>
      <TextInput
        style={styles.input}
        value={second}
        onChangeText={setSecond}
        placeholder="Enter second number"
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={calculateResult}>
        <Text style={styles.button}>Add Numbers</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Result: {result}</Text>
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
    backgroundColor: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    width: "80%",
    backgroundColor: "lightgrey",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  button: {
    color: "red",
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 80,
    margin: 20,
    marginHorizontal: 70,
    fontSize: 20,
  },
});
