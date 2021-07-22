import React from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import Constants from 'expo-constants';
import Logo from '../assets/logo-platzi.png'
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import Carrousel from '../components/organisms/Carrousel';

const Welcome = () => {
  const {width} = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo}/>
      <Carrousel/>
      <ButtonPrimary width={width * 0.8} height={50}>COMIENZA AHORA</ButtonPrimary>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight, 
    alignItems: 'center', 
    justifyContent: 'space-evenly',
    backgroundColor: '#03091E'
  },
  logo: {
    alignSelf: 'center',
    height: 50,
    resizeMode: 'contain',
  }
});