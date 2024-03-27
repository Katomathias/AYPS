import React from 'react';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; //old import
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'; //new import

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

//import HomeScreen from '.components/screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './HomeScreen';

// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="green"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Predict crop',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="leaf" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Predict disease',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="apps" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
  
);


export default MainTabScreen;

// const HomeStackScreen = ({navigation}) => (
// <HomeStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#009387',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <HomeStack.Screen name="Home" component={HomeScreen} options={{
//         title:'Overview',
//         headerLeft: () => (
//             <Icon.Button name="menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </HomeStack.Navigator>
// );

// const DetailsStackScreen = ({navigation}) => (
// <DetailsStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#1f65ff',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
//         headerRight: () => (
//             <Icon.Button name="menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </DetailsStack.Navigator>

// );
  