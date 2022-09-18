import React from 'react';
import {StyleSheet, View} from 'react-native';

const ProgressBarr = ({value, max}) => {
  const result = (value / max) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progress(result)} />
    </View>
  );
};

export default ProgressBarr;

const styles = StyleSheet.create({
  container: {
    height: 5,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 2,
    marginRight: 5,
  },
  progress: result => ({
    backgroundColor: 'black',
    width: `${result}%`,
  }),
});
