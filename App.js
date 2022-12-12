import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './Screens/StartScreen';
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';
import MainQuestion from './Screens/MainQuestion';
import SelectStrategy from './Screens/SelectStrategy';
import SelectQuestion from './Screens/SelectQuestion';
import Question from './Screens/Question'



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName = 'StartScreen'
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name = "SelectQuestion" component={SelectQuestion}/>
        <Stack.Screen name = "MainQuestion" component={MainQuestion}/>
        <Stack.Screen name = "SelectStrategy" component={SelectStrategy}/>
        <Stack.Screen name = "Question" component={Question}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



