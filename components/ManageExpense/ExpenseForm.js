import { View, Text, Pressable, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import DatePicker from "react-native-date-picker";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/styles";

import Input from "./Input";

function ExpenseForm() {
  const [inputsValues, setInputsValues] = useState({
    amount: '',
    description: '',
    date: ''
  });

  function onInputChange(identifier, enteredValue) {
    setInputsValues(currentData => ({...currentData, [identifier]: enteredValue}));
    
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
            onChangeText: onInputChange.bind(this, 'amount'),
            value: inputsValues.amount,
          }}
        />
        <Input
          style={styles.inputInRow}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (inputData) => onInputChange('date', inputData),
          }}
          />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: (inputData) => onInputChange('description', inputData),
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40
  },
  formTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginVertical: 18
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputInRow: {
    flex: 1
  }
});
