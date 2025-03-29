import React, { useState } from 'react';
import {View, Text, Button ,StyleSheet} from 'react-native';

const DetailsScreen = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>details</Text>
      <Button title='Go home' onPress ={() => navigation.native('home')}/>
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
export default DetailsScreen;
