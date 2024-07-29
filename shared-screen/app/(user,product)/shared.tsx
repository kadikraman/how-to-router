import { Text, View } from "react-native";

export default function User() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#A0A6BE",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        This page is shared across (user) and (product)
      </Text>
    </View>
  );
}
