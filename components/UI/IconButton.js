import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/styles";

function IconButton({ onPress, iconName, size, color }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary50 }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.bottonContainer}>
          <Ionicons name={iconName} size={size} color={color} />
        </View>
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 8,
    borderRadius: 30,
    overflow: 'hidden',
  },
  bottonContainer: {
    padding: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
