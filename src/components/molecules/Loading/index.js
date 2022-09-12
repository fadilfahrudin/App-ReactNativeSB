import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0050FF" />
      <Text style={styles.text}>Loading..</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5);',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginTop: 12,
  },
});
