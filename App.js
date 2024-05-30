
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from ' ';
import 'react-native-gesture-handler';
import HomeScreen from './components/HomeScreen';
import DataScreen from './components/DataScreen';
import SettingsScreen from './components/SettingsScreen';
import SplashScreen from './components/SplashScreen';
import MainTabScreen from './components/MainTabScreen';
import SupportScreen from './components/SupportScreen';
import { DrawerContent } from './components/DrawerContent';
import { AuthContext } from './components/context'; 

import {  
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import SignInScreen from './components/SignInScreen';
import RegisterScreen from './components/RegisterScreen';
import Weather from './components/Weather';
import Forecast from './components/screens/Forecast';
import AboutUs from './components/screens/AboutUs';
import ImagePick from './components/screens/ImagePick';
import ProfileScreen from './components/screens/ProfileScreen';
// import ContactUs from './components/screens/ContactUs';


const Stack = createStackNavigator();




export default function App() {
  
  

  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false,
          }} >
            
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />  
      <Stack.Screen name="Signin" component={SignInScreen} /> 
      <Stack.Screen name="HomeDrawer" component={MainTabScreen} /> 
       {/* <Stack.Screen name="Drawer" component={DrawerContent} />  */}
       
        <Stack.Screen name="SupportScreen" component={SupportScreen} />
        
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Data" component={DataScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="More" component={Weather} />
        <Stack.Screen name="forecast" component={Forecast} />
        <Stack.Screen name="about" component={AboutUs} />
        {/* <Stack.Screen name="contact" component={ContactUs} /> */}
        <Stack.Screen name="ImagePick" component={ImagePick} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        
        
    </Stack.Navigator>
    </NavigationContainer>
   
    
  );
}