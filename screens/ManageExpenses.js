import {View, Text, StyleSheet} from 'react-native';

function ManageExpencies() {
  return <View style={styles.rootContainer}>
    <Text>ManageExpencies</Text>
  </View>
};

export default ManageExpencies;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})