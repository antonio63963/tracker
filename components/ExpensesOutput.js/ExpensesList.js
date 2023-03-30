import {View, FlatList, Text, StyleSheet} from 'react-native';

function renderItem(itemData) {
  return <Text>{itemData.item.description}</Text>
}

function ExpensesList({expenses}) {
  return (<FlatList data={expenses} renderItem={renderItem} />)
}

export default ExpensesList;