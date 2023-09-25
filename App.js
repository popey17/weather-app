import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import LoadingView from './src/components/LoadingView';
import * as Location from 'expo-location';
import {API_KEY} from "@env";

// 

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
	const [weather,setWeather] = useState([])
	const [lat, setLat] = useState([])
	const [lon, setLon] = useState([])

	const fetchWeatherData = async () => {
		try {
			const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
			const data = await res.json();
			setWeather(data);
			setLoading(false)
		} catch (e) {
			setError('fetch data error')
		} finally {
			setLoading(false)
		}
	}
		

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location denied.');``
        return;
      }
      let locationData = await Location.getCurrentPositionAsync({});
      setLat(locationData.coords.latitude); 
      setLon(locationData.coords.longitude); 
			await fetchWeatherData()
    })();
  }, [lat,lon]);

	if(weather) {
		console.log(weather);
	}

  return (
    <NavigationContainer>
      {loading ? <LoadingView /> : <Tabs />}
    </NavigationContainer>
  );
}

export default App;
