import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import {Colors} from '../constants/styles';

import IconButton from "../components/UI/IconButton";


function ManageExpencies({ route, navigation }) {
  const itemId = route.params?.id;

  function deleteExpense() {

  }

  useLayoutEffect(() => {
    navigation.setOptions({ title: !!itemId ? "Edit Expense" : "Add Expense" });
  }, [navigation, itemId]);

  return (
    <View style={styles.rootContainer}>
      {!!itemId && (
        <View style={styles.deleteContainer}>
          <IconButton iconName="trash" size={24} color={Colors.error500} onPress={deleteExpense}/>
        </View>
      )}
    </View>
  );
}

export default ManageExpencies;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24
    // justifyContent: "center",
    // alignItems: "center",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: Colors.primary200,
    alignItems: 'center'
  }
});
