import { usePathname, useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export function Page() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <View>
      <Text>Path name: {pathName}</Text>
      <Button title="Back to Index" onPress={() => router.push("/")} />
    </View>
  );
}
