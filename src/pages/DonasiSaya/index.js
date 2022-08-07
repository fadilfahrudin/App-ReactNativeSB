import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Header, StatusTransaksi} from '../../components';
import {DummyProgram} from '../../asset';

const DonasiSaya = ({navigation}) => {
  return (
    <ScrollView>
      <Header title={'Donasi Saya'} subTitle="Semangat Sedekah Bantu Sesama" />
      <Text style={styles.catatan}>Catatan Kebaikan</Text>
      <TouchableOpacity onPress={() => navigation.navigate('OrderSummary')}>
        <StatusTransaksi
          image={DummyProgram}
          judul="Bersama Semangat Bantu Selamatkan Al-Quds #SavePalestine"
          waktu={'21 jam'}
          nominal="Rp10.000"
          status={'sukses'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('OrderSummary')}>
        <StatusTransaksi
          image={DummyProgram}
          judul="Bersama Semangat Bantu Selamatkan Al-Quds #SavePalestine"
          waktu={'21 jam'}
          nominal="Rp10.000"
          status={'tertunda'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('OrderSummary')}>
        <StatusTransaksi
          image={DummyProgram}
          judul="Bersama Semangat Bantu Selamatkan Al-Quds #SavePalestine"
          waktu={'21 jam'}
          nominal="Rp10.000"
          status={'gagal'}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DonasiSaya;

const styles = StyleSheet.create({
  catatan: {
    marginTop: 24,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    fontWeight: '500',
  },
});
