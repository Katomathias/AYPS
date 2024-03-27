// DataScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const DataScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Card containerStyle={styles.card}>
      <Text style={styles.cardTitle}>Data Screen</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>Chart 1</Text>
        {/* Add your data visualization components here */}
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>Chart 2</Text>
        {/* Add your data visualization components here */}
      </View>
    </Card>
    <Button
      title="Go to Settings"
      onPress={() => navigation.navigate('Settings')}
      buttonStyle={styles.button}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  card: {
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dataContainer: {
    marginBottom: 16,
  },
  dataText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#3498db',
    marginTop: 16,
  },
});

export default DataScreen;
