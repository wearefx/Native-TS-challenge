import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#eb0042',
  },
  text: {
    color: '#fff',
  },
});

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/fxdigitallogo.png')} />
      <Text style={styles.text}>Native Challenge</Text>
    </View>
  );
};

export default Header;
