import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native'
import {Feather } from '@expo/vector-icons';

function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name='sun' size={100} color='black' />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <View style={styles.heighLowWrapper}>
          <Text style={styles.heighLow}>Heigh: 8</Text>
          <Text style={styles.heighLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "orange",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  heighLow: {
    color: 'black',
    fontSize: 20
  },
  heighLowWrapper: {
    flexDirection: 'row',
    gap: 8
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather