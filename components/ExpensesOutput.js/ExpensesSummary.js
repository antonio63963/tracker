import { View, Text, StyleSheet } from "react-native";

function ExpensesSummary({ periodName, sum }) {
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${sum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;


