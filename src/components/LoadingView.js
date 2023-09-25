import React from "react";
import { ActivityIndicator, View, StyleSheet } from 'react-native'


function LoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  );
}


const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1
	}
})

export default LoadingView