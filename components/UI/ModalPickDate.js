import { useLayoutEffect } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate,  } from "react-native-modern-datepicker";

import { Colors } from "../../constants/styles";

import Button from "./Button";
import IconButton from "./IconButton";

import { Ionicons } from "@expo/vector-icons";

function ModalPickDate({
  isOpen,
  startDate,
  selectedDate,
  onClose,
  onDateChange,
}) {
  useLayoutEffect(() => {
    const initialDate = getFormatedDate(
      startDate.getTime(),
      "YYYY/MM/DD"
    );
    onDateChange(initialDate);
  }, []);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={onClose}
      >
        <Pressable style={{ flex: 1 }} onPress={onClose}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.topButtonRow}>
                <IconButton
                  iconName="close"
                  color={Colors.primary700}
                  size={24}
                  onPress={onClose}
                  style={{ textAlign: "end" }}
                />
              </View>
              <View style={styles.content}>
                <DatePicker
                  mode="calendar"
                  selected={selectedDate}
                  onDateChange={onDateChange}
                />
              </View>
              <View style={styles.topButtonRow}>
                <Button
                  style={[styles.button, { backgroundColor: Colors.error500 }]}
                  onPress={() => {
                    onDateChange("");
                    onClose();
                  }}
                >
                  <Ionicons name="trash" size={24} color="white" />
                </Button>
                <Button
                  onPress={onClose}
                  style={[
                    styles.button,
                    { backgroundColor: Colors.primary500 },
                  ]}
                >
                  <Ionicons name="save" size={24} color="white" />
                </Button>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

export default ModalPickDate;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    // padding: 35,
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    overflow: "hidden",
  },
  content: {
    width: "100%",
    paddingHorizontal: 35,
    paddingBottom: 35,
  },
  topButtonRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    flex: 1,
  },
});
