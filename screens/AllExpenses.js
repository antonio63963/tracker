import {View, Text, StyleSheet} from 'react-native';

function AllExpencies() {
  return <View style={styles.rootContainer}>
    <Text>AllExpencies</Text>
  </View>
};

export default AllExpencies;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})