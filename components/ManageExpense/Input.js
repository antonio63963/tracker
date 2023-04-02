import { View, Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../constants/styles";

function Input({ label, style, textInputConfig }) {
  const inputStyle = [
    styles.input,
    textInputConfig?.multiline && styles.multiline,
  ];
  return (
    <View style={[styles.inputContainer, style && style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={inputStyle}
        {...textInputConfig}
        placeholderTextColor={Colors.primary100}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    color: Colors.primary100,
    marginBottom: 8,
    opacity: .9
  },
  input: {
    color: Colors.primary200,
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.primary100,
    borderRadius: 8,
  },
  multiline: {
    marginBottom: 50,
    minHeight: 100,
    textAlignVertical: 'top'
  },
});
