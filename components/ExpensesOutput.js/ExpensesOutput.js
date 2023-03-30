import { View, Text, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Colors } from "../../constants/styles";

const dummy = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 56.56,
    date: new Date("2023-03-28"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 99.58,
    date: new Date("2023-03-28"),
  },
  {
    id: "e3",
    description: "A pair of t-shirt",
    amount: 20.34,
    date: new Date("2023-03-29"),
  },
  {
    id: "e4",
    description: "A pair of laptop",
    amount: 900.56,
    date: new Date("2023-03-29"),
  },
  {
    id: "e5",
    description: "bought a book",
    amount: 12.56,
    date: new Date("2023-03-05"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  const expensesSum = dummy.reduce((acc, item) => acc + item.amount, 0);
  return (
    <View style={styles.container}>
      <ExpensesSummary sum={expensesSum} periodName={expensesPeriod} />
      <ExpensesList expenses={dummy} />
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
    backgroundColor: Colors.primary700
  }
})
