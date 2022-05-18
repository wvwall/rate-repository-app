import { View, StyleSheet, Text, Pressable } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 100,
    justifyContent: "center",
    backgroundColor: "#24292e",
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    margin: 5,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>Sign In</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.text}>Repository</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
