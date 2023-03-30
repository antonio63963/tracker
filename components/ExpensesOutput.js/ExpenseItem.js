import { View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/styles";

import { getFormatedDate } from "../../utils/date";

function ExpenseItem({ description, date, amount }) {
  const navigation = useNavigation();

  function onExpense() {
    navigation.navigate('ManageExpenses')
  }

  return (
    <Pressable
      onPress={onExpense}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.containerCol}>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 5,
    shadowColor: Colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    overflow: "hidden",
  },
  containerCol: {
    padding: 12,
  },
  textBase: {
    color: Colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.primary50,
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 6,
    minWidth: 100,
  },
  amount: {
    color: Colors.primary500,
    fontWeight: "bold",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.7,
  },
});
