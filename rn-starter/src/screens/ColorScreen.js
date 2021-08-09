import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
  return (
    <View>
      <Button title='Add a Color' />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb()}} />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.random() * 256;
  const green = Math.random() * 256;
  const blue = Math.random() * 256;

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;
