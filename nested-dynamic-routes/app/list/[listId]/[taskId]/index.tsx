import { usePathname, useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Page() {
  const pathName = usePathname();
  const router = useRouter();
  const params = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <View style={{ width: 200 }}>
        <Text style={styles.bold}>Path name:</Text>
        <Text> {pathName}</Text>
        <View>
          <View style={styles.spacer} />
          <Text style={styles.bold}>Params:</Text>
          <Text> {JSON.stringify(params, null, " ")}</Text>
        </View>
      </View>
      <Button title="Back to Index" onPress={() => router.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  spacer: {
    height: 20,
  },
});
