import { useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useContext } from "react";

import { ExpensesContext } from "../store/expenses-context";
import { storeExpense, updateExpense, deleteExpense } from "../utils/http";

import { Colors } from "../constants/styles";

import IconButton from "../components/UI/IconButton";
import LoaderOverlay from "../components/UI/LoaderOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import Button from "../components/UI/Button";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpencies({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
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
    setIsLoading(true);
   try{
    if (itemId) {
      const dataResponse = await updateExpense(itemId, expenseData );
      setIsLoading(false);
      expensesContext.updateExpense(itemId, expenseData);
      navigation.goBack();
    } else {
      const id = await storeExpense(expenseData);
      setIsLoading(false);
      expensesContext.addExpense({ ...expenseData, id });
      navigation.goBack();
    }
   } catch(err) {
    setError(err);
   }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({ title: !!itemId ? "Edit Expense" : "Add Expense" });
  }, [navigation, itemId]);

  if(error && isLoading) {
    return <ErrorOverlay message={error.message} onClick={() => setError(null)}/>
  }

  if (isLoading) {
    return <LoaderOverlay />;
  }

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
