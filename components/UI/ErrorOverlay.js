import {View, Text, Button, StyleSheet } from 'react-native';

import {Colors} from '../../constants/styles';

function ErrorOverlay({onClick, message}) {
  return <View style={styles.container}>
    <Text>ERROR!</Text>
    <Text>{message}</Text>
    <Button title="Ok" onPress={onClick} />
  </View>
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary700
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  message: {
    marginVertical: 16,
    textAlign: 'center',
  }
})