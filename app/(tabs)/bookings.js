import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function bookings() {
  return (
    <View style={styles.container}>
      <Text>Design the booking page here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});