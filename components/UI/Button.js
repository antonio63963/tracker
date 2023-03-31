import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function Button({ children, onPress, isFlat, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={[styles.button, isFlat && styles.flat]}>
          <Text style={[styles.buttonText, isFlat && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  flatText: {
    color: Colors.primary200,
    textAlign: 'center'
  },
  pressed: {
    opacity: .75,
    backgroundColor: Colors.primary100,
    borderRadius: 4
  }
});
