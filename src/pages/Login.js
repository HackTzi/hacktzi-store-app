import React from 'react'
import { StyleSheet, Text, Image, View, TextInput, useWindowDimensions} from 'react-native'
import Constants from 'expo-constants';
import Logo from '../../assets/logo-platzi.png'
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import LoginWith from '../components/atoms/LoginWith';
import PlatziLogo from '../../assets/logo-platzi-without-name.png'
import { EvilIcons,AntDesign } from '@expo/vector-icons'; 
const Login = ({navigation}) => {
  const { width } = useWindowDimensions()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo}/>
      <View style={styles.separator}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.inputText, {width: width * 0.8}]}
          onChangeText={handleEmail}
          value={email}
          placeholder="Ingresa tu email"
          autoCompleteType='email'
          placeholderTextColor='rgba(246, 246, 246, 0.4)'
        />
      </View>
      <View style={styles.separator}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[styles.inputText, {width: width * 0.8}]}
          onChangeText={handlePassword}
          value={password}
          placeholder="Ingresa tu contraseña"
          autoCompleteType='password'
          placeholderTextColor='rgba(246, 246, 246, 0.4)'
          
        />
      </View> 
      <ButtonPrimary width={width * 0.8} height={50} marginTop={30}>INICIAR SESIÓN</ButtonPrimary>
      <View style={[styles.loginWith, , {width: width * 0.8}]}>
        <LoginWith backgroundColor='#0791E6'>
          <EvilIcons name="sc-facebook" size={55} color="#03091E" />
        </LoginWith>
        <LoginWith backgroundColor='#98CA3F'>
          <Image source={PlatziLogo} style={{ transform: [{scale: 0.84}]}}/>
        </LoginWith>
        <LoginWith backgroundColor='#EC596B'>
          <AntDesign name="google" size={32} color="black" />
        </LoginWith>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight, 
    backgroundColor: '#03091E',
    alignItems: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: 60,
    marginTop: 30,
    marginBottom: 60,
    resizeMode: 'contain',
  }, 
  inputText: {
    color: 'white',
    fontSize: 15, 
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(246, 246, 246, 0.4)'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    marginVertical: 10
  },
  loginWith: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
    width: ''
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30
  }
})
