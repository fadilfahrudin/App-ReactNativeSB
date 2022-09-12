import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcForward} from '../../../asset';
import {color} from 'react-native-reanimated';

const ItemsListMenu = ({nama = 'nama', onPres}) => {
  return (
    <TouchableOpacity onPress={onPres}>
      <View style={styles.container}>
        <Text style={styles.nama}>{nama}</Text>
        <IcForward />
      </View>
    </TouchableOpacity>
  );
};

export default ItemsListMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nama: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: '#020202',
  },
});
