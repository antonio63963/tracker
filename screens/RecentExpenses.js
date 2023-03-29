import { View, Text, StyleSheet } from "react-native";

function RecentExpencies() {
  return (
    <View style={styles.rootContainer}>
      <Text>RecentExpencies</Text>
    </View>
  );
}

export default RecentExpencies;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
