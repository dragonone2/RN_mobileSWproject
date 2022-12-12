import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './Screens/StartScreen';
import LoginScreen from './Screens/LoginScreen';
import Dashboard from './Screens/Dashboard';
import MainScreen from './Screens/MainScreen';
import Std from './Screens/Std'

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
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name = "MainScreen" component={MainScreen}/>
        <Stack.Screen name = "Std" component={Std}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



