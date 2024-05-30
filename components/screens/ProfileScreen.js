import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const ProfileScreen = ({navigation}) => {
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

    <Button
      title="Go to Settings"
      onPress={() => navigation.navigate('ImagePick')}
      buttonStyle={styles.button}
    />

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








// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet, Image, ActivityIndicator } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-react-native';
// // import * as TFLite from '@tensorflow/tfjs-react-native';  //this is a new import

// import * as mobilenet from '@tensorflow-models/mobilenet';
// import * as jpeg from 'jpeg-js';
// // import { useNavigation } from '@react-navigation/native';

// const ProfileScreen = ({navigation}) => {

//   // const navigation = useNavigation();
  
//   const [hasPermission, setHasPermission] = useState(null);
//   const [isModelReady, setIsModelReady] = useState(false);
//   const [prediction, setPrediction] = useState(null);
//   const [image, setImage] = useState(null);
//   const [model, setModel] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       setHasPermission(status === 'granted');

//       await tf.ready();
//       const loadedModel = await mobilenet.load();
//       setModel(loadedModel);
//       setIsModelReady(true);
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.uri);
//       await processImage(result.uri);
//     }
//   };

//   const takeImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
      
//     if (!result.canceled) {
//       setImage(result.uri);
//       await processImage(result.uri);
//     }
//   };

//   const processImage = async (uri) => {
//     setLoading(true);
//     try {
//       const response = await fetch(uri);
//       const blob = await response.blob();
//       const base64Image = await blobToBase64(blob);

//       const imgBuffer = tf.util.encodeString(base64Image, 'base64').buffer;
//       const rawImageData = new Uint8Array(imgBuffer);
//       const TO_UINT8ARRAY = true;
//       const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
//       const imageTensor = tf.browser.fromPixels({ data, width, height });
//       const resizedImage = tf.image.resizeBilinear(imageTensor, [224, 224]);
//       const batched = resizedImage.expandDims(0);

//       const predictions = await model.classify(batched);
//       setPrediction(predictions[0]);
//     } catch (error) {
//       console.error('Error processing image:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const blobToBase64 = (blob) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onloadend = () => resolve(reader.result.split(',')[1]);
//       reader.onerror = reject;
//       reader.readAsDataURL(blob);
//     });
//   };

//   const deleteImage = () => {
//     setImage(null);
//     setPrediction(null);
//   };

//   if (hasPermission === null) {
//     return <Text>Requesting permission to access media library...</Text>;
//   }

//   if (hasPermission === false) {
//     return <Text>No access to media library</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Button title="Pick an image from gallery" onPress={pickImage} disabled={!isModelReady || loading} />
//       <Button title="Take a photo" onPress={takeImage} disabled={!isModelReady || loading} />
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//       {image && (
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: image }} style={styles.preview} />
//           <Button title="Delete Image" onPress={deleteImage} />
//         </View>
//       )}
//       {prediction && (
//         <Text style={styles.prediction}>
//           Prediction: {prediction.className} ({(prediction.probability * 100).toFixed(2)}%)
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     marginVertical: 20,
//   },
//   preview: {
//     width: 300,
//     height: 300,
//     marginVertical: 10,
//   },
//   prediction: {
//     fontSize: 18,
//     margin: 10,
//   },
// });

// export default ProfileScreen;







// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet, Image, ActivityIndicator } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-backend-cpu'         //new import
// import '@tensorflow/tfjs-react-native';   // Required for the environment setup
// import * as tflite from '@tensorflow/tfjs-tflite';
// import * as jpeg from 'jpeg-js';
// import * as FileSystem from 'expo-file-system';

// const ProfileScreen = ({ navigation }) => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [isModelReady, setIsModelReady] = useState(false);
//   const [prediction, setPrediction] = useState(null);
//   const [image, setImage] = useState(null);
//   const [model, setModel] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       setHasPermission(status === 'granted');
          
//       await tf.ready();
//       const modelPath = require('../../assets/model/maizemodel.tflite'); // Make sure this path is correct  //alt- ('./assets/model/maizemodel.tflite')
//       const loadedModel = await tflite.loadTFLiteModel(modelPath);
//       setModel(loadedModel);
//       setIsModelReady(true); 
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.uri);
//       await processImage(result.uri);
//     }
//   };

//   const takeImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.uri);
//       await processImage(result.uri);
//     }
//   };

//   const processImage = async (uri) => {
//     setLoading(true);
//     try {
//       const response = await fetch(uri);
//       const blob = await response.blob();
//       const base64Image = await blobToBase64(blob);

//       const imgBuffer = tf.util.encodeString(base64Image, 'base64').buffer;
//       const rawImageData = new Uint8Array(imgBuffer);
//       const TO_UINT8ARRAY = true;
//       const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
//       const imageTensor = tf.browser.fromPixels({ data, width, height });
//       const resizedImage = tf.image.resizeBilinear(imageTensor, [224, 224]);
//       const batched = resizedImage.expandDims(0);

//       const predictions = await model.predict(batched).data();
//       setPrediction(predictions[0]);
//     } catch (error) {
//       console.error('Error processing image:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const blobToBase64 = (blob) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onloadend = () => resolve(reader.result.split(',')[1]);
//       reader.onerror = reject;
//       reader.readAsDataURL(blob);
//     });
//   };

//   const deleteImage = () => {
//     setImage(null);
//     setPrediction(null);
//   };

//   if (hasPermission === null) {
//     return <Text>Requesting permission to access media library...</Text>;
//   }

//   if (hasPermission === false) {
//     return <Text>No access to media library</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Button title="Pick an image from gallery" onPress={pickImage} disabled={!isModelReady || loading} />
//       <Button title="Take a photo" onPress={takeImage} disabled={!isModelReady || loading} />
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//       {image && (
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: image }} style={styles.preview} />
//           <Button title="Delete Image" onPress={deleteImage} />
//         </View>
//       )}
//       {prediction && (
//         <Text style={styles.prediction}>
//           Prediction: {prediction.className} ({(prediction.probability * 100).toFixed(2)}%)
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     marginVertical: 20,
//   },
//   preview: {
//     width: 300,
//     height: 300,
//     marginVertical: 10,
//   },
//   prediction: {
//     fontSize: 18,
//     margin: 10,
//   },
// });

// export default ProfileScreen;






