import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DummyProgram} from '../../../asset';
import Number from '../Number';
import moment from 'moment';

const NewsCard = ({danaPencairan, tglDistribusi, title, picture, onPress}) => {
  //   const formatedDate = moment(tglDistribusi).format('ddd, DD MMM YYYY');
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={picture} style={styles.img} />
          <View style={styles.info}>
            <View style={styles.infoDana}>
              <View>
                <Text>Pencairan Dana</Text>
                <Number number={danaPencairan} />
                {/* <Text>Rp.100.000</Text> */}
              </View>
              <Text>{tglDistribusi}</Text>
            </View>
            <View style={{height: 1, backgroundColor: '#0050FF'}} />
            <Text style={styles.titleBerita}>{title}</Text>
            <Text style={styles.detail}>Lihat selengkapnya..</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 5,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  content: {flexDirection: 'row'},
  info: {
    overflow: 'hidden',
    // backgroundColor: 'red',
    width: 250,
  },
  infoDana: {flexDirection: 'row', justifyContent: 'space-between'},
  titleBerita: {
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    fontSize: 16,
  },
  img: {width: 90, height: 90, resizeMode: 'cover', marginRight: 13},
  detail: {marginTop: 10},
});
