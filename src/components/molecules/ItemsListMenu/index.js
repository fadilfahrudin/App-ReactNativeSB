import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcForward} from '../../../asset';
import {color} from 'react-native-reanimated';

const ItemsListMenu = ({nama = 'nama', onPres, color = '#020202'}) => {
  return (
    <TouchableOpacity onPress={onPres}>
      <View style={styles.container}>
        <Text style={styles.nama(color)}>{nama}</Text>
        <IcForward />
      </View>
    </TouchableOpacity>
  );
};

export default ItemsListMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 13,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nama: color => ({
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: color,
  }),
});
