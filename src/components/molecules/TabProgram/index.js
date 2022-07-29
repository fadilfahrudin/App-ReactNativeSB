import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import React from 'react';

const TabProgram = ({judul, image, progress, nominal, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.containerBody}>
          <Text style={styles.judul}>{judul}</Text>
          <Progress.Bar
            progress={progress}
            width={250}
            height={3}
            color={'rgba(0, 80, 255, 1)'}
          />
          <Text style={styles.terkumpul}>Terkumpul</Text>
          <Text style={styles.nominal}>Rp.{nominal}</Text>
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
  },
  containerBody: {},
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
