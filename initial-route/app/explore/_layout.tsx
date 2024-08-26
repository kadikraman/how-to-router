import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
}

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="second" />
    </Stack>
  );
}
