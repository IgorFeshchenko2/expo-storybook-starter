import React from "react";
import {StyleSheet, Text, TouchableOpacity, View, GestureResponderEvent} from "react-native";

type Props = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  color: string;
  textColor: string;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: "flex-start",
    flexGrow: 0,
    backgroundColor: "purple",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "flex-start",
    flex: 1,
  },
});

const MyButton: React.FC<Props> = ({text, onPress, color, textColor}) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, !!color && {backgroundColor: color}]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, !!textColor && {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default MyButton;
