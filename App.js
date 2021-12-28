import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "a0498b0626eda53ee9163dd5dacacd37";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {data:{main:{temp}},weather} = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({
      isLoading:false, 
      condition: weather[0].main ,
      temp
    });
  };
  getLocation = async() => {
    try {
      await Location.requestBackgroundPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync(options);
      this.getWeather(latitude, longitude)
      //Send to API and get weather
      console.log(coords.latitude, coords.longitude);
    } 
    catch (error){
      Alert.alert("We can't locate you!")
    }
  };
  ComponentDidMount(){
    this.getLocation();
  }
  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  } 
}