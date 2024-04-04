import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "First" }} />
      <Stack.Screen name="tabOneScreenTwo" options={{ title: "Second" }}  />
    </Stack>
  );
}
