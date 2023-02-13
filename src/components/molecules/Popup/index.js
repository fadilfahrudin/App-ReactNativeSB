import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Popup = () => {
  return (
    <View style={styles.wrapperPopUp}>
      <Text style={styles.h1}>Popup</Text>
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  h1: {fontSize: 20},
  wrapperPopUp: {
    // flex: 1,
    backgroundColor: 'red',
    position: 'absolute',
    width: '70%',
    height: '100%',
  },
});
