import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";

import { ExpensesContext } from "../store/expenses-context";

function AllExpencies() {
  const expensesContext = useContext(ExpensesContext);
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput
        expenses={expensesContext.expenses}
        expensesPeriod="Total"
        fallbackText="No any expenses yet..."
      />
    </View>
  );
}

export default AllExpencies;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
