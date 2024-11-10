import { Text, View, StyleSheet } from "react-native";

export default function Transaksi() {
  return (
    <View style={styles.container}>
      <Text>transaksi.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});