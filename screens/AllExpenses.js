import {View, Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput.js/ExpensesOutput';

function AllExpencies() {
  return <View style={styles.rootContainer}>
    <ExpensesOutput expensesPeriod="Last 7 days" />
  </View>
};

export default AllExpencies;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  }
})