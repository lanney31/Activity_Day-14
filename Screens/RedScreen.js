import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RED</Text>
      
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} 
      />

<Button 
        title="Green" 
        onPress={() => navigation.navigate('Green')} 
        color="green"
      />

<Button 
        title="Blue" 
        onPress={() => navigation.navigate('Blue')} 
        color="blue"
      />

<Button 
        title="Red" 
        onPress={() => navigation.navigate('Red')} 
        color="red"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  space: {
    height: 20, // Adds space between buttons
  },
});

export default HomeScreen;