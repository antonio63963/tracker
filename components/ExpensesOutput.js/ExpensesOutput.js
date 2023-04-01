import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Colors } from "../../constants/styles";

import { ExpensesContext } from "../../store/expenses-context";

function ExpensesOutput({ expenses, expensesPeriod }) {
  const expensesSum = expenses.reduce((acc, item) => acc + item.amount, 0);
  return (
    <View style={styles.container}>
      <ExpensesSummary sum={expensesSum} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: Colors.primary700,
  },
});
