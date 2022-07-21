import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IcCeklist} from '../../../asset';
import * as Progress from 'react-native-progress';

const ProgramCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.judul}>Semangat Sedekah Subuh</Text>
        <View style={styles.pemilikProgram}>
          <Text style={styles.lembaga}>Semangatbantu.com</Text>
          <IcCeklist style={styles.ceklist} />
        </View>
        <Progress.Bar
          progress={0.3}
          width={175}
          height={3}
          color={'rgba(0, 80, 255, 1)'}
        />
        <View style={styles.detail}>
          <Text style={styles.jml}>Rp, 1.000.000</Text>
          <Text style={styles.terkumpul}>Terkumpul</Text>
          <Text style={styles.date}>25 hari lagi</Text>
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
    marginBottom: 10,
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
