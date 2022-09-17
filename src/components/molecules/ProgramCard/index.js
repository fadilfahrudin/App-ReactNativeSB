import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IcCeklist} from '../../../asset';
import * as Progress from 'react-native-progress';
import {Gap} from '../../atoms';
import Number from '../Number';
import Moment from 'moment';
import {extendMoment} from 'moment-range';

const moment = extendMoment(Moment);

const ProgramCard = ({image, judul, nominal, date, by, progress}) => {
  const start = new Date();
  const end = new Date(date);
  const range = moment.range(start, end);
  const formatDate = range.diff('days');

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.body}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.judul}>
          {judul}
        </Text>
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
          <Number number={nominal} style={styles.jml} />
          <Gap width={2} />
          <Text style={styles.terkumpul}>Terkumpul</Text>
          <Gap width={6} />
          <Text style={styles.date}>{formatDate} hari lagi</Text>
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
    overflow: 'hidden',
  },
  image: {width: 200, height: 140, resizeMode: 'cover'},
  body: {
    marginHorizontal: 10,
    width: 200,
    marginBottom: 10,
    paddingRight: 10,
  },
  judul: {
    fontSize: 11,
    fontFamily: 'roboto-bold',
    color: '#0B2B72',
  },
  pemilikProgram: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {flexDirection: 'row'},
  lembaga: {color: '#7392D4', fontSize: 9, fontFamily: 'roboto-medium'},
  ceklist: {marginHorizontal: 2},
  terkumpul: {fontFamily: 'roboto-medium', fontSize: 9, color: '#0B2B72'},
  date: {fontFamily: 'roboto-medium', fontSize: 10, color: '#0B2B72'},
  jml: {fontFamily: 'roboto-bold', fontSize: 10, color: '#0B2B72'},
});
