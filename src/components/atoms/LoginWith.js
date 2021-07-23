import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const LoginWith = ({children, backgroundColor}) => {
  return (
    <TouchableOpacity style={[styles.circle, {backgroundColor}]}>
      {children}
    </TouchableOpacity>
  )
}

export default LoginWith

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30
  }
})
