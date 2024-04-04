import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Third" }}  />
      <Stack.Screen name="tabTwoScreenTwo" options={{ title: "Fourth" }}   />
    </Stack>
  );
}
