

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import axios from 'axios';

// const WEATHER_API_KEY = '200925c7f0d3c72962ec4a19e6c4ad30';
// const CROP_PERFORMANCE_API_URL = 'https://your-crop-performance-api-url.com';

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [cropPerformanceData, setCropPerformanceData] = useState(null);

//   useEffect(() => {
//     // Fetch weather data
//     axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Kampala,ug&appid=${WEATHER_API_KEY}`)
//       .then(response => {
//         setWeatherData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching weather data:', error);
//       });

//     // Fetch crop performance data
//     axios.get(CROP_PERFORMANCE_API_URL)
//       .then(response => {
//         setCropPerformanceData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching crop performance data:', error);
//       });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Weather Information</Text>
//       {weatherData && (
//         <View style={styles.weatherContainer}>
//           <Text>Temperature: {weatherData.main.temp} °C</Text>
//           <Text>Humidity: {weatherData.main.humidity} %</Text>
//           {/* You can display more weather data as needed */}
//         </View>
//       )}

//       <Text style={styles.header}>Crop Performance Data</Text>
//       {cropPerformanceData && (
//         <View style={styles.cropPerformanceContainer}>
//           {/* Display crop performance data */}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   weatherContainer: {
//     marginBottom: 20,
//   },
//   cropPerformanceContainer: {
//     // Style crop performance container as needed
//   },
// });

// export default Weather;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const API_KEY = '200925c7f0d3c72962ec4a19e6c4ad30';

// const Weather = () => {
//   const [location, setLocation] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [cropPerformanceData, setCropPerformanceData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchWeatherData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
//       );
//       const data = await response.json();
//       if (data.cod === 200) {
//         setWeatherData(data);
//         setError(null);
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching weather data: ', error);
//       setError('Error fetching weather data. Please try again later.');
//     }
//     setLoading(false);
//   };

//   const fetchCropPerformanceData = async () => {
//     // Simulating crop performance data fetch (Replace with actual API call)
//     // Hypothetical endpoint: 'https://api.example.com/crop-performance'
//     try {
//       const response = await fetch('https://api.example.com/crop-performance');
//       const data = await response.json();
//       setCropPerformanceData(data);
//     } catch (error) {
//       console.error('Error fetching crop performance data: ', error);
//       // Handle error accordingly
//     }
//   };

//   useEffect(() => {
//     if (location) {
//       fetchWeatherData();
//       fetchCropPerformanceData();
//     }
//   }, [location]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Weather and Crop Performance App</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter location"
//         onChangeText={setLocation}
//         value={location}
//       />
//       <Button title="Search" onPress={fetchWeatherData} disabled={!location || loading} />
//       {loading && <Text>Loading...</Text>}
//       {error && <Text style={styles.error}>{error}</Text>}
//       {weatherData && (
//         <View style={styles.weatherContainer}>
//           <Text style={styles.weatherText}>
//             Weather in {weatherData.name}: {weatherData.weather[0].description}
//           </Text>
//           <Text style={styles.weatherText}>
//             Temperature: {Math.round(weatherData.main.temp - 273.15)}°C
//           </Text>
//           {/* Add more weather details as needed */}
//         </View>
//       )}
//       {cropPerformanceData && (
//         <View style={styles.cropPerformanceContainer}>
//           <Text style={styles.heading}>Crop Performance Data</Text>
//           {/* Display crop performance data */}
//           {/* Example: */}
//           <Text>Crop: {cropPerformanceData.crop}</Text>
//           <Text>Performance: {cropPerformanceData.performance}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     width: '100%',
//   },
//   weatherContainer: {
//     marginTop: 20,
//   },
//   weatherText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   cropPerformanceContainer: {
//     marginTop: 20,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default Weather;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import * as Location from 'expo-location'; // Importing Expo Location API

const API_KEY = '200925c7f0d3c72962ec4a19e6c4ad30';

const Weatherr = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      fetchWeatherData(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.error('Error fetching location: ', error);
      setError('Error fetching location. Please try again later.');
    }
    setLoading(false);
  };

  const fetchWeatherData = async (latitude, longitude) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error fetching weather data: ', error);
      setError('Error fetching weather data. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <ImageBackground source={require('../../assets/weather.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.heading}> Current Weather</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>
            Location: {weatherData.name}
          </Text>
          <Text style={styles.weatherText}>
            Description: {weatherData.weather[0].description}
          </Text>
          <Text style={styles.weatherText}>
            Temperature: {Math.round(weatherData.main.temp - 273.15)}°C
          </Text>
          <Text style={styles.weatherText}>
            Humidity: {weatherData.main.humidity}%
          </Text>
          <Text style={styles.weatherText}>
            Pressure: {weatherData.main.pressure} hPa
          </Text>
          <Text style={styles.weatherText}>
            Wind Speed: {weatherData.wind.speed} m/s
          </Text>
          <Text style={styles.weatherText}>
             Visibility: {weatherData.visibility} meters
          </Text>
          <Text style={styles.weatherText}>
            Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
          </Text>
           <Text style={styles.weatherText}>
             Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
          </Text>
          {/* Add more weather details as needed */}

          <Text onPress={() => navigation.navigate('forecast')}  style={[styles.textSign, {
                        color: '#D3F60B'
                    }]}>See Weather Forecast</Text>
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
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  weatherContainer: {
    marginTop: 20,
  },
  weatherText: {
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
},
});

export default Weatherr;
