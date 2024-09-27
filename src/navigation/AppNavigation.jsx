import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import NewLogin from '../screens/NewLogin';
import Signup from '../screens/Signup';
import NewHomescreen from '../screens/NewHomescreen';
import NewWelcome from '../screens/NewWelcome';


const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      {/* <Stack.Screen name="LoginForm" component={LoginScreen}/>
      <Stack.Screen name="RegisterForm" component={RegisterScreen}/>
      <Stack.Screen name='NewLogin' component={NewLogin}/>
      <Stack.Screen name='Sign' component={Signup}/>
      <Stack.Screen name='Newhome' component={NewHomescreen}/>
      <Stack.Screen name='Newwelcome' component={NewWelcome}/> */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}


export default AppNavigation 