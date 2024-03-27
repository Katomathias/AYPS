import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        fringilla orci. Morbi lacinia augue et quam rhoncus, vitae tincidunt
        lectus lacinia. Phasellus nec libero eleifend, tempor turpis vitae,
        venenatis purus. Fusce nec quam nulla. Vivamus vehicula nulla nec
        fermentum fermentum. Integer non nisl a eros faucibus lacinia.
      </Text>
      <Text style={styles.description}>
        Sed id efficitur odio. Nullam auctor nec sapien ac varius. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Nam efficitur tortor vel purus vulputate, eu
        sollicitudin libero dapibus. Suspendisse ut sapien nec turpis eleifend
        sodales. Vestibulum vel nisl ultricies, lacinia dolor id, dignissim
        dolor. Donec fringilla aliquam est, non efficitur odio dignissim eu.
        Nullam sed ligula velit.
      </Text>
      {/* Add more details as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
  },
});

export default AboutUs;
