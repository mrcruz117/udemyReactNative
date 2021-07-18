import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'greeting!';
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text>Hi There!!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
