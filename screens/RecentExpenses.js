import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";

function RecentExpencies() {
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod="Total" />
    </View>
  );
}

export default RecentExpencies;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
