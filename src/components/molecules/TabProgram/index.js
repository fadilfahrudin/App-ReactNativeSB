import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ProgressBarr from '../ProgressBar';
import Number from '../Number';

const TabProgram = ({judul, image, max, value, nominal, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.containerBody}>
          <Text style={styles.judul}>{judul}</Text>
          <ProgressBarr value={value} max={max} />
          <Text style={styles.terkumpul}>Terkumpul</Text>
          <Number number={nominal} style={styles.nominal} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TabProgram;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 28,
    marginVertical: 18,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    width: '100%',
    // backgroundColor: 'red',
  },
  containerBody: {
    width: 250,
    paddingRight: 10,
    // backgroundColor: 'yellow',
    overflow: 'visible',
  },
  image: {width: 90, height: 90, resizeMode: 'cover', marginRight: 13},
  judul: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '700',
    marginVertical: 6,
  },
  terkumpul: {
    fontFamily: 'roboto',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 6,
  },
  nominal: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
});
