import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  console.log(navigation);

  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
     <Button
        title='Go to image screen'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go to counter demo'
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
