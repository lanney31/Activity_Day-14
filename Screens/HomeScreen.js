import React, { useState } from 'react';
import {View, Text, Button ,StyleSheet} from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>Open Lanney app!</Text>
      <Text style ={styles.text}>Click here! {count} times </Text>
      <Button title='click me' onPress ={() => setCount(count + 1)}/>
      <Button title='Go datails' onPress ={() => navigation.native('details')}/>
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
  text: {
  fontSize:20,
  marginBotton: 10,
  },
  
});

export default HomeScreen;