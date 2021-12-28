import React from "react";
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm:{
    iconName:"weather-lightning",
    gradient:['#000428','#004e92'],
    title:"Thunder storm is coming",
    subtitle:"Why don't you stay indoor today?"
  },
  Drizzle:{
    iconName:"weather-hail",
    gradient:['#89F7FE','#66A6FF'],
    title:"Drizzle Drizzle!",
    subtitle:"Stay dry!"
    
  },
  Rain:{
    iconName:"weather-rainy",
    gradient:['#00C6FB','#005BEA'],
    title:"Rain drops falling on my head",
    subtitle:"Have you prepared your umbrella?"
  },
  Snow:{
    iconName:"weather-snowy",
    gradient:['#7DE2FC','B9B6E5'],
    title:"Let it snow, let it snow",
    subtitle:"Ready to make a snowman?"
  },
  Atmosphere:{
    iconName:"weather-night",
    gradient:['#614385','#516395'],
    title:"Nice breeze out there",
    subtitle:"Enjoy your weather!"
  },
  Clear:{
    iconName:"weather-sunny",
    gradient:['#FEF253','#FF7300'],
    title:"Perfect for outdoor activity",
    subtitle:"Ah such a great day, let's do some laundary"
  },
  Clouds:{
    iconName:"weather-cloudy",
    gradient:['#bdc3c7','#2c3e50'],
    title:"Little gloomy?",
    subtitle:"We may have rain or snow today!"
  }
}

export default function Weather({temp}) {
  return(
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
          <StatusBar barStyle='light-content' />
      <View style={Styles.halfContainer}>
      <MaterialCommunityIcons 
      size={96} 
      name={weatherOptions[condition].iconName}
      color='white'
      />
      <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
      </LinearGradient>
  );}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm", 
    "Drizzle", 
    "Rain", 
    "Snow", 
    "Atmosphere", 
    "Clear", 
    "Clouds",
  ]).isRequired
};

const Styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  halfContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    fontSize: 42,
    fontWeight: "bold",
    fontFamily: 'Open Sans',
    color: 'white'
  },
  title:{
    color: 'white',
    fontWeight:'300',
    fontSize:54,
    marginBottom: 20
  },
  subtitle:{
    color: 'white',
    fontWeight:'600',
    fontSize:24 
  },
  textContainer:{
    paddingHorizontal:20,
    alignItems:'flex-start'
  }
});

