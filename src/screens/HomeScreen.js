import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello There!</Text>
      <Button
        title="Go to components Demo"
        onPress={() => console.log("Button Pressed")}
      />
      <TouchableOpacity onPress={() => console.log("List Pressed")}>
        <Text>Go To List Demo</Text>
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
    </View >
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
