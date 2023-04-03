import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useContext } from "react";

import { ExpensesContext } from "../store/expenses-context";

import { Colors } from "../constants/styles";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpencies({ route, navigation }) {
  const expensesContext = useContext(ExpensesContext);
  const itemId = route.params?.id;

  function onDeleteExpense() {
    expensesContext.deleteExpense(itemId);
    navigation.goBack();
  }
  function onCancel() {
    navigation.goBack();
  }
  function onConfirm() {
    if (itemId) {
      expensesContext.updateExpense(itemId, {
        description: "Test!!!",
        amount: 99.99,
        date: new Date("2023-03-30"),
      });
    } else {
      expensesContext.addExpense({
        description: "Test",
        amount: 89.99,
        date: new Date("2023-03-30"),
      });
    }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({ title: !!itemId ? "Edit Expense" : "Add Expense" });
  }, [navigation, itemId]);

  return (
    <View style={styles.rootContainer}>
      <ExpenseForm />
      <View style={styles.buttonsRow}>
        <Button isFlat={true} onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={onConfirm} style={styles.button}>
          {!!itemId ? "Update" : "Add"}
        </Button>
      </View>
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
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
