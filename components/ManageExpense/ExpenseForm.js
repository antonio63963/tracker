import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

import { Colors } from "../../constants/styles";

import Input from "./Input";
import ModalPickDate from "../UI/ModalPickDate";
import IconButton from "../UI/IconButton";

function ExpenseForm() {
  const [inputsValues, setInputsValues] = useState({
    amount: "",
    description: "",
    date: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  function onInputChange(identifier, enteredValue) {
    setInputsValues((currentData) => ({
      ...currentData,
      [identifier]: enteredValue,
    }));
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
        }}
      />
      <ModalPickDate
        startDate={new Date()}
        isOpen={isOpen}
        selectedDate={inputsValues.date}
        onDateChange={onInputChange.bind(this, "date")}
        onClose={() => setIsOpen(false)}
      />
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
});
