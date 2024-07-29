import { Text, View } from "react-native";

export default function User() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7CCAD5"
      }}
    >
      <Text  style={{ fontSize: 18 }}>User page</Text>
    </View>
  );
}
