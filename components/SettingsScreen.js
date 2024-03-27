// SettingsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const SettingsScreen = ({ navigation }) => (
  <View style={{ padding: 16, backgroundColor: '#ecf0f1', flex: 1 }}>
    <Card containerStyle={{ borderRadius: 10, marginBottom: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
        Settings Screen
      </Text>
      {/* Add settings components here */}
    </Card>
    <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Home')}
      buttonStyle={{ backgroundColor: '#3498db', marginTop: 16 }}
    />
  </View>
);

export default SettingsScreen;
