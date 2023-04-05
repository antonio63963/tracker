import { View, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";

import { fetchExpenses } from "../utils/http";

import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";
import { getDateMinusDay } from "../utils/date";
import { ExpensesContext } from "../store/expenses-context";

function RecentExpencies() {
  const expensesContext = useContext(ExpensesContext);

  const today = new Date();
  const sevenDaysAgo = getDateMinusDay(today, 7);

  const recentExpenses = expensesContext.expenses?.filter(
    (expens) => expens.date >= sevenDaysAgo && expens.date <= today
  );
  async function getExpenses() {
    try {
      const response = await fetchExpenses();
      if (response) {
        expensesContext.setExpenses(response);
      }
    } catch (err) {
      console.log("ERROR: ", err);
    }
  }

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Last 7 days"
        fallbackText="No any expenses for this period!"
      />
    </View>
  );
}

export default RecentExpencies;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
