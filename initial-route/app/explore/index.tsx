import { StyleSheet, Text, View } from 'react-native';

export default function ExploreIndex() {
  return (
    <View style={styles.container}>
      <Text>This is the INDEX page</Text>
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