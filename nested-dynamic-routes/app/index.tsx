import { useRouter } from "expo-router";
import { Button, View, Text, StyleSheet } from "react-native";

export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => router.push("/list/123/456/")}
        title="/list/123/456/"
      />
      <Button
        onPress={() => router.push("/item/123/subItem/456/")}
        title="/item/123/subItem/456/"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
