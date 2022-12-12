import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Button } from 'react-native'
import Background from '../Components/Background'
import Logo from '../Components/Logo'
import Header from '../Components/Header'
import TextInput from '../Components/TextInput'
import BackButton from '../Components/BackButton'
import { theme } from '../core/theme'
import * as DBfunction from '../Database'



export default function LoginScreen({navigation}) {
  const [addName, setAddName] = useState('')
  
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome</Header>
      <TextInput
        label="Teacher Name"
        value={addName}
        onChangeText={setAddName}
      />
      <Button 
      title='Login'rr
      color='#6666ff'
      onPress={() =>{
      navigation.navigate('MainScreen',{nickname:addName})
      DBfunction.addTeacher(addName)
    }}/>
        
    </Background>
  )

}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
