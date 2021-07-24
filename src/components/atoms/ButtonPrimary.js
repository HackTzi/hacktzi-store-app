// @flow
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';

const ButtonPrimary = (props) => {
  const {
    color = '#000', backgroundColor = '#98CA3F', width, height, marginTop, onPress, children,
  } = props;
  return (
    <TouchableOpacity
      delayPressIn={0}
      onPress={onPress}
      style={[styles.button, {
        backgroundColor, width, height, marginTop,
      }]}
    >
      <Text style={[styles.buttonText, { color }]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
