import React from 'react'
import Background from '../Components/Background'
import Logo from '../Components/Logo'
import Header from '../Components/Header'
import Button from '../Components/Button'


export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo/>
      <Header>Welcome</Header>
      <Button
        mode="contained"
        onPress={() => {navigation.navigate('LoginScreen')
        }}>
        Start
      </Button>
    </Background>
  )

}
