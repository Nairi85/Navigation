import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './components/MainPage';
import SecondPage from './components/SecondPage';
import ThierdPage from './components/ThierdPage';
import Stack from './navigation'

export default function App() {
  return (
    <View style={styles.container}>
    <Stack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
