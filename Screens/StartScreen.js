import React from 'react'
import Background from '../Components/Background'
import Logo from '../Components/Logo'
import Header from '../Components/Header'
import Button from '../Components/Button'
import Paragraph from '../Components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo/>
      <Header>Student App</Header>
      <Button
        mode="contained"
        onPress={() => {navigation.navigate('LoginScreen')
        }}>
        Start
      </Button>
    </Background>
  )
}
