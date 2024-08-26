import { StyleSheet, View } from 'react-native';
import { Link, useNavigation, useRouter } from 'expo-router';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Link href="/explore/second">Go to nested screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})