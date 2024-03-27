import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Linking, Platform } from 'react-native';
import Weatherr from './Weatherr';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons'; 
import LogOut from './LogOut';


const Drawer = createDrawerNavigator();

const DetailsScreen = () => {
  return (
    <ImageBackground source={require('../../assets/wall1.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    </ImageBackground>
  );
};

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}





const Linkss = () => {
  // Sample agriculture-related links
  const links = [
    { id: '1', title: 'Agricultural News', url: 'https://www.monitor.co.ug/uganda/magazines/farming' },
    { id: '2', title: 'Crop Management Techniques', url: 'https://agrierp.com/blog/integrated-crop-management/' },
    { id: '3', title: 'Soil Health and Fertility', url: 'http://www.soilhealth.com/' },
    { id: '4', title: 'Pest Control Methods', url: 'https://www.fieldroutes.com/blog/pest-control-methods/' },
    { id: '5', title: 'Farm Equipment and Machinery', url: 'https://www.deere.com/en/agriculture/' },
    // Add more links as needed
  ];

  // Function to handle link press
  const handleLinkPress = (url) => {
    // Open the link in a web browser or in-app browser
    Linking.openURL(url)
      .catch((err) => console.error('Failed to open URL:', err));
  };

  // Function to render each link item
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleLinkPress(item.url)} style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={links}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};






const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Useful Links"
        component={Linkss}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'link' : 'ios-link'}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Weather"
        component={Weatherr}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'sunny' : 'ios-sunny'}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutUs}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'information-circle' : 'ios-information-circle'}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactUs}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'call' : 'ios-contact'}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Log Out"
        component={LogOut}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'log-out' : 'ios-log-out'}
              size={size}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'home' : 'ios-home'}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'list' : 'ios-list'}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'notifications' : 'ios-notifications'}
              size={size}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    
      <DrawerNavigator />
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  item: {
        backgroundColor: '#0DDB14',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
      },
      title: {
        fontSize: 18,
      },
});

export default App;
