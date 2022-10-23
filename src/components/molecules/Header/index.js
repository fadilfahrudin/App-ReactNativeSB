import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack} from '../../../asset/Icon';

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
    backgroundColor: '#0050FF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 15,
  },
  title: {fontSize: 18, fontFamily: 'Poppins-Medium', color: 'white'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: 'white'},
  back: {padding: 16, marginRight: 16, marginLeft: -10},
});
