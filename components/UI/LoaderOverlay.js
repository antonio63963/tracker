import {View, ActivityIndicator, StyleSheet } from 'react-native';

import {Colors} from '../../constants/styles';

function LoaderOverlay() {
  return <View style={styles.container}>
    <ActivityIndicator size={'large'} color="white" />
  </View>
}

export default LoaderOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary700
  }
})