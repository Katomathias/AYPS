import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const ImagePick = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = () => {
    ImagePicker.launchImageLibraryAsync({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        return;
      }

      setSelectedImage({ uri: response.uri }); // Store image URI
    });
  };

  const detectDisease = async () => {
    if (!selectedImage) {
      alert('Please select an image of your plant.');
      return;
    }

    const formData = new FormData();
    formData.append('image', {
      uri: selectedImage.uri,
      type: 'image/jpeg', // Adjust based on image type
      name: 'plant.jpg',
    });

    try {
      const response = await axios.post('/api/detect-disease/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { disease, treatment } = response.data;
      alert(`Disease: ${disease}\nTreatment: ${treatment}`);
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plant Disease Detector</Text>
      {selectedImage ? (
        <Image source={selectedImage} style={styles.image} />
      ) : (
        <Text>Select an image of your plant</Text>
      )}
      <Button title="Pick Image" onPress={pickImage} />
      {selectedImage && <Button title="Detect Disease" onPress={detectDisease} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default ImagePick;
