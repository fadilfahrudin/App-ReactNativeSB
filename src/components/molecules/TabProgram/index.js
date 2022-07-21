import {StyleSheet, Text, View, Image} from 'react-native';
import * as Progress from 'react-native-progress';
import {DummyProgram} from '../../../asset';
import React from 'react';

const TabProgram = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyProgram} style={styles.image} />
      <View style={styles.containerBody}>
        <Text style={styles.judul}>
          Bersama Semangat Bantu Selamatkan Al-Quds #savePalestina
        </Text>
        <Progress.Bar
          progress={0.3}
          width={250}
          height={3}
          color={'rgba(0, 80, 255, 1)'}
        />
        <Text style={styles.terkumpul}>Terkumpul</Text>
        <Text style={styles.nominal}>Rp10.000.000</Text>
      </View>
    </View>
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
