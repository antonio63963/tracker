import { View, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";

import { fetchExpenses } from "../utils/http";

import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";
import LoaderOverlay from "../components/UI/LoaderOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import { getDateMinusDay } from "../utils/date";
import { ExpensesContext } from "../store/expenses-context";

function RecentExpencies() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const expensesContext = useContext(ExpensesContext);

  const today = new Date();
  const sevenDaysAgo = getDateMinusDay(today, 7);

  const recentExpenses = expensesContext.expenses?.filter(
    (expens) => expens.date >= sevenDaysAgo && expens.date <= today
  );
  async function getExpenses() {
    try {
      const response = await fetchExpenses();
      expensesContext.setExpenses(response);
    } catch (err) {
      console.log('ERROR:', err)
      setError(err)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getExpenses();
  }, []);

  if(error) {
    return <ErrorOverlay message={error.message} onClick={() => setError(null)}/>
  }

  if(isLoading) {
    return <LoaderOverlay />
  }

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
