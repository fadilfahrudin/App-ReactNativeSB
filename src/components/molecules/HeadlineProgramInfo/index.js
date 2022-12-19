import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';
import {IcCeklist} from '../../../asset';
import ProgressBarr from '../ProgressBar';
import Number from '../Number';

const HeadlineProgramInfo = ({
  title,
  program_by,
  formatDate,
  target_amount,
  collage_amount,
}) => {
  return (
    <View style={styles.headlineContainer}>
      <Text style={styles.judul}>{title}</Text>
      <Gap height={14} />
      <View style={styles.dayInfo}>
        <View>
          <Text style={styles.lable}>Pemilik Program</Text>
          <View style={styles.wrapBy}>
            <Text style={styles.by}>{program_by}</Text>
            <IcCeklist style={{marginLeft: 2}} />
          </View>
        </View>
        <Text>{formatDate} hari lagi</Text>
      </View>
      <Gap height={5} />

      <ProgressBarr max={target_amount} value={collage_amount} />

      <View style={styles.containerInfoNominal}>
        <Text style={styles.lableNominal}>Terkumpul</Text>
        <Number
          number={collage_amount <= 0 ? 'Rp.0' : collage_amount}
          style={styles.nominal}
        />
        <Text style={styles.infoNominal}>Dari</Text>
        <Number number={target_amount} style={styles.infoNominal} />
      </View>
    </View>
  );
};

export default HeadlineProgramInfo;

const styles = StyleSheet.create({
  headlineContainer: {
    backgroundColor: 'white',
    marginTop: -10,
    paddingHorizontal: 10,
    paddingTop: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  judul: {fontFamily: 'Roboto-Bold', fontSize: 18},
  dayInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lable: {fontFamily: 'Roboto-Reguler', marginBottom: 1, fontSize: 10},
  by: {fontFamily: 'Roboto-Bold', fontSize: 10},
  wrapBy: {flexDirection: 'row', alignItems: 'center'},
  containerInfoNominal: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    paddingBottom: 10,
    paddingTop: 5,
    fontSize: 10,
    marginBottom: 24,
  },
  lableNominal: {fontFamily: 'Roboto-Reguler'},
  nominal: {fontFamily: 'Roboto-Bold', marginLeft: 4},
  infoNominal: {fontFamily: 'Roboto-Reguler', marginLeft: 8},
});
