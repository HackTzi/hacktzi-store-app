import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ButtonPrimary = ({children, color= '#000', backgroundColor = '#98CA3F', width, height}) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor, width, height}]}>
      <Text style={[styles.buttonText, {color}]}>{children}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15
  }
})
