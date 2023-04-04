import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

import { Colors } from "../../constants/styles";

import { getFormatedDate, getDateWhithDash } from "../../utils/date";

import Input from "./Input";
import ModalPickDate from "../UI/ModalPickDate";
import IconButton from "../UI/IconButton";
import Button from "../UI/Button";

function ExpenseForm({
  submitButtonLable,
  onCancel,
  onSubmit,
  defaultExpense,
}) {
  const [inputsValues, setInputsValues] = useState({
    amount: defaultExpense ? defaultExpense.amount.toString() : "",
    description: defaultExpense ? defaultExpense.description : "",
    date: defaultExpense ? getFormatedDate(defaultExpense.date) : "",
  });

  const [isOpen, setIsOpen] = useState(false);

  function onInputChange(identifier, enteredValue) {
    setInputsValues((currentData) => ({
      ...currentData,
      [identifier]: enteredValue,
    }));
  }

  function onConfirm() {
    const data = {
      description: inputsValues.description,
      date: new Date(getDateWhithDash(inputsValues.date)),
      amount: +inputsValues.amount,
    };
    onSubmit(data);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.inputInRow}
          label="Amount"
          textInputConfig={{
            autoFocus: true,
            keyboardType: "decimal-pad",
            onChangeText: onInputChange.bind(this, "amount"),
            value: inputsValues.amount,
          }}
        />
        <View style={styles.dateInputRow}>
          <Input
            style={styles.inputInRow}
            label="Date"
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              value: inputsValues.date,
              onChangeText: (inputData) => onInputChange("date", inputData),
            }}
          />

          <IconButton
            iconName="calendar"
            color={Colors.primary100}
            size={24}
            onPress={() => setIsOpen(true)}
            style={styles.dateButton}
          />
        </View>
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: (inputData) => onInputChange("description", inputData),
          value: inputsValues.description,
        }}
      />
      <ModalPickDate
        startDate={defaultExpense ? defaultExpense.date : new Date()}
        isOpen={isOpen}
        selectedDate={inputsValues.date}
        onDateChange={onInputChange.bind(this, "date")}
        onClose={() => setIsOpen(false)}
      />
      <View style={styles.buttonsRow}>
        <Button isFlat={true} onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={onConfirm} style={styles.button}>
          {submitButtonLable}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  formTitle: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
    textAlign: "center",
    marginVertical: 18,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputInRow: {
    flex: 1,
  },
  dateInputRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  dateButton: {
    paddingBottom: 10,
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
