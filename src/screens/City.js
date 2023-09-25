import { Text, View ,SafeAreaView , StyleSheet, ImageBackground, Platform, StatusBar } from 'react-native'
import React, { Component } from 'react'
import {Feather} from '@expo/vector-icons'

export default class City extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.image} source={require('../../assets/city-bg.jpg')} blurRadius={4}>
          <Text style={[styles.cityName,styles.cityText]}>London</Text>
          <Text style={[styles.country,styles.cityText]}>UK</Text>
          <View style={styles.populationWrapper}>
            <Feather name='user' size={50} color={'red'} />
            <Text style={styles.populationText}>8000</Text>
          </View>
          <View style={styles.riseSetWrapper}>
            <View style={styles.sunTextWrapper}>
              <Feather name='sunrise' size={50} color={'white'}/>
              <Text style={styles.sunText}>08:10:29 am</Text>
            </View>
            <View style={styles.sunTextWrapper}>
              <Feather name='sunset' size={50} color={'white'}/>
              <Text style={styles.sunText}>06:30:25 pm</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  country: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingHorizontal: 20
  },
  sunTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  sunText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})