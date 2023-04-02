import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";
import { getDateMinusDay } from "../utils/date";
import { ExpensesContext } from "../store/expenses-context";

function RecentExpencies() {
  const expensesContext = useContext(ExpensesContext);
  const today = new Date();
  const sevenDaysAgo = getDateMinusDay(today, 7);

  const recentExpenses = expensesContext.expenses.filter(
    (expens) => (expens.date >= sevenDaysAgo) && (expens.date <= today)
  );

  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expenses={recentExpenses} expensesPeriod="Total" fallbackText="No any expenses for this period!" />
    </View>
  );
}

export default RecentExpencies;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
