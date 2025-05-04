import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import SideMenu from './SideMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SideMenu />
      {/* Здесь будет основной контент вашего приложения */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});