import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useContext } from "react";

import { ExpensesContext } from "../store/expenses-context";
import { storeExpense, updateExpense, deleteExpense } from "../utils/http";

import { Colors } from "../constants/styles";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpencies({ route, navigation }) {
  const expensesContext = useContext(ExpensesContext);
  const itemId = route.params?.id;

  const selectedExpense = itemId
    ? expensesContext.expenses.find((expense) => expense.id === itemId)
    : null;

  async function onDeleteExpense() {
    await deleteExpense(itemId);
    expensesContext.deleteExpense(itemId);
    navigation.goBack();
  }
  function onCancel() {
    navigation.goBack();
  }
  async function onSubmit(expenseData) {
    if (itemId) {
      const dataResponse = await updateExpense(itemId, { expenseData });
      expensesContext.updateExpense(itemId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expensesContext.addExpense({ ...expenseData, id });
    }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({ title: !!itemId ? "Edit Expense" : "Add Expense" });
  }, [navigation, itemId]);

  return (
    <View style={styles.rootContainer}>
      <ExpenseForm
        onCancel={onCancel}
        onSubmit={onSubmit}
        submitButtonLable={!!itemId ? "Update" : "Add"}
        defaultExpense={selectedExpense}
      />
      {!!itemId && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconName="trash"
            size={24}
            color={Colors.error500}
            onPress={onDeleteExpense}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpencies;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: Colors.primary200,
    alignItems: "center",
  },
});
