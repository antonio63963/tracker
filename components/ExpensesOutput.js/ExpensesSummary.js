import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function ExpensesSummary({ periodName, sum }) {
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${sum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: Colors.primary50,
    borderRadius: 6,
  },
  period: {
    fontSize: 12,
    color: Colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
