import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function Button({ children, onPress, isFlat, style, bgColor }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View
          style={[
            styles.button,
            bgColor && { backgroundColor: bgColor },
            isFlat && styles.flat,
          ]}
        >
          <Text style={[styles.buttonText, isFlat && styles.flatText]}>
            {children}
          </Text>
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
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: Colors.primary200,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.primary400,
    borderRadius: 4,
  },
});
