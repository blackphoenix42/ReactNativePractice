import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello There!</Text>
      <Button
        title="Go to components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go To Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go To Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go To Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
    </View >
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
