import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack} from '../../../asset/Icon';
import {LogoHeader} from '../../../asset/Illustration';
import Svg from 'react-native-svg';

const Header = ({title, subTitle, onBack, onPress}) => {
  return (
    <View style={styles.container}>
      {onBack && ( //jika ada prop on Back maka tampilkan back button
        <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 24,
  },
  title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  back: {padding: 16, marginRight: 16, marginLeft: -10},
});
