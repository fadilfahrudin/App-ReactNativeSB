import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Number from '../Number';

const InfoCard = ({namaInfo, totalDonasi, total}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{namaInfo}</Text>
      {total ? (
        <Text style={styles.isi}>{total}</Text>
      ) : (
        <Number
          number={totalDonasi <= 0 ? 'Rp.0' : totalDonasi}
          style={styles.isi}
        />
      )}
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 41,
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 12,
    shadowColor: 'black',
    shadowOpacity: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  title: {
    fontFamily: 'roboto-reguler',
    fontSize: 11,
    color: '#0B2B72',
    textAlign: 'right',
  },
  isi: {
    fontFamily: 'roboto-bold',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0B2B72',
    textAlign: 'right',
  },
});
