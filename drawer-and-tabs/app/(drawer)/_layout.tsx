import { Drawer } from "expo-router/drawer";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <Drawer
      drawerContent={() => {
        return (
          <View
            style={{
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              padding: 24,
              gap: 16,
            }}
          >
            <Text style={styles.text}>
              Hello from the drawer 👋
            </Text>
          </View>
        );
      }}
      screenOptions={{
        drawerType: "slide",
        header: () => null,
      }}
    >
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 30,
  },
});
