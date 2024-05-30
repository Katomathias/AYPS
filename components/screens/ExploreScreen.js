// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

// const ExploreScreen = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (key, value) => {
//     setFormData({ ...formData, [key]: value });
//   };

//   const handleSubmit = () => {
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // You can add your submission logic here, such as sending the data to a server
//   };

//   return (
//     <ImageBackground source={require('../../assets/wall.jpeg')} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="PH"
//           value={formData.name}
//           onChangeText={(text) => handleChange('name', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Potassium"
//           value={formData.email}
//           onChangeText={(text) => handleChange('email', text)}
//           keyboardType="email-address"
//         />
//         {/* <TextInput
//           style={[styles.input, styles.textArea]} // Apply additional style for textArea
//           placeholder="Phosphorous"
//           value={formData.message}
//           onChangeText={(text) => handleChange('message', text)}
//           multiline={true} // Allow multiline input
//           numberOfLines={4} // Set number of lines to display
//         /> */}
//         <TextInput
//           style={styles.input}
//           placeholder="Phosphorous"
//           value={formData.email}
//           onChangeText={(text) => handleChange('email', text)}
//           keyboardType="email-address"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Nitrogen"
//           value={formData.email}
//           onChangeText={(text) => handleChange('email', text)}
//           keyboardType="email-address"
//         />
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // Stretch the image to cover entire container
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Set background color with opacity
//   },
//   textArea: {
//     height: 100, // Adjust the height according to your preference
//     textAlignVertical: 'top', // Align the text to the top
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default ExploreScreen;






// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

// const ExploreScreen = () => {
//   const [formData, setFormData] = useState({
//     ph: '',
//     potassium: '',
//     phosphorous: '',
//     nitrogen: '',
//     moisture: '',
//     temperature: '',
//     humidity: '',
//     light: '',
//   });

//   const handleChange = (key, value) => {
//     setFormData({ ...formData, [key]: value });
//   };

//   const handleSubmit = () => {
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // You can add your submission logic here, such as sending the data to a server
//   };

//   return (
//     <ImageBackground source={require('../../assets/wall.jpeg')} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="PH"
//           value={formData.ph}
//           onChangeText={(text) => handleChange('ph', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Potassium"
//           value={formData.potassium}
//           onChangeText={(text) => handleChange('potassium', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Phosphorous"
//           value={formData.phosphorous}
//           onChangeText={(text) => handleChange('phosphorous', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Nitrogen"
//           value={formData.nitrogen}
//           onChangeText={(text) => handleChange('nitrogen', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Moisture"
//           value={formData.moisture}
//           onChangeText={(text) => handleChange('moisture', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Temperature"
//           value={formData.temperature}
//           onChangeText={(text) => handleChange('temperature', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Humidity"
//           value={formData.humidity}
//           onChangeText={(text) => handleChange('humidity', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Light"
//           value={formData.light}
//           onChangeText={(text) => handleChange('light', text)}
//         />
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // Stretch the image to cover entire container
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Set background color with opacity
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default ExploreScreen;








// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
// import * as tf from '@tensorflow/tfjs';
// import * as tfReactNative from '@tensorflow/tfjs-react-native';
// import { bundleResourceIO } from '@tensorflow/tfjs-react-native';

// const ExploreScreen = () => {
//   const [formData, setFormData] = useState({
//     ph: '',
//     potassium: '',
//     phosphorous: '',
//     nitrogen: '',
//     moisture: '',
//     temperature: '',
//     humidity: '',
//     light: '',
//   });

//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     const loadModel = async () => {
//       await tf.ready();
//       const modelJson = require('../../assets/model/model.json');   
//       const modelWeights = [
//         require('../../assets/model/group1-shard1of1.bin'),
//       ];
//       const loadedModel = await tf.loadGraphModel(bundleResourceIO(modelJson, modelWeights));
//       setModel(loadedModel);
//     };

//     loadModel();
//   }, []);

//   const handleChange = (key, value) => {
//     setFormData({ ...formData, [key]: value });
//   };

//   const handleSubmit = async () => {
//     if (!model) {
//       Alert.alert('Model not loaded', 'Please wait for the model to load.');
//       return;
//     }

//     const inputTensor = tf.tensor2d([[
//       parseFloat(formData.ph),
//       parseFloat(formData.potassium),
//       parseFloat(formData.phosphorous),
//       parseFloat(formData.nitrogen),
//       parseFloat(formData.moisture),
//       parseFloat(formData.temperature),
//       parseFloat(formData.humidity),
//       parseFloat(formData.light)
//     ]]);

//     const prediction = model.predict(inputTensor);
//     const crop = prediction.dataSync()[0]; // Assuming the model outputs a single crop name

//     Alert.alert('Prediction', `Based on the inputs, you can grow: ${crop}`);
//   };

//   return (
//     <ImageBackground source={require('../../assets/wall.jpeg')} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="PH"
//           value={formData.ph}
//           onChangeText={(text) => handleChange('ph', text)}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Potassium"
//           value={formData.potassium}
//           onChangeText={(text) => handleChange('potassium', text)}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Phosphorous"
//           value={formData.phosphorous}
//           onChangeText={(text) => handleChange('phosphorous', text)}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Nitrogen"
//           value={formData.nitrogen}
//           onChangeText={(text) => handleChange('nitrogen', text)}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Moisture"
//           value={formData.moisture}
//           onChangeText={(text) => handleChange('moisture', text)}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Temperature"
//           value={formData.temperature}
//           onChangeText={(text) => handleChange('temperature', text)}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Humidity"
//           value={formData.humidity}
//           onChangeText={(text) => handleChange('humidity', text)}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Light"
//           value={formData.light}
//           onChangeText={(text) => handleChange('light', text)}
//           keyboardType="numeric"
//         />
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // Stretch the image to cover entire container
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Set background color with opacity
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default ExploreScreen;





import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import * as tflite from '@tensorflow/tfjs-tflite';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';

const ExploreScreen = () => {
  const [formData, setFormData] = useState({
    ph: '',
    potassium: '',
    phosphorous: '',
    nitrogen: '',
    moisture: '',
    temperature: '',
    humidity: '',
    light: '',
  });

  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      const model = await tflite.loadTFLiteModel(
        bundleResourceIO(require('../../assets/model/crop_recommendation_model.tflite'))
      );
      setModel(model);
    };

    loadModel();
  }, []);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    if (!model) {
      Alert.alert('Model not loaded', 'Please wait for the model to load.');
      return;
    }

    const inputTensor = tf.tensor2d([[
      parseFloat(formData.ph),
      parseFloat(formData.potassium),
      parseFloat(formData.phosphorous),
      parseFloat(formData.nitrogen),
      parseFloat(formData.moisture),
      parseFloat(formData.temperature),
      parseFloat(formData.humidity),
      parseFloat(formData.light)
    ]]);

    const prediction = model.predict(inputTensor);
    const crop = prediction.dataSync()[0]; // Assuming the model outputs a single crop name

    Alert.alert('Prediction', `Based on the inputs, you can grow: ${crop}`);
  };

  return (
    <ImageBackground source={require('../../assets/wall.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="PH"
          value={formData.ph}
          onChangeText={(text) => handleChange('ph', text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Potassium"
          value={formData.potassium}
          onChangeText={(text) => handleChange('potassium', text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Phosphorous"
          value={formData.phosphorous}
          onChangeText={(text) => handleChange('phosphorous', text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Nitrogen"
          value={formData.nitrogen}
          onChangeText={(text) => handleChange('nitrogen', text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Moisture"
          value={formData.moisture}
          onChangeText={(text) => handleChange('moisture', text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Temperature"
          value={formData.temperature}
          onChangeText={(text) => handleChange('temperature', text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Humidity"
          value={formData.humidity}
          onChangeText={(text) => handleChange('humidity', text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Light"
          value={formData.light}
          onChangeText={(text) => handleChange('light', text)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ExploreScreen;








