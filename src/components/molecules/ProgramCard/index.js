import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IcCeklist} from '../../../asset';
import * as Progress from 'react-native-progress';
import {Gap} from '../../atoms';

const ProgramCard = ({image, judul, nominal, date, by, progress}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.judul}>{judul}</Text>
        <View style={styles.pemilikProgram}>
          <Text style={styles.lembaga}>{by}</Text>
          <IcCeklist style={styles.ceklist} />
        </View>
        <Progress.Bar
          progress={progress}
          width={175}
          height={3}
          color={'rgba(0, 80, 255, 1)'}
        />
        <View style={styles.detail}>
          <Text style={styles.jml}>Rp,{nominal}</Text>
          <Gap width={2} />
          <Text style={styles.terkumpul}>Terkumpul</Text>
          <Gap width={6} />
          <Text style={styles.date}>{date} hari lagi</Text>
        </View>
      </View>
    </View>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 24,
    width: 200,
    height: 210,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
  },
  image: {width: 200, height: 140, resizeMode: 'cover'},
  body: {
    marginHorizontal: 10,
    width: 200,
    marginBottom: 10,
    overflow: 'hidden',
  },
  judul: {fontSize: 11, fontFamily: 'roboto-bold', color: '#0B2B72'},
  pemilikProgram: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {flexDirection: 'row'},
  lembaga: {color: '#7392D4', fontSize: 9, fontFamily: 'roboto-medium'},
  ceklist: {marginHorizontal: 2},
  jml: {fontFamily: 'roboto-bold', fontSize: 10, color: '#0B2B72'},
  terkumpul: {fontFamily: 'roboto-medium', fontSize: 9, color: '#0B2B72'},
  date: {fontFamily: 'roboto-medium', fontSize: 10, color: '#0B2B72'},
});
