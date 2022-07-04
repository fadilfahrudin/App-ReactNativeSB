import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DummyProgram, IcCeklist, IcLike} from '../../../asset';
import {Gap} from '../../atoms';

const ProgramCard = () => {
  return (
    <View>
      <Image source={DummyProgram} />
      <Text>Semangat Sedekah Subuh</Text>
      <View style={styles.pemilikProgram}>
        <Text style={styles.lembaga}>Lembaga</Text>
        <IcCeklist />
      </View>
    </View>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  pemilikProgram: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lembaga: {color: 'blue'},
});
