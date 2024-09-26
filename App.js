import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import MapComponent from './components/MapComponent';
import Nav from './components/Navigation.js';


export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
       <View style={styles.overlay}>
      </View>
      <Nav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 100,
    left: 70,
  },
});
