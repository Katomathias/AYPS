import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadImage(result.uri);
    }
  };

  const takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadImage(result.uri);
    }
  };

  const uploadImage = async (uri) => {
    // Implement your logic to upload the image to a server
    // Replace 'your-upload-api-url' with the actual endpoint
    // Make sure to handle success and error cases appropriately
    try {
      // Code to upload image to server
      // Example:
      // const response = await fetch('your-upload-api-url', {
      //   method: 'POST',
      //   body: formData,
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      // const data = await response.json();
      setImage(uri);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const deleteImage = () => {
    setImage(null);
  };

  return (
    <ImageBackground source={require('../../assets/wall1.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Button title="Pick an image from gallery" onPress={pickImage} />
        <Button title="Take a photo" onPress={takeImage} />
        {image && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
            <TouchableOpacity style={styles.deleteButton} onPress={deleteImage}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
});

export default ProfileScreen;
