import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  Gap,
  Header,
  Select,
  Switch,
  TextArea,
  TextInput,
} from '../../components';

const Checkout = ({navigation}) => {
  return (
    <View>
      <Header
        title={'Pembayaran Donasi Program'}
        subTitle="Semangat Sedekah Subuh"
        onBack
        onPress={() => navigation.navigate('ProgramDetail')}
      />

      <View>
        <View style={styles.formInput}>
          <View>
            <Text style={styles.bodyTitle}>Masukan Nominal Donasi</Text>
            <TextInput placeholder="Rp" keyboardType={'numeric'} />
            <Text>Min. donasi sebesar Rp1.000</Text>
          </View>

          <View style={styles.bank}>
            <Select />
          </View>

          <Gap height={15} />

          <View>
            <TextArea
              lable="Kirim Do'a"
              placeholder="titipkan doa terbaikmu.."
            />
          </View>
          <Switch lable="Sembunyikan nama saya (Anonim)" />
        </View>
        <Gap height={20} />
        <View style={{paddingHorizontal: 24}}>
          <Button
            text="Donasi Sekarang"
            onPress={() => navigation.replace('OrderSummary')}
          />
        </View>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  formInput: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginTop: 30,
    paddingVertical: 20,
  },

  bodyTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
