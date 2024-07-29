import { Link } from "expo-router";
import { View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/user" style={styles.button}>/user</Link>
      <Link href="/product" style={styles.button}>/product</Link>
      <Link href="/(product)/shared" style={styles.button}>/(product)/shared</Link>
      <Link href="/(user)/shared" style={styles.button}>/(user)/shared</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    fontSize: 18,
    backgroundColor: "#fff",
    padding: 8,
    letterSpacing: 2
  }
})